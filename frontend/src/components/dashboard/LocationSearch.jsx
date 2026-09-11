import { useState } from "react";

export default function LocationSearch() {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    alert(`Searching AQI for ${city}`);
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Search Location
      </h2>

      <div className="flex gap-4">
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
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3"
        />

        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}