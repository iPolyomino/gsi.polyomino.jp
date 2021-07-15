import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Railroad from "../data/N02-20_RailroadSection.geojson";
import Station from "../data/N02-20_Station.geojson";

const LAT = 35.68294;
const LNG = 139.76778;
const ZOOM = 15;

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[LAT, LNG]}
        zoom={ZOOM}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution="<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
          url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        />
        <GeoJSON data={Railroad} />
        <GeoJSON data={Station} style={{ color: "red" }} />
      </MapContainer>
    </div>
  );
};

export default Map;
