import axios from "axios";

// -------------------------------------------------------
// authApi.js — Frontend API functions for authentication.
// -------------------------------------------------------
// This file uses Axios to talk to our Express backend.
// We create one shared Axios instance here so we can:
//   - set the base URL once
//   - automatically attach the JWT token to every request
//     (using a "request interceptor")
//
// The three exported functions are:
//   registerUser(name, email, password)  → POST /api/auth/register
//   loginUser(email, password)            → POST /api/auth/login
//   getProfile()                          → GET  /api/auth/profile
// -------------------------------------------------------

// In development: VITE_API_URL is empty → Vite proxy forwards /api → localhost:5000
// In production:  VITE_API_URL=https://your-app.up.railway.app (set on Vercel)
const BASE_URL = import.meta.env.VITE_API_URL || "";

const api = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
});

// Request interceptor — runs automatically before every request is sent.
// It reads the JWT from localStorage and adds it to the
// "Authorization" header in the format "Bearer <token>".
// This means we don't have to manually add the header on every call.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Register a new user.
// Sends name, email, password to the backend.
// Returns the response data on success.
export async function registerUser(name, email, password) {
  const response = await api.post("/register", { name, email, password });
  return response.data;
}

// Log in an existing user.
// Sends email and password to the backend.
// On success the backend returns { success, token, user }.
// We save the token to localStorage so it persists across page reloads.
// We return the user object so the frontend can update its state.
export async function loginUser(email, password) {
  const response = await api.post("/login", { email, password });
  const { token, user } = response.data;

  // Save the token in localStorage so it survives page refreshes.
  // Key is "token", value is the JWT string.
  localStorage.setItem("token", token);

  return user;
}

// Fetch the logged-in user's profile.
// The token is attached automatically by the interceptor above.
// Returns { id, name, email } from the backend.
export async function getProfile() {
  const response = await api.get("/profile");
  return response.data;
}

// Remove the token from localStorage (used by the Logout button).
export function logout() {
  localStorage.removeItem("token");
}
