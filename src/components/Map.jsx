import { LoadScript, GoogleMap } from "@react-google-maps/api";

const Map = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{ lat: 18.5204, lng: 73.8567 }}
        zoom={10}
        
      />
    </LoadScript>
  );
};
users.map(user => {
  return {
    lat: parseFloat(user.address.geo.lat),
    lng: parseFloat(user.address.geo.lng)
  };
});

export default Map;