import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { LatLngLiteral } from "leaflet";

const Home = () => {
  const loading = () => <p>A map is loading</p>;

  const [latitude, setLatitude] = useState(35.68294);
  const [longitude, setLongitude] = useState(139.76778);

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
    <main>
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
      <button>描画</button>
      <Map format="std" latlng={[latitude, longitude]} setLatLng={setLatLng} />
      <Map format="pale" latlng={[latitude, longitude]} setLatLng={setLatLng} />
    </main>
  );
};

export default Home;
