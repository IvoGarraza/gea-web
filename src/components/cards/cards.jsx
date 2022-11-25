import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos';
/* import { AOS } from "aos/dist/aos"; */
import CountUp from 'react-countup'

export const Cards = (props) =>{
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
    return(
        <CardStyle>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration}>
                <img src={props.img}></img>
                <h2 className='cardTitle'>EQUIPO PROFESIONAL</h2>
                <p>Disponemos del equipamiento y personal adecuado para los trabajos requeridos</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration2}>
                <img src={props.img2}></img>
                <h2 className='cardTitle'>MEDIO AMBIENTE</h2>
                <p>Ciencia aplicada al estudio y solución de los problemas de ingeniería y medioambiente.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration3}>
                <img src={props.img3}></img>
                <h2 className='cardTitle'>LABORATORIO DE GEOTECNIA</h2>
                <p>Estudio de las propiedades mecánicas, hidráulicas e ingenieriles de los materiales provenientes de la Tierra.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration4}>
                <img src={props.img4}></img>
                <h2 className='cardTitle'>SONDEOS</h2>
                <p>Perspeccion manual y mecanica, tecnicas de reconocimiento geotecnico de terreno para conocer sus caracteristicas</p>
            </div>
        </CardStyle>
    )
}

export default Cards


/* export const Cards2 = (props) =>{
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
    return(
        <CardStyle2>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration}>
                <img src={props.img}></img>
                <h2>{props.title1}</h2>
                <CountUp className='contador' end={props.number1} duration={3}></CountUp>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration2}>
                <img src={props.img2}></img>
                <h2>{props.title2}</h2>
                <CountUp className='contador' end={props.number2} duration={3}></CountUp>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration3}>
                <img src={props.img3}></img>
                <h2>{props.title3}</h2>
                <CountUp className='contador' end={props.number3} duration={3}></CountUp>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration={props.duration4}>
                <img src={props.img4}></img>
                <h2>{props.title4}</h2>
                <CountUp className='contador' end={props.number4} duration={3}></CountUp>
            </div>
        </CardStyle2>
    )
}

export default Cards2 */

const CardStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1%;
    margin-top: 3%;
    margin-bottom: 5%;
    align-items: center;
    justify-content: center;
    .card{
        margin: 1%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
        border-radius: 3%;
        align-items: center;
        width: 25%;
        height: 250px;
        
        .cardTitle{
          font-size: 100%;
        }

        }
        p{
          font-size: 95%;
        }
    
    .card img{
      width: 30%;
    }
    .card:hover{

        img{
          filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.7))
        }
        h2{
          color: orange
        }
      
    }
`
const CardStyle2 = styled.div`
     display: flex;
    flex-direction: row;
    margin: 1%;
    margin-top: 3%;
    margin-bottom: 5%;
    text-align: center;
    .card{
        margin: 1%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
        border-radius: 3%;
        align-items: center;
        width: 25%;
    }
    .card img{
      width: 30%;
      
    }
    .contador{
      font-weight: bolder;
    }
`

/* const CardStyle2 = styled.div`


.inherited-styles-for-exported-element {
  color: #333;
  font-family: CerebriSans-Regular, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  font-size: 100%;
}

h5 {
  font-family: CerebriSans-Bold, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  font-weight: 400;
}

.svg-inline--fa {
  display: inline-block;
  height: 1em;
  overflow: visible;
  vertical-align: -.125em;
}

.feature-card {
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  -webkit-box-orient: vertical;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: block;
  flex: 1;
  flex-direction: column;
  margin: .25rem 0;
  padding: 40px 28px;
}

.feature-title {
  font-size: 1.3em;
  margin-bottom: 0;
}

.feature-desc {
  color: #53627c;
}

.feature-icon {
  font-size: 2em;
}

@media screen and (min-width: 768px) {
  .feature-card {
    margin: .25rem .5em;
  }
}

.svg-inline--fa.fa-w-16 {
  width: 1em;
}

svg:not(:root).svg-inline--fa {
  overflow: visible;
}

` */