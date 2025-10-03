
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <MapContainer center={[23.2599, 77.4126]} zoom={12} style={{ height: "300px", margin:"2rem"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[23.2599, 77.4126]}>
        <Popup>
          📍 This is Bhopal! <br /> You can put your restaurant location here.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
