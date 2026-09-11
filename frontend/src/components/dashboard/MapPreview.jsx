import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapPreview() {
  const position = [16.5062, 80.6480]; // Vijayawada

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Location Map
      </h2>

      <MapContainer
        center={position}
        zoom={11}
        style={{
          height: "450px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Vijayawada AQI Monitoring Point
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}