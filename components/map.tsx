import { LatLngExpression, LatLngLiteral } from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LAT = 35.68294;
const LNG = 139.76778;
const ZOOM = 14;

function SetCenter({
  center,
  zoom,
}: {
  center: LatLngExpression;
  zoom: number;
}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function DragEvent({
  setLatLng,
  setZoom,
}: {
  setLatLng: (center: LatLngLiteral) => void;
  setZoom: (level: number) => void;
}) {
  useMapEvents({
    dragend: (e: any) => {
      setLatLng(e.target.getCenter());
    },
    zoomend: (e: any) => {
      setZoom(e.target.getZoom());
    },
  });
  return null;
}

const Map = ({
  format = "std",
  latlng = [LAT, LNG],
  zoom = ZOOM,
  setLatLng = () => { },
  setZoom = () => { },
  label = ""
}: {
  format: string;
  latlng: LatLngExpression;
  zoom: number;
  setLatLng: (center: LatLngLiteral) => void;
  setZoom: (level: number) => void;
  label?: String;
}) => {
  return (
    <div>
      <MapContainer style={{ height: "45vh", width: "45vw" }}>
        <SetCenter center={latlng} zoom={zoom} />
        <DragEvent setLatLng={setLatLng} setZoom={setZoom} />
        <TileLayer
          attribution={`<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a> ${label}`}
          url={`https://cyberjapandata.gsi.go.jp/xyz/${format}/{z}/{x}/{y}.png`}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
