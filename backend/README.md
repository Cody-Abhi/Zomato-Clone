# Backend — Express + MySQL

## Stack
- Node.js + Express 5
- MySQL2 (Railway MySQL)
- JWT Auth
- bcrypt
- CORS, cookie-parser, morgan, multer

## Setup

```bash
npm install
cp .env.example .env   # fill in DB credentials
npm run dev            # nodemon → http://localhost:5000
npm start              # node (production)
```

## API Routes

| Method | Path | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get profile (auth required) |
| GET | `/api/restaurants` | List restaurants |
| POST | `/api/restaurants` | Create restaurant (vendor/admin) |
| GET | `/api/restaurants/:id` | Get restaurant by id |
| PUT | `/api/restaurants/:id` | Update restaurant |
| DELETE | `/api/restaurants/:id` | Delete restaurant |

## Railway Deployment

- Set all `DB_*` env vars OR `MYSQL_URL` in Railway service variables
- Set `CLIENT_URL` to your Vercel frontend URL
- Railway auto-sets `PORT`
