# Zomato Clone — Full Stack Monorepo

A full-stack food delivery web app built with React (Vite) + Node.js/Express + MySQL.

## Project Structure

```
project/
├── frontend/        # React + Vite (deploy to Vercel)
├── backend/         # Express + MySQL (deploy to Railway)
├── docs/            # Architecture & deployment notes
└── README.md
```

## Quick Start

### Backend
```bash
cd backend
cp .env.example .env   # fill in your values
npm install
npm run dev            # runs on http://localhost:5000
```

### Frontend
```bash
cd frontend
cp .env.example .env   # VITE_API_URL= (empty for dev proxy)
npm install
npm run dev            # runs on http://localhost:5173
```

## Deployment

| Layer    | Platform | Notes |
|----------|----------|-------|
| Frontend | Vercel   | Set `VITE_API_URL` to your Railway backend URL |
| Backend  | Railway  | Set `CLIENT_URL` to your Vercel frontend URL |
| Database | Railway MySQL | Connection via `MYSQL_URL` or individual `DB_*` vars |
