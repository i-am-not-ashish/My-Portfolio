import React from 'react';
import './style.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const Map = () => {
 const customIcon=new Icon({
  iconUrl:require("../assets/images/position.png"),
  iconSize:[38,38]
 })
 return (
  <div style={{paddingLeft:"50px",paddingRight:"50px" ,display:"flex",alignItems:"center",justifyContent:'center'}}>
  <MapContainer center={[23.8457469, 91.425897]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   <Marker position={[23.8457469, 91.425897]} icon={customIcon}>
    <Popup>
     Hey, I am here!!!!
    </Popup>
   </Marker>
  </MapContainer>
  </div>
 )
}

export default Map