import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import images from "../../images/images";
import styled from "styled-components";
import AOS from "aos";
import 'aos/dist/aos';
import Cards from "../cards/cards";
import './pin.module.css'
import styles from './pin.module.css';
import Footer from "../footer/Footer";
import ImageGallery from 'react-image-gallery';
import { render } from "react-dom";
import CountUp from 'react-countup'

const imagenes = [
    {
        original: images.carousel1
    },
    {
        original: images.carousel2
    },
    {
        original: images.carousel3
    }
]

class MyGallery extends React.Component{
    render(){
        return <ImageGallery items={images}/>;
    }
}

const Empresa = () =>{
    useEffect(()=>{
        AOS.init({duration:1000});
      },[])
    return(
        <div className="empresaPage">
            <EmpresaStyled>
                <div class='carousel'>
                    
                </div>
                <div class='contentInfo'>
                    <div class='Info' data-aos='fade-up' data-aos-duration='1000'>
                        <h2>Sobre Nosotros</h2>
                        <p>GEA es un grupo dedicado a la investigación de suelos, estudios y proyectos de caminos, tablestacados, obras de tierra, control de calidad de suelos y hormigones, etc., incluyendo análisis teóricos, operaciones de campo y ensayos de laboratorio (físicos o químicos). Nuestra empresa cuenta con personal idóneo altamente capacitado y especializado para la ejecución de la investigación geotécnica en obra y en laboratorio. GEA está formada por un staff de profesionales y técnicos especializados en mecánica de suelos e ingeniería geotécnica.
                        A la fecha, GEA supera los doce mil trabajos realizados en todo el país los que acrediten de la experiencia como Consultoría Especializada en Geotecnia, y de la confianza que sus Comitentes depositan en este grupo.

                        La empresa cuenta con más de 30 años de trayectoria.
                        </p>
                    </div>
                    <img src={images.stockImage} data-aos="fade-left" data-aos-duration='1000'></img>
                </div>
                <div className="contentInfo2" data-aos='fade-left' >
                    <img src={images.stockImage4}></img>
                    <div className="services">
                        <h2>Nuestros servicios</h2>
                        <br></br>
                        <h3>Geotecnia</h3>
                        <ul>
                            <li>Estudios geotécnicos (realizamos su estudio geotécnico conforme a la normativa vigente CTE).</li>
                            <li>Ensayos in situ (sondeos geotécnicos, dpsh, borros, calicatas, CPT, CPTU, vane test, carga con placa, etc.)</li>
                            <li>Ensayos de laboratorio en el área de geotecnia(áreas GTL y GTC).</li>
                            <li>Geofísica (sísmica de refracción, calicatas CE y sondeos eléctricos verticales SEV, tomografía, georradar, etc.</li>
                            <li>Estudios de riesgos geológicos</li>
                            <li>Estudios geotécnicos para balsas y presas</li>
                            <li>Estudios para proyectos de urbanización</li>
                            <li>Asistencia técnica en obra civil</li>
                            <li>Instalación, control y lectura de inclinómetros y piezómetros.</li>
                            <li>Deslizamientos y movimientos del terreno.</li>
                            <li>Análisis-Calculo  de estabilidad de taludes y laderas.</li>
                            <li>Mapas geotécnicos, cartografías geológicas y de riesgos.</li>
                            <li>Patologías estructurales relacionadas con el terreno.</li>
                            <li>Muestreo de suelos contaminados. Geotecnia ambiental.</li>
                            </ul>
                     </div>
                </div>
                <h2 className="subtitle">ENSAYOS DE LABORATORIO DE GEOTECNIA Y DE MECANICA DE SUELO</h2>
                <div className="contentInfo3" data-aos='fade-right'>
                    
                    <br></br>
                    <br></br>
                    
                    <div className="services2">
                        <div className='div1'>
                            <h3>Ensayos de identificación:</h3>
                            <br></br>
                            <ul>
                                <li>Granulometría por tamizado</li>
                                <li>Comprobación de la no plasticidad</li>
                                <li>Límite Líquido</li>
                                <li>Límite Plástico</li>
                                <li>Límite de Retracción</li>
                            </ul>
                        </div>
                        <div className='div2'>                
                            <h3>Ensayos de colapsabilidad:</h3>
                            <br></br>
                            <ul>
                                <li>Ensayo de colapso</li>
                            </ul>
                        </div>
                        <div className='div3'>
                            <h3>Ensayos de estado:</h3>
                            <br></br>
                            <ul>
                                <li>Humedad natural</li>
                                <li>Densidad seca y densidad aparente.</li>
                                <li>Peso específico de las partículas</li>
                            </ul>
                        </div>
                        <div className='div4'> 
                            <h3>Ensayos de expansividad:</h3>
                            <br></br>
                            <ul>
                                <li>Presión de hinchamiento en edómetro</li>
                                <li>Hinchamiento libre en edómetro</li>
                                <li>Ensayo Lambe</li>
                                <li>Ensayo Unidimensional</li>
                                <li>Ensayo de Permeabilidad en cola</li>
                            </ul>
                        </div>
                    </div>
                    <img src={images.homeImg2}></img>
                </div>
                <div className="contentInfo4" data-aos='fade-left'>
                    <h2>3- ¿Como trabajamos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, pariatur velit voluptas odit vitae perspiciatis minus, non a ipsam saepe architecto ut rerum quod voluptates iure soluta earum eius magnam.</p>
                </div>

                <Footer></Footer>    
            </EmpresaStyled>
            {/* <div class={styles.pin2} ></div> */}
        </div>
    )
}

export default Empresa

const EmpresaStyled = styled.div`
    display: flex ;
    flex-direction: column;
    .contentInfo{
/*         padding: 10%;
        text-align: center; */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5%;
    }
    .contentInfo img{
        width: 100%;
        margin: 5%;
    }
    .contentInfo2{
        padding: 5%;
        display: flex;
        flex-direction: row;
        img{
            width: 50%;
        }
    }
    .subtitle{
        text-align: center;
    }
    .services{
        margin-left: 5%;
    }
    .contentInfo3{
        text-align: center;
        padding: 5%;
        display: flex;
        justify-content: space-between;
        img{
            width: 40%;
        }
    }
    .services2 {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: repeat(2, 2fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    text-align: left;
    }

    .div1 { grid-area: 1 / 1 / 2 / 2; }
    .div2 { grid-area: 1 / 2 / 2 / 3; }
    .div3 { grid-area: 2 / 2 / 3 / 3; }
    .div4 { grid-area: 2 / 1 / 3 / 2; }


    .contentInfo4{
        text-align: center;
        padding: 5%;
    }
`