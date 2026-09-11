export default function TopCities() {
  const cities = [
    { city: "Delhi", aqi: 188 },
    { city: "Mumbai", aqi: 142 },
    { city: "Hyderabad", aqi: 102 },
    { city: "Vijayawada", aqi: 74 },
    { city: "Bangalore", aqi: 62 },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Top Polluted Cities
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">City</th>
            <th className="text-left py-2">AQI</th>
          </tr>
        </thead>

        <tbody>
          {cities.map((c, index) => (
            <tr key={index} className="border-b">
              <td className="py-3">{c.city}</td>
              <td className="py-3">{c.aqi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}