
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet marker icons in some build environments
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const doualaCoords: [number, number] = [4.0511, 9.7679];

const LocationMap: React.FC = () => (
  <div className="w-full rounded-xl overflow-hidden shadow-md" style={{ minHeight: 220, height: 280, padding: 0 }}>
    <MapContainer
      center={doualaCoords}
      zoom={30}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={doualaCoords} />
    </MapContainer>
  </div>
);

export default LocationMap;

