import Logo from "../common/Logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex gap-8 text-slate-700">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Maps</a>
          <a href="#">Reports</a>
        </div>

        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:scale-105 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;