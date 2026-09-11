import { motion } from "framer-motion";
import {
  FaWind,
  FaMapMarkedAlt,
  FaChartLine,
  FaBell,
} from "react-icons/fa";

const features = [
  {
    icon: <FaWind size={30} />,
    title: "Real-Time AQI",
    desc: "Monitor AQI, PM2.5, PM10, CO, NO₂ and O₃ levels instantly.",
  },
  {
    icon: <FaMapMarkedAlt size={30} />,
    title: "Location Analysis",
    desc: "Enter any city or location and view pollution statistics.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Prediction Engine",
    desc: "Forecast pollution trends using machine learning models.",
  },
  {
    icon: <FaBell size={30} />,
    title: "Smart Alerts",
    desc: "Get notified when pollution crosses safe limits.",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-8 bg-slate-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Platform Features
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Everything needed for air quality monitoring and prediction.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white"
            >
              <div className="text-blue-600 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}