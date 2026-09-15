import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const LocationMap = ({ serviceCenters }) => {
  const serviceCentersData = serviceCenters;
  console.log(serviceCentersData);
  const dhaka = [23.8103, 90.4125];
  return (
  <div>
       
       <MapContainer
      center={dhaka}
      zoom={7}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {serviceCentersData.map((serviceCenter, index) => (
        <Marker
          key={index}
          position={[serviceCenter.latitude, serviceCenter.longitude]}
        >
          <Popup>
            <strong >{serviceCenter.district}</strong>
            <br />
            <span className="text-green-400">Service Area :{serviceCenter.covered_area.join(", ")}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
  );
};

export default LocationMap;
