# Architecture Overview

## Frontend ↔ Backend Connection

```
Browser (React)
    │
    │ axios.get(`${VITE_API_URL}/api/auth/...`)
    │
    ▼
[Dev]  Vite Dev Server (:5173)
          │ proxy /api → localhost:5000
          ▼
       Express Backend (:5000)
          │
          ▼
       Railway MySQL
```

```
[Prod] Vercel (frontend)
          │ VITE_API_URL=https://xxx.up.railway.app
          ▼
       Railway (backend)
          │ MYSQL_URL=mysql://...
          ▼
       Railway MySQL
```

## CORS

Backend allows requests from `CLIENT_URL` env var:
- Dev: `http://localhost:5173`
- Prod: your Vercel URL

## Auth Flow

1. User logs in → POST `/api/auth/login` → receives JWT
2. JWT stored in `localStorage`
3. Every subsequent request: Axios interceptor adds `Authorization: Bearer <token>`
4. Backend middleware validates JWT, attaches `req.user`
