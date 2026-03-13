# Project Overview

A full-stack web application built with:
- **Frontend**: React 19 + Vite + TailwindCSS v4 + shadcn/ui components + Wouter routing
- **Backend**: Express.js (TypeScript via tsx)
- **Database**: PostgreSQL via Drizzle ORM
- **State Management**: TanStack Query

## Project Structure

```
client/         - React frontend (Vite root)
  src/
    pages/      - Page components
    components/ - UI components (shadcn/ui)
    lib/        - Utilities and query client
    hooks/      - Custom React hooks
  index.html    - Entry HTML

server/         - Express backend
  index.ts      - Server entry point
  routes.ts     - API route registration
  storage.ts    - Database storage interface
  db.ts         - Drizzle/PostgreSQL setup

shared/         - Shared types and schemas
  schema.ts     - Drizzle schema + Zod schemas

script/
  build.ts      - Production build script
```

## Development

- Frontend runs on port 5000 (Vite dev server)
- Backend runs on port 3001 (Express)
- Vite proxies `/api` requests to backend at port 3001
- Both start together with `npm run dev`

## Key Commands

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Sync database schema

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string (set by Replit)

## Architecture Notes

- Path aliases: `@/` → `client/src/`, `@shared/` → `shared/`
- Database uses Drizzle ORM with PostgreSQL
- shadcn/ui component library (new-york style)
- Session auth via passport-local (ready to use)
