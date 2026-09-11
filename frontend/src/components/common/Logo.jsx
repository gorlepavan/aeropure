import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl font-bold">A</span>
        </div>

        <div className="absolute -top-1 -right-1 text-green-500 text-lg">
          🌿
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-800">
          Aero<span className="text-cyan-500">Pure</span>
        </h1>
        <p className="text-xs text-slate-500">
          Clean Air Intelligence
        </p>
      </div>
    </motion.div>
  );
};

export default Logo;