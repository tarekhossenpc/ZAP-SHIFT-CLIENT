import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
const LocationMap = () => {
     const position = [23.8103, 90.4125];
    return (
         <MapContainer
      center={position}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          Dhaka, Bangladesh
        </Popup>
      </Marker>
    </MapContainer>
    );
};

export default LocationMap;