import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// @ts-ignore
import Railroad from "@/data/N02-20_RailroadSection.geojson";
// @ts-ignore
import Station from "@/data/N02-20_Station.geojson";

const LAT = 35.68294;
const LNG = 139.76778;
const ZOOM = 15;

const Map = () => {
  const display = [
    "東日本旅客鉄道",
    "東京地下鉄",
    "西武鉄道",
    "東武鉄道",
    "東急電鉄",
    "東京都",
    "京王電鉄",
    "京成電鉄",
    "京浜急行電鉄",
    "小田急電鉄",
    "多摩都市モノレール",
    "東京臨海高速鉄道",
    "北総鉄道",
    "東京モノレール",
    "ゆりかもめ",
    "埼玉高速鉄道",
    "首都圏新都市鉄道",
  ];
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
        <GeoJSON
          data={Railroad.features.filter((r: any) =>
            display.includes(r.properties.N02_004)
          )}
        />
        <GeoJSON
          data={Station.features.filter((r: any) =>
            display.includes(r.properties.N02_004)
          )}
          style={{ color: "red" }}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
