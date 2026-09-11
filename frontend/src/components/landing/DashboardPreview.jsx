export default function DashboardPreview() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 w-[420px]">

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">Live AQI</h3>

        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          Online
        </span>
      </div>

      <div className="mt-6 text-center">
        <h1 className="text-7xl font-bold text-blue-600">
          74
        </h1>

        <p className="text-gray-500">
          Moderate Air Quality
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="bg-gray-50 p-3 rounded-xl">
          <p className="text-sm text-gray-500">PM2.5</p>
          <h4 className="font-bold">31</h4>
        </div>

        <div className="bg-gray-50 p-3 rounded-xl">
          <p className="text-sm text-gray-500">PM10</p>
          <h4 className="font-bold">45</h4>
        </div>

        <div className="bg-gray-50 p-3 rounded-xl">
          <p className="text-sm text-gray-500">CO</p>
          <h4 className="font-bold">0.6</h4>
        </div>

        <div className="bg-gray-50 p-3 rounded-xl">
          <p className="text-sm text-gray-500">NO₂</p>
          <h4 className="font-bold">12</h4>
        </div>

      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">
          Major Pollution Sources
        </h4>

        <div className="space-y-2">

          <div className="flex justify-between">
            <span>Traffic</span>
            <span>42%</span>
          </div>

          <div className="flex justify-between">
            <span>Industries</span>
            <span>28%</span>
          </div>

          <div className="flex justify-between">
            <span>Dust</span>
            <span>20%</span>
          </div>

        </div>
      </div>

    </div>
  );
}