import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Footer from "../footer/Footer";
import CountUp from 'react-countup';
import Cards2 from "../cards/cards2";
import Contador from "../contador/contador";
import Cards3 from "../cards/cards3";
import Mapa from "../map/map";
import icons from "../../images/icons/icons";
import images from "../../images/images";

const Trabajo =()=>{
  return(
    <MapContent>
            <Cards2
                img={icons.clipboard} title1='Trabajos Realizados' number1='100'
                img2={icons.list} title2='Estudios Realizados' number2='325'
                img3={icons.smile} title3='Clientes Satifechos' number3='243'
                img4={icons.world} title4='Paises Trabajados' number4='8'></Cards2>
      <h2>¿Que servicios realizamos?</h2>
      <br></br>
      <p>Estos son algunos de nuestros trabajos mas relevantes</p>
      <br></br>
      <br></br>
      <div class='mapContainer'>
        <Mapa></Mapa>
      </div>

      <div className="containerContador2">
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

