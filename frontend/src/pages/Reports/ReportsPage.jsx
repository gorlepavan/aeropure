import Sidebar from "../../components/dashboard/Sidebar";

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
          <h1 className="text-4xl font-bold">
            Reports Center
          </h1>

          <p className="text-gray-500 mt-2">
            Download AQI analysis reports.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="font-bold text-xl">
              Daily Report
            </h3>

            <button className="mt-6 bg-green-600 text-white px-5 py-3 rounded-xl">
              Download PDF
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="font-bold text-xl">
              Weekly Report
            </h3>

            <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl">
              Download PDF
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="font-bold text-xl">
              Monthly Report
            </h3>

            <button className="mt-6 bg-purple-600 text-white px-5 py-3 rounded-xl">
              Download PDF
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}