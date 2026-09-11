import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaMapMarkedAlt,
  FaChartLine,
  FaFilePdf,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        🌿 AeroPure
      </h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link
          to="/maps"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <FaMapMarkedAlt />
          Maps
        </Link>

        <Link
          to="/forecast"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <FaChartLine />
          Forecast
        </Link>

        <Link
          to="/reports"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <FaFilePdf />
          Reports
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
        >
          <FaCog />
          Settings
        </Link>

      </nav>
    </aside>
  );
}