"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapBanner() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const BD_LEFT: [number, number] = [88.5, 24.0];   // first target
    const DHAKA: [number, number] = [90.4125, 23.8103]; // final target

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [90, 25],  // Asia
      zoom: 3.3,
      pitch: 0,
      bearing: 0,
      attributionControl: false
    });

    map.on("load", () => {
      // === 1) FIRST ANIMATION ===
      setTimeout(() => {
        map.flyTo({
          center: BD_LEFT,
          zoom: 7.2,
          duration: 1600,       // smooth long movement
          curve: 1.6,
          easing: (t) => t,     // linear - no stop at end
          essential: true,
        });
      }, 900);

      // === 2) Start second animation BEFORE the first finishes ===
      setTimeout(() => {
        map.flyTo({
          center: DHAKA,
          zoom: 8.4,
          duration: 800,
          curve: 1.4,
          easing: (t) => t,
          essential: true,
        });
      }, 1600 + 900); // overlap by ~500ms for continuous flow

      // === 3) Add marker AFTER final movement ===
      setTimeout(() => {
        new maplibregl.Marker({ color: "#1da1f2" })
          .setLngLat(DHAKA)
          .addTo(map);
      }, 1600 + 800 + 900); // total duration of both animations
    });

    return () => map.remove();
  }, []);

  return (
    <div className="w-265 max-sm:w-screen relative">
      <div
        ref={mapContainer}
        className="w-full self-center"
        style={{ height: "250px" }}
      />
      <div className="absolute inset-0 cursor-default z-100" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black" />
    </div>
  );
}
