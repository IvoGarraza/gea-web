import { hover } from "@testing-library/user-event/dist/hover";
import React, {useState, useEffect} from "react";
import images from "../../images/images";
import styled from "styled-components";
import Cards from "../cards/cards";
import Footer from "../footer/Footer";
import Clientes from "../clientes/clientes";
import { Link } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import AOS from 'aos';
import'aos/dist/aos'
import HomeFinal from '../home2/HomeFinal'


const Home = () =>{
  useState(()=>{
    AOS.init({duration:1000})
  },[])
    return(
        <div>
            <header>
                <HomeH1>
                    <Image src={images.stockImage3} className='imgHome'></Image>
                    <h1 className="titleHome" data-aos='fade-down'>Estudios de suelo,<br></br>
                    Impacto Ambiental<br></br>
                    Cálculos de fundación</h1>
                    <AboutStyled className="botonHome"><Link to='/empresa'><button class="button-89" role="button" data-aos='fade-down'>Conocenos 🡪</button></Link></AboutStyled>
                    {/* <Arrow class='arrow'></Arrow> */}
                    {/* <Arrow2></Arrow2> */}
                </HomeH1>
                
{/*                 <Wave>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,176C840,192,960,192,1080,176C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </Wave> */}
            </header>
            <Cards duration='1000' img={images.icon1}
                  duration2='2000' img2={images.icon2}
                  duration3='3000' img3={images.icon3}
                  duration4='3000' img4={images.icon4}></Cards>
            <Clientes></Clientes>
            <HomeFinal></HomeFinal>
            <Footer></Footer>
            <FloatingWhatsApp className='wsp'
                              phoneNumber="+5493513874298"
                              accountName='GEA'
                              avatar={images.logoColor}
                              statusMessage='Contesta en 1 hora aproximadamente'
                              chatMessage={`¡Hola!🤝\n¿Como podemos ayudarte?`}
                              placeholder='Escribe un mensaje...'
                              allowClickAway='true'></FloatingWhatsApp>
        </div>
    )
}

export default Home

const Image = styled.img`
    object-fit: cover;
    width:100%;
    height:100%;
`

const HomeH1 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1{
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: white;
        left: 5%;
        text-align: center;
        bottom: 45%;
    }
    @media (max-width:764px) {
      z-index: -3;
      .imgHome{
        height: 300px;
      }
      .titleHome{
        top: 20%;
        left: 5%;
        align-items: center;
        text-align: center;
      }
      .botonHome{
        position: absolute;
        top:55%;
        left: 33%;
      }
      
    }
`

const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:10%;
`

const AboutStyled = styled.button`

    @media (max-width: 764px) {
      .button-89{
        left: 2px;
        bottom: 20px;
      }
    }
/* CSS */
.button-89 {
  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: #fff;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;
    font-weight: bold;
  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: absolute;
  color: #fff;
  left: 11%;
  bottom: 30%;
}

.button-89:hover,
.button-89:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

.button-89:active {
  background: var(--color);
  color: black;
}
`