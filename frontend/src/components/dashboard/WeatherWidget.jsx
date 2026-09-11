export default function WeatherWidget() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        Weather Conditions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-blue-50 rounded-2xl p-4">
          <p className="text-gray-500">Temperature</p>
          <h3 className="text-3xl font-bold">31°C</h3>
        </div>

        <div className="bg-cyan-50 rounded-2xl p-4">
          <p className="text-gray-500">Humidity</p>
          <h3 className="text-3xl font-bold">68%</h3>
        </div>

        <div className="bg-green-50 rounded-2xl p-4">
          <p className="text-gray-500">Wind Speed</p>
          <h3 className="text-3xl font-bold">12 km/h</h3>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-4">
          <p className="text-gray-500">Condition</p>
          <h3 className="text-2xl font-bold">Clear</h3>
        </div>

      </div>
    </div>
  );
}