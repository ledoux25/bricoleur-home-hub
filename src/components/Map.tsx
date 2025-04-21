
import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const DEFAULT_LONGITUDE = 30;
const DEFAULT_LATITUDE = 15;

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [tokenError, setTokenError] = useState(false);

  // Save token to localStorage and retrieve on mount for reload convenience
  useEffect(() => {
    const stored = localStorage.getItem("mapbox-token");
    if (stored) setMapboxToken(stored);
  }, []);
  useEffect(() => {
    if (mapboxToken) localStorage.setItem("mapbox-token", mapboxToken);
  }, [mapboxToken]);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    try {
      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        projection: "globe",
        zoom: 1.5,
        center: [DEFAULT_LONGITUDE, DEFAULT_LATITUDE],
        pitch: 45,
      });

      mapRef.current.addControl(
        new mapboxgl.NavigationControl({ visualizePitch: true }),
        "top-right"
      );
      mapRef.current.scrollZoom.disable();

      mapRef.current.on("style.load", () => {
        mapRef.current?.setFog &&
          mapRef.current.setFog({
            color: "rgb(255, 255, 255)",
            "high-color": "rgb(200, 200, 225)",
            "horizon-blend": 0.2,
          });
      });

      // Demo technicians
      [
        { lng: 6, lat: 50, label: "Technician #1" },
        { lng: 12, lat: 42, label: "Technician #2" },
        { lng: 0, lat: 36, label: "Technician #3" },
      ].forEach((tech, idx) => {
        const el = document.createElement("div");
        el.className =
          "w-5 h-5 bg-bricoleur-primary rounded-full border-2 border-white ring ring-bricoleur-primary/50 cursor-pointer";
        el.title = tech.label;
        new mapboxgl.Marker(el)
          .setLngLat([tech.lng, tech.lat])
          .addTo(mapRef.current!);
      });

      // Spinning globe
      const secondsPerRevolution = 240;
      const maxSpinZoom = 5;
      const slowSpinZoom = 3;
      let userInteracting = false;
      let spinEnabled = true;

      function spinGlobe() {
        if (!mapRef.current) return;
        const zoom = mapRef.current.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution;
          if (zoom > slowSpinZoom) {
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
          }
          const center = mapRef.current.getCenter();
          center.lng -= distancePerSecond;
          mapRef.current.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      }

      mapRef.current.on("mousedown", () => (userInteracting = true));
      mapRef.current.on("dragstart", () => (userInteracting = true));
      mapRef.current.on("mouseup", () => {
        userInteracting = false;
        spinGlobe();
      });
      mapRef.current.on("touchend", () => {
        userInteracting = false;
        spinGlobe();
      });
      mapRef.current.on("moveend", () => spinGlobe());
      spinGlobe();
      setTokenError(false);
    } catch (e) {
      setTokenError(true);
    }

    return () => {
      mapRef.current?.remove();
    };
    // eslint-disable-next-line
  }, [mapboxToken, mapContainer.current]);

  return (
    <div>
      {!mapboxToken && (
        <div className="mb-4">
          <div className="font-medium text-bricoleur-primary mb-2">
            Enter your Mapbox public token to enable the map
          </div>
          <input
            type="text"
            placeholder="Paste your Mapbox public token here"
            className="w-full px-3 py-2 border rounded mb-2 text-sm"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value.trim())}
          />
          <div className="text-xs text-gray-500">
            You can get a free token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="underline text-bricoleur-primary">mapbox.com</a>
          </div>
        </div>
      )}
      {tokenError && (
        <div className="text-red-600 text-xs mb-2">
          Invalid token or map load failure. Please check your Mapbox token.
        </div>
      )}
      <div
        ref={mapContainer}
        className="w-full h-[400px] rounded-xl bg-gray-100 shadow-lg overflow-hidden"
        style={{
          minHeight: 320,
          minWidth: 250,
          border: "1px solid #e0e0e0",
        }}
      ></div>
    </div>
  );
};

export default Map;
