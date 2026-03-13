# Netlify Deployment Guide

This guide explains how to deploy your OptiLife Wellbeing app to Netlify.

## Prerequisites

- Netlify account (free at [netlify.com](https://netlify.com))
- GitHub repository with your code pushed

## Option 1: Frontend-Only Deployment (Recommended for Quick Start)

This deploys just the React frontend to Netlify. API calls will proxy to your Replit backend.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Leave other settings as default

4. **Set Environment Variables** (if needed)
   - In Netlify dashboard → Site settings → Build & deploy → Environment
   - Add any environment variables your frontend needs

5. **Deploy!**
   - Click Deploy Site
   - Netlify will automatically build and deploy

### Frontend API Configuration

Your frontend is already configured to work with the backend:
- **Development**: Vite proxies `/api` to `http://localhost:3001`
- **Production**: You need to set the backend URL

Update `client/src/lib/queryClient.ts` or set an environment variable for the backend API URL.

---

## Option 2: Full-Stack Deployment (Backend + Frontend)

If you want to deploy the entire app (backend + frontend) together:

### Deploy Backend to Render or Railway:

1. **Render.com** (recommended)
   - Create account at [render.com](https://render.com)
   - New → Web Service
   - Connect your GitHub repo
   - Settings:
     - Build command: `npm install`
     - Start command: `npm run start`
     - Environment variables: Set `DATABASE_URL` to your PostgreSQL connection string
   - Create Web Service

2. **Railway.app** (alternative)
   - Similar process at [railway.app](https://railway.app)
   - Connect repo and set environment

### Deploy Frontend to Netlify:

1. Follow Option 1 steps above
2. Set `VITE_API_URL` environment variable to your backend URL (e.g., `https://your-backend.onrender.com`)
3. Update `client/src/lib/queryClient.ts` to use this URL

---

## Option 3: Keep Backend on Replit (Simplest)

This is the easiest approach:

1. Keep your backend running on Replit
2. Deploy only the frontend to Netlify
3. Frontend will call your Replit backend at: `https://your-replit-domain.replit.dev/api/*`

### Steps:
1. Deploy your Replit project (blue Deploy button)
2. Copy your published URL (e.g., `https://optilife-wellbeing.replit.dev`)
3. Deploy frontend to Netlify (Option 1 above)
4. In Netlify, set environment: `VITE_API_URL=https://optilife-wellbeing.replit.dev`
5. Update API calls in code to use `${process.env.VITE_API_URL}/api/...`

---

## Troubleshooting

**Build fails with "npm: command not found"**
- Make sure Node.js 18+ is available. Netlify should detect it automatically.

**API calls fail after deployment**
- Check that your backend URL is correct
- Verify CORS is enabled on your backend
- Check browser console for exact error messages

**Database connection issues**
- Ensure `DATABASE_URL` environment variable is set
- Check that your PostgreSQL database is accessible from the backend

---

## Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] `netlify.toml` configured
- [ ] Backend deployed (or kept on Replit)
- [ ] API URL configured in frontend
- [ ] Environment variables set on Netlify
- [ ] Build and deploy triggered
- [ ] Test API endpoints work

---

## File Structure After Build

```
dist/
  public/
    index.html
    assets/
    [all frontend assets]
  index.cjs          # Backend bundle (if full-stack)
```

Netlify will serve `dist/public` as your frontend and can optionally run `dist/index.cjs` as your backend.
