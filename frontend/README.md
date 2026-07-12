# Frontend — React + Vite

## Stack
- React 18
- Vite 5
- Tailwind CSS
- React Router DOM
- Axios

## Setup

```bash
npm install
cp .env.example .env
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
```

## Environment Variables

| Variable | Dev value | Production value |
|---|---|---|
| `VITE_API_URL` | _(empty — Vite proxy handles it)_ | `https://your-backend.up.railway.app` |

## Vercel Deployment

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Root Directory**: `frontend`
- Add `VITE_API_URL` in Vercel Environment Variables pointing to your Railway backend.
