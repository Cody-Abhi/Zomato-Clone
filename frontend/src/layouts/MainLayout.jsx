import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

// MainLayout wraps every page.
// It shows the Navbar at the top, the page content in the middle,
// and the Footer at the bottom.
//
// Props:
// - cartCount: number of items in the cart (passed to Navbar)
// - toast: { show, message } for the toast notification
// - user: the logged-in user object or null (passed to Navbar)
// - onLogout: function to call when the Logout button is clicked
function MainLayout({ cartCount, toast, user, onLogout }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar cartCount={cartCount} user={user} onLogout={onLogout} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Toast appears on top of everything */}
      <Toast show={toast.show} message={toast.message} />
    </div>
  );
}

export default MainLayout;
