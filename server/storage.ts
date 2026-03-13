import { db } from "@db";
import { 
  users, 
  products, 
  orders, 
  orderItems,
  type User, 
  type InsertUser,
  type Product,
  type InsertProduct,
  type Order,
  type InsertOrder,
  type OrderItem,
  type InsertOrderItem
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Product operations
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  seedProducts(products: InsertProduct[]): Promise<void>;

  // Order operations
  createOrder(order: InsertOrder): Promise<Order>;
  addOrderItem(orderItem: InsertOrderItem): Promise<OrderItem>;
  getOrdersByUser(userId: string): Promise<Order[]>;
  getOrdersByEmail(email: string): Promise<Order[]>;
  getOrderWithItems(orderId: string): Promise<{ order: Order; items: OrderItem[] } | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Product operations
  async getAllProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }

  async seedProducts(productList: Product[]): Promise<void> {
    // Check if products already exist
    const existing = await db.select().from(products);
    if (existing.length === 0) {
      await db.insert(products).values(productList);
    }
  }

  // Order operations
  async createOrder(order: InsertOrder): Promise<Order> {
    const [newOrder] = await db.insert(orders).values(order).returning();
    return newOrder;
  }

  async addOrderItem(orderItem: InsertOrderItem): Promise<OrderItem> {
    const [newOrderItem] = await db.insert(orderItems).values(orderItem).returning();
    return newOrderItem;
  }

  async getOrdersByUser(userId: string): Promise<Order[]> {
    return await db.select().from(orders).where(eq(orders.userId, userId));
  }

  async getOrdersByEmail(email: string): Promise<Order[]> {
    return await db.select().from(orders).where(eq(orders.customerEmail, email));
  }

  async getOrderWithItems(orderId: string): Promise<{ order: Order; items: OrderItem[] } | undefined> {
    const [order] = await db.select().from(orders).where(eq(orders.id, orderId));
    if (!order) return undefined;

    const items = await db.select().from(orderItems).where(eq(orderItems.orderId, orderId));
    return { order, items };
  }
}

export const storage = new DatabaseStorage();
