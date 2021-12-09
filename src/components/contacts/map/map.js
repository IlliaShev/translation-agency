import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import './map.css';

const AgencyLocation = () => {
    const center = [50.3821002772471, 30.476300754408737];
    return (
        <MapContainer
            center={center}
            zoom={20}>
            <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=QrGgybApZB39ATLLte7z"
            />
            <Marker position={center} 
            icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}/>
        </MapContainer>
    );
}

export default AgencyLocation;