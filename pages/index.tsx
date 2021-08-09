import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { LatLngLiteral } from "leaflet";

import styles from "@/styles/Home.module.css";

const Home = () => {
  const loading = () => <p>A map is loading</p>;

  const [latitude, setLatitude] = useState(35.68294);
  const [longitude, setLongitude] = useState(139.76778);
  const [zoom, setZoom] = useState(14);

  const setLatLng = (center: LatLngLiteral) => {
    setLatitude(center.lat);
    setLongitude(center.lng);
  };

  const Map = useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: loading,
        ssr: false,
      }),
    []
  );
  return (
    <main className={styles.main}>
      <header>
        <label>latitude</label>
        <input
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(Number(e.target.value))}
        />
        <label>longitude</label>
        <input
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(Number(e.target.value))}
        />
        <label>zoom</label>
        <input
          type="number"
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
      </header>
      <section className={styles.section}>
        <Map
          format="std"
          latlng={[latitude, longitude]}
          zoom={zoom}
          setLatLng={setLatLng}
          setZoom={setZoom}
        />
        <Map
          format="lum200k"
          latlng={[latitude, longitude]}
          zoom={zoom}
          setLatLng={setLatLng}
          setZoom={setZoom}
        />
        <Map
          format="lcm25k"
          latlng={[latitude, longitude]}
          zoom={zoom}
          setLatLng={setLatLng}
          setZoom={setZoom}
        />
        <Map
          format="relief"
          latlng={[latitude, longitude]}
          zoom={zoom}
          setLatLng={setLatLng}
          setZoom={setZoom}
        />
      </section>
    </main>
  );
};

export default Home;
