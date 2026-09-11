import { FaCheckCircle } from "react-icons/fa";

export default function WhyAeroPure() {
  const features = [
    "Real-Time AQI Monitoring",
    "Pollution Source Analysis",
    "Location-Based Insights",
    "Smart Prediction Engine",
    "Historical Data Storage",
    "PDF Report Generation",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900">
            Why AeroPure?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            A complete platform for air quality monitoring,
            analysis and prediction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <FaCheckCircle className="text-blue-600 text-3xl mb-4" />

              <h3 className="font-semibold text-lg text-gray-800">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}