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
                    <h2>1-¿Como trabajamos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, pariatur velit voluptas odit vitae perspiciatis minus, non a ipsam saepe architecto ut rerum quod voluptates iure soluta earum eius magnam.</p>
                </div>
                <div className="contentInfo3" data-aos='fade-right'>
                    <h2>2- ¿Como trabajamos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, pariatur velit voluptas odit vitae perspiciatis minus, non a ipsam saepe architecto ut rerum quod voluptates iure soluta earum eius magnam.</p>
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
        text-align: center;
        padding: 5%;
    }
    .contentInfo3{
        text-align: center;
        padding: 5%;
    }
    .contentInfo4{
        text-align: center;
        padding: 5%;
    }
`