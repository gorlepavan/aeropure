import { motion } from "framer-motion";

const stats = [
  { value: "1200+", label: "Cities Monitored" },
  { value: "50K+", label: "Reports Generated" },
  { value: "98%", label: "Prediction Accuracy" },
  { value: "24/7", label: "Monitoring" },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white shadow-lg rounded-3xl p-8 text-center border"
            >
              <h2 className="text-5xl font-bold text-blue-600">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}