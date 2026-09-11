import { FaWind, FaSmog, FaIndustry, FaCloud } from "react-icons/fa";

export default function AQICards() {
  const cards = [
    {
      title: "AQI Index",
      value: "74",
      status: "Moderate",
      icon: <FaWind size={24} />,
    },
    {
      title: "PM2.5",
      value: "31 µg/m³",
      status: "Normal",
      icon: <FaSmog size={24} />,
    },
    {
      title: "PM10",
      value: "45 µg/m³",
      status: "Moderate",
      icon: <FaIndustry size={24} />,
    },
    {
      title: "CO",
      value: "0.6 ppm",
      status: "Safe",
      icon: <FaCloud size={24} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div className="text-green-600">{card.icon}</div>

            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {card.status}
            </span>
          </div>

          <h3 className="text-gray-500 mt-4 text-sm">
            {card.title}
          </h3>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}