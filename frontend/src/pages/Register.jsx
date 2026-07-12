import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUtensils,
  FaSpinner,
} from "react-icons/fa";
import { registerUser } from "../services/authApi";

// The Register page.
// A simple card with name, email, password and confirm password fields.
// On submit it calls the backend register API.
function Register() {
  // State for all input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  // Loading state (while the API request is in progress)
  const [loading, setLoading] = useState(false);
  // Error message from the API (shown in red below the form)
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Called when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side check: passwords must match
    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Call the register API function.
      // It sends name, email, password to the backend.
      // The backend hashes the password with bcrypt and saves the user.
      await registerUser(name, email, password);

      // On success, redirect to the login page with a success message.
      // We pass the message via the router state so the Login page can show it.
      navigate("/login", {
        state: { message: "Registered successfully! Please log in." },
      });
    } catch (err) {
      // Show the error from the backend (e.g. "Email already registered")
      setError(
        err.response?.data?.message ||
          "Registration failed. Check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-card">
        {/* Logo + heading */}
        <div className="mb-6 text-center">
          <FaUtensils className="mx-auto text-3xl text-primary" />
          <h1 className="mt-2 text-2xl font-bold text-text">Create Account</h1>
          <p className="text-sm text-gray-500">Join Foodie today</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-primary">
            {error}
          </div>
        )}

        {/* Register form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Full Name
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 focus-within:border-primary">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Email field */}
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Email
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 focus-within:border-primary">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Password
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 focus-within:border-primary">
              <FaLock className="text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full bg-transparent text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-primary"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm password field */}
          <div>
            <label className="mb-1 block text-sm font-medium text-text">
              Confirm Password
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 focus-within:border-primary">
              <FaLock className="text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Re-enter password"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Submit button — shows spinner while loading */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-white transition-all duration-300 hover:bg-[#c42f3b] active:scale-95 disabled:opacity-60"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" /> Registering...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Link to login page */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
