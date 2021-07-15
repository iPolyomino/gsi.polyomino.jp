import dynamic from "next/dynamic";
import { useMemo } from "react";

const Home = () => {
  // ref: https://stackoverflow.com/a/64634759/976917
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
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
