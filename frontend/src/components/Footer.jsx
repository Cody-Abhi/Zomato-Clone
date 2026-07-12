import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaUtensils,
} from "react-icons/fa";
import {
  APP_NAME,
  FOOTER_LINKS,
  COMPANY_LINKS,
} from "../utils/constants";

// The footer shown at the bottom of every page.
function Footer() {
  // Get the current year for the copyright text
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand and social */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <FaUtensils className="text-primary text-2xl" />
              <span className="text-xl font-bold">{APP_NAME}</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Discover the best food around you. Order from your favorite
              restaurants with just a few taps.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors hover:text-accent">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-base font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-base font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Email: hello@foodie.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Connaught Place, New Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {year} {APP_NAME}. All rights reserved.</p>
          <p className="mt-2">
            Designed and developed by{" "}
            <a
              href="https://www.linkedin.com/in/abhinav-srivastava-96a760326"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-accent font-medium transition-all"
            >
              Abhinav Srivastava
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
