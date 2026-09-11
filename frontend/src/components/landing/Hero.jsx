import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-gray-900"
          >
            Air Quality
            <br />
            Intelligence
          </motion.h1>

          <p className="mt-6 text-xl text-gray-600">
            Analyze pollution levels,
            identify sources,
            predict AQI and generate reports.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="px-8 py-4 rounded-full bg-blue-600 text-white">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-full border">
              Live Demo
            </button>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">1200+</h3>
              <p className="text-gray-500">Cities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">50K+</h3>
              <p className="text-gray-500">Reports</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">98%</h3>
              <p className="text-gray-500">Accuracy</p>
            </div>

          </div>

        </div>

        <DashboardPreview />

      </div>

    </section>
  );
}