import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Footer from "../footer/Footer";
import CountUp from 'react-countup';
import Cards2 from "../cards/cards2";
import Contador from "../contador/contador";

const Trabajo =()=>{
  return(
    <MapContent>
      <h2>¿Que estudios hicimos?</h2>
      <p>Estos son algunos de nuestros trabajos mas relevantes</p>
      <Cards2
                title1='Trabajos Realizados' number1='100'
                title2='Estudios Realizados' number2='325'
                title3='Clientes Satifechos' number3='243'
                title4='Paises Trabajados' number4='8'></Cards2>
      <div className="containerContador2">
        <Contador></Contador>
      </div>
      <div class='mapContainer'>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-31.403364339934477, -64.1908088494179]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      <Footer></Footer>
    </MapContent>
  )
}

export default Trabajo

const MapContent = styled.div`
text-align: center;
  .mapConatiner{
    width: 200px;
    height: 400px;
  }
`

