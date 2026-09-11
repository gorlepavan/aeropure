import Sidebar from "../../components/dashboard/Sidebar";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Configure AeroPure preferences.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Default City
            </label>

            <input
              type="text"
              defaultValue="Vijayawada"
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Email Alerts
            </label>

            <input type="checkbox" />
          </div>

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
            Save Settings
          </button>

        </div>

      </main>
    </div>
  );
}