import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LAT = 35.3622222;
const LNG = 138.7313889;
const ZOOM = 5;

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
          url="https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
