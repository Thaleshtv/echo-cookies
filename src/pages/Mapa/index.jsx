import { Container } from "@mui/material";
import Menu from "../../components/Menu";
import { TileLayer, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Logo from "../../assets/logo.svg";

import { MapContainer } from "react-leaflet/MapContainer";

export default function Mapa() {
  return (
    <>
      <div className="cont" style={{ display: "flex" }}>
        <Menu />
        <Container maxWidth="xl" sx={{ marginTop: "3rem" }}>
          <MapContainer
            center={[-7.1456648, -34.8284395]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ minHeight: "90vh" }}
            id="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            />
            {/* <LocationMarker codigo={codigo} /> */}

            <div className="leaflet-bottom leaflet-left">
              <img src={Logo} alt="" />{" "}
            </div>
          </MapContainer>
        </Container>
      </div>
    </>
  );
}
