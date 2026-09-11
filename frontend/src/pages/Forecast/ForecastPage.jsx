import Sidebar from "../../components/dashboard/Sidebar";
import AQIChart from "../../components/dashboard/AQIChart";

export default function ForecastPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
          <h1 className="text-4xl font-bold">
            AQI Forecast
          </h1>

          <p className="text-gray-500 mt-2">
            AI-based pollution prediction trends.
          </p>
        </div>

        <AQIChart />

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-3xl shadow-md">
            <h3 className="font-bold text-xl">Tomorrow</h3>
            <h2 className="text-4xl text-green-600 mt-4">78</h2>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md">
            <h3 className="font-bold text-xl">3 Days</h3>
            <h2 className="text-4xl text-yellow-500 mt-4">92</h2>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md">
            <h3 className="font-bold text-xl">7 Days</h3>
            <h2 className="text-4xl text-red-500 mt-4">118</h2>
          </div>

        </div>

      </main>
    </div>
  );
}