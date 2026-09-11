export default function AlertCenter() {
  const alerts = [
    {
      level: "High",
      city: "Delhi",
      message: "AQI crossed 180. Avoid outdoor activities.",
    },
    {
      level: "Medium",
      city: "Hyderabad",
      message: "AQI rising due to traffic emissions.",
    },
    {
      level: "Low",
      city: "Vijayawada",
      message: "Air quality remains stable.",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">
        AQI Alert Center
      </h2>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 hover:bg-slate-50"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">
                {alert.city}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  alert.level === "High"
                    ? "bg-red-500"
                    : alert.level === "Medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {alert.level}
              </span>
            </div>

            <p className="text-gray-600 mt-2">
              {alert.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}