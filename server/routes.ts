import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema, insertOrderItemSchema, type Product } from "@shared/schema";
import { z } from "zod";

// Import product data from frontend
const productsData: Array<Product> = [
  {
    id: "sea-kelp",
    name: "Sea Kelp",
    description: "Rich natural source of iodine to support thyroid function and metabolism.",
    price: "28.99",
    image: "/assets/generated_images/amber_bottle_with_sea_kelp.png",
    longDescription: "Our Sea Kelp supplement provides a rich, natural source of iodine, an essential mineral for healthy thyroid function and metabolic regulation. Harvested from pristine waters, this nutrient-dense seaweed supports cognitive function, skin health, and energy production.",
    benefits: [
      "Supports thyroid health",
      "Boosts metabolism",
      "Promotes healthy skin and hair",
      "Natural source of essential minerals"
    ],
    ingredients: "Pure Sea Kelp Extract (Ascophyllum nodosum), Vegetable Capsule Shell."
  },
  {
    id: "flaxseed-oil",
    name: "Flaxseed Oil",
    description: "Essential Omega-3, 6 & 9 fatty acids for heart, skin, and joint health.",
    price: "26.99",
    image: "/assets/generated_images/amber_bottle_with_flaxseeds.png",
    longDescription: "Flaxseed Oil is one of nature's best plant-based sources of essential fatty acids. Packed with Alpha-Linolenic Acid (ALA), it supports cardiovascular health, helps maintain healthy cholesterol levels, and nourishes skin from within. Ideal for vegetarians and vegans.",
    benefits: [
      "Rich in Omega-3, 6 & 9",
      "Supports heart health",
      "Promotes radiant skin",
      "Plant-based essential fatty acids"
    ],
    ingredients: "Organic Flaxseed Oil (Cold Pressed), Vegan Softgel Shell (Modified Starch, Glycerin, Carrageenan)."
  },
  {
    id: "boswellia-serrata",
    name: "Boswellia Serrata",
    description: "Potent anti-inflammatory support for joint comfort and mobility.",
    price: "28.50",
    image: "/assets/generated_images/amber_bottle_with_boswellia_resin.png",
    longDescription: "Also known as Indian Frankincense, Boswellia Serrata has been used for centuries in Ayurveda to support joint health. Our high-potency extract contains active boswellic acids that help reduce inflammation, improve joint flexibility, and support overall mobility.",
    benefits: [
      "Promotes joint comfort",
      "Supports healthy inflammation response",
      "Enhances mobility and flexibility",
      "Traditional Ayurvedic remedy"
    ],
    ingredients: "Boswellia Serrata Extract (65% Boswellic Acids), Vegetable Capsule Shell."
  },
  {
    id: "bee-propolis",
    name: "Bee Propolis",
    description: "Natural immune booster rich in bioflavonoids and antioxidants.",
    price: "28.99",
    image: "/assets/generated_images/amber_bottle_with_honeycomb.png",
    longDescription: "Bee Propolis is nature's defender, collected by bees to protect their hives. Rich in bioflavonoids and antioxidants, this powerful supplement supports the immune system, promotes healing, and helps maintain oral health. A natural way to stay resilient year-round.",
    benefits: [
      "Supports immune system function",
      "Rich in natural antioxidants",
      "Promotes oral hygiene",
      "Natural antibiotic properties"
    ],
    ingredients: "Purified Bee Propolis Extract, Vegetable Capsule Shell."
  },
  {
    id: "african-mango",
    name: "African Mango",
    description: "Supports healthy weight management and metabolism.",
    price: "28.99",
    image: "/assets/generated_images/amber_bottle_with_african_mango.png",
    longDescription: "African Mango (Irvingia Gabonensis) is a popular supplement for supporting weight management goals. It may help regulate appetite, support healthy cholesterol levels, and boost metabolism. A natural addition to a balanced diet and exercise routine.",
    benefits: [
      "Supports weight management",
      "May help regulate appetite",
      "Supports healthy metabolism",
      "Rich in fiber"
    ],
    ingredients: "African Mango Extract (10:1), Vegetable Capsule Shell."
  },
  {
    id: "turmeric",
    name: "Turmeric",
    description: "Powerful antioxidant and anti-inflammatory support with Curcumin.",
    price: "28.99",
    image: "/assets/generated_images/amber_bottle_with_turmeric_powder.png",
    longDescription: "Our Turmeric supplement delivers the potent benefits of Curcumin, the active compound known for its powerful anti-inflammatory and antioxidant properties. Enhanced with black pepper extract for optimal absorption, it supports joint health, digestion, and overall vitality.",
    benefits: [
      "Potent anti-inflammatory",
      "High antioxidant activity",
      "Supports joint & digestive health",
      "Enhanced absorption formula"
    ],
    ingredients: "Organic Turmeric Root Powder, Curcumin Extract (95%), Black Pepper Extract (Piperine), Vegetable Capsule Shell."
  },
  {
    id: "raspberry-ketones",
    name: "Raspberry Ketones",
    description: "Natural metabolic support to aid energy and fat breakdown.",
    price: "28.99",
    image: "/assets/generated_images/amber_bottle_with_raspberries.png",
    longDescription: "Raspberry Ketones are the aromatic compounds found in red raspberries. This supplement is designed to support metabolism and aid in the breakdown of fat. A popular choice for those looking to enhance their energy levels and support body composition goals naturally.",
    benefits: [
      "Supports fat metabolism",
      "Boosts energy levels",
      "Natural antioxidant support",
      "Aids weight management efforts"
    ],
    ingredients: "Pure Raspberry Ketones, Vegetable Capsule Shell."
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    description: "Supports healthy blood sugar levels and digestive wellness.",
    price: "28.99",
    image: "/assets/generated_images/amber_bottle_with_cinnamon_sticks.png",
    longDescription: "Cinnamon is more than just a spice; it's a powerful wellness aid. Our concentrated Cinnamon extract helps maintain healthy blood sugar levels already within the normal range and supports digestive comfort. A warming, natural way to support metabolic health.",
    benefits: [
      "Maintains healthy blood sugar levels",
      "Supports digestive health",
      "Natural antioxidant properties",
      "Promotes metabolic wellness"
    ],
    ingredients: "Cinnamon Bark Extract (30:1), Vegetable Capsule Shell."
  }
];

// Checkout request schema
const checkoutSchema = z.object({
  customerEmail: z.string().email(),
  customerName: z.string().min(1),
  shippingAddress: z.object({
    line1: z.string().min(1),
    line2: z.string().optional(),
    city: z.string().min(1),
    postalCode: z.string().min(1),
    country: z.string().min(1),
  }),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().int().positive(),
  })).min(1),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed products on startup
  await storage.seedProducts(productsData);

  // Get all products
  app.get("/api/products", async (_req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  // Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  // Create order (checkout)
  app.post("/api/checkout", async (req, res) => {
    try {
      const data = checkoutSchema.parse(req.body);

      // Calculate totals
      let subtotal = 0;
      const orderProducts: Array<{ product: Product; quantity: number }> = [];

      for (const item of data.items) {
        const product = await storage.getProduct(item.productId);
        if (!product) {
          return res.status(400).json({ error: `Product ${item.productId} not found` });
        }
        orderProducts.push({ product, quantity: item.quantity });
        subtotal += parseFloat(product.price) * item.quantity;
      }

      const total = subtotal; // No tax or shipping for now

      // Create order
      const order = await storage.createOrder({
        userId: null,
        customerEmail: data.customerEmail,
        customerName: data.customerName,
        shippingAddress: data.shippingAddress,
        subtotal: subtotal.toFixed(2),
        total: total.toFixed(2),
        status: "pending",
      });

      // Add order items
      for (const { product, quantity } of orderProducts) {
        await storage.addOrderItem({
          orderId: order.id,
          productId: product.id,
          quantity,
          price: product.price,
        });
      }

      res.json({ 
        success: true, 
        orderId: order.id,
        message: "Order placed successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  // Get order by ID
  app.get("/api/orders/:id", async (req, res) => {
    try {
      const orderData = await storage.getOrderWithItems(req.params.id);
      if (!orderData) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(orderData);
    } catch (error) {
      console.error("Error fetching order:", error);
      res.status(500).json({ error: "Failed to fetch order" });
    }
  });

  return httpServer;
}
