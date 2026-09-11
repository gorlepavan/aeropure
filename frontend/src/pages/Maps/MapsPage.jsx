import Sidebar from "../../components/dashboard/Sidebar";
import MapPreview from "../../components/dashboard/MapPreview";

export default function MapsPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-8">

        <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
          <h1 className="text-4xl font-bold">
            Air Quality Maps
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor pollution levels across locations.
          </p>
        </div>

        <MapPreview />

      </main>
    </div>
  );
}