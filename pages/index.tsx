import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

const Home = () => {
  const loading = () => <p>A map is loading</p>;

  const [latitude, setLatitude] = useState(35.68294);
  const [longitude, setLongitude] = useState(139.76778);

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
      <Map format="std" latlng={[latitude, longitude]} />
      <Map format="pale" latlng={[latitude, longitude]} />
    </main>
  );
};

export default Home;
