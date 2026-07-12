import { Navigate, Outlet } from "react-router-dom";

// -------------------------------------------------------
// ProtectedRoute — Guards pages that need a logged-in user.
// -------------------------------------------------------
// How it works:
//   1. Check if a JWT token exists in localStorage.
//   2. If YES  → render the child routes via <Outlet />
//   3. If NO   → redirect to /login (using <Navigate />)
//
// The "replace" prop means the login page replaces the
// current entry in the browser history, so the user can't
// press Back to reach the protected page without logging in.
//
// NOTE: This is a client-side check for UX only. The REAL
// security is on the server — the backend's authMiddleware
// rejects any API request that lacks a valid token.
// -------------------------------------------------------

function ProtectedRoute() {
  // Read the token from localStorage
  const token = localStorage.getItem("token");

  // If there is no token, redirect to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token exists → render the child routes (the actual page)
  return <Outlet />;
}

export default ProtectedRoute;
