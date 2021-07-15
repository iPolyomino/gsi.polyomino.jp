import dynamic from "next/dynamic";
import { useMemo } from "react";

const Home = () => {
  const loading = () => <p>A map is loading</p>;

  // ref: https://stackoverflow.com/a/64634759/976917
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
      <Map />
    </main>
  );
};

export default Home;
