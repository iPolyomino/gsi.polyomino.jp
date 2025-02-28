import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import { useMemo, useState, useEffect } from "react";
import { LatLngLiteral } from "leaflet";

import styles from "@/styles/Home.module.css";

const Home = () => {
  const router = useRouter();
  const [latitude, setLatitude] = useState(35.68294);
  const [longitude, setLongitude] = useState(139.76778);
  const [zoom, setZoom] = useState(14);

  // initialize map center
  useEffect(() => {
    if (!router.isReady) return;
    const { lat, lng, zoom } = router.query;
    if (lat !== undefined && !Array.isArray(lat)) setLatitude(parseFloat(lat));
    if (lng !== undefined && !Array.isArray(lng)) setLongitude(parseFloat(lng));
    if (zoom !== undefined && !Array.isArray(zoom)) setZoom(parseInt(zoom));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // update query parameters
  useEffect(() => {
    if (!router.isReady) return;
    router.query.lat = latitude.toString();
    router.query.lng = longitude.toString();
    router.query.zoom = zoom.toString();
    router.push(router);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude, zoom]);

  const setLatLng = (center: LatLngLiteral) => {
    setLatitude(center.lat);
    setLongitude(center.lng);
  };

  const loading = () => <p>A map is loading</p>;

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
      <header className={styles.header}>
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
          label="標準地図"
        />
        <Map
          format="lum200k"
          latlng={[latitude, longitude]}
          zoom={zoom}
          setLatLng={setLatLng}
          setZoom={setZoom}
          label="20万分1土地利用図（1982～1983年）<a href='https://cyberjapandata.gsi.go.jp/legend/lum200k_legend.jpg' target='_blank' rel='noopener noreferrer'>凡例</a>"
        />
        <Map
          format="lcm25k_2012"
          latlng={[latitude, longitude]}
          zoom={zoom}
          setLatLng={setLatLng}
          setZoom={setZoom}
          label="数値地図25000（土地条件）<a href='https://cyberjapandata.gsi.go.jp/legend/lcm25k_2012/lc_legend.pdf' target='_blank' rel='noopener noreferrer'>凡例</a>"
        />
        <Map
          format="relief"
          latlng={[latitude, longitude]}
          zoom={zoom}
          setLatLng={setLatLng}
          setZoom={setZoom}
          label="色別標高図"
        />
      </section>
      <footer className={styles.footer}>
        <button onClick={() => {
          setLatLng({ lat: 43.068611, lng: 141.350778 });
        }}>Sapporo</button>
        <button onClick={() => {
          setLatLng({ lat: 38.260278, lng: 140.882222 });
        }}>Sendai</button>
        <button onClick={() => {
          setLatLng({ lat: 35.68294, lng: 139.76778 });
        }}>Tokyo</button>
        <button onClick={() => {
          setLatLng({ lat: 35.170694, lng: 136.881637 });
        }}>Nagoya</button>
        <button onClick={() => {
          setLatLng({ lat: 34.701889, lng: 135.494972 });
        }}>Osaka</button>
        <button onClick={() => {
          setLatLng({ lat: 34.39775, lng: 132.475472 });
        }}>Hiroshima</button>
        <button onClick={() => {
          setLatLng({ lat: 33.59, lng: 130.420611 });
        }}>Hakata</button>
        <button onClick={() => {
          setLatLng({ lat: 26.206472, lng: 127.65225 });
        }}>Naha</button>
      </footer>
    </main>
  );
};

export default Home;
