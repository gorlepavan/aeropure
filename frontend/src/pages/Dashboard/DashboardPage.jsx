import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import AQICards from "../../components/dashboard/AQICards";
import AQIChart from "../../components/dashboard/AQIChart";
import PollutionSources from "../../components/dashboard/PollutionSources";
import LocationSearch from "../../components/dashboard/LocationSearch";
import MapPreview from "../../components/dashboard/MapPreview";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Header />

        <AQICards />

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <AQIChart />
          <PollutionSources />
        </div>

        <div className="mt-8">
          <LocationSearch />
        </div>

        <div className="mt-8">
          <MapPreview />
        </div>
      </main>
    </div>
  );
}