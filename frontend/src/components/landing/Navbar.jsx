import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="AeroPure Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="#maps" className="hover:text-blue-600 transition">
            Maps
          </a>

          <a href="#reports" className="hover:text-blue-600 transition">
            Reports
          </a>
        </div>

        {/* Login Button */}
        <Link
          to="/login"
          className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:scale-105 transition duration-300"
        >
          Login
        </Link>

      </div>
    </motion.nav>
  );
}