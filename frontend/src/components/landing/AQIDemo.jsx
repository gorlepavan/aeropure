import { useState } from "react";

export default function AQIDemo() {
  const [city, setCity] = useState("Vijayawada");

  const [aqiData, setAqiData] = useState({
    aqi: 74,
    pm25: 31,
    pm10: 45,
    co: 0.6,
    no2: 12,
  });

  const handleSearch = () => {
    const sampleData = {
      vijayawada: {
        aqi: 74,
        pm25: 31,
        pm10: 45,
        co: 0.6,
        no2: 12,
      },

      hyderabad: {
        aqi: 102,
        pm25: 52,
        pm10: 78,
        co: 0.9,
        no2: 22,
      },

      delhi: {
        aqi: 188,
        pm25: 96,
        pm10: 145,
        co: 1.2,
        no2: 35,
      },

      mumbai: {
        aqi: 121,
        pm25: 62,
        pm10: 89,
        co: 0.8,
        no2: 25,
      },

      bangalore: {
        aqi: 68,
        pm25: 28,
        pm10: 42,
        co: 0.5,
        no2: 10,
      },

      chennai: {
        aqi: 82,
        pm25: 37,
        pm10: 58,
        co: 0.7,
        no2: 14,
      },
    };

    const result = sampleData[city.trim().toLowerCase()];

    if (result) {
      setAqiData(result);
    } else {
      alert("City not found");
    }
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Air Quality Analysis
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Enter city name..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Analyze
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">

          <h3 className="text-2xl font-bold mb-4 capitalize">
            {city}
          </h3>

          <h1 className="text-6xl font-bold text-green-600">
            {aqiData.aqi}
          </h1>

          <p className="text-gray-500 mb-8">
            Air Quality Index
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-slate-50 p-4 rounded-2xl">
              <h4 className="text-gray-500">PM2.5</h4>
              <p className="text-2xl font-bold">
                {aqiData.pm25}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <h4 className="text-gray-500">PM10</h4>
              <p className="text-2xl font-bold">
                {aqiData.pm10}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <h4 className="text-gray-500">CO</h4>
              <p className="text-2xl font-bold">
                {aqiData.co}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl">
              <h4 className="text-gray-500">NO₂</h4>
              <p className="text-2xl font-bold">
                {aqiData.no2}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}