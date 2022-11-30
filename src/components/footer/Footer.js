import React, {useState, useEffect} from 'react';
import './Footer.css'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos'

const Footer = () =>{
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    return(
/*         <div class='footer'>
            <ul class='lista-footer'>
                <li>INICIO</li>
                <li>SERVICIOS</li>
                <li>EMPRESA</li>
                <li>CONTACTO</li>
            </ul>
            <ul class='lista-footer2'>
                <li>Whatsapp</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Email</li>
                <li>Lugar</li>
            </ul>
            <h1 class='nombreFooter'>GEA</h1>
        </div> */
        <footer className='footerContainer'>

        <div class="container__footer">
            <div class="box__footer">
                <div class="logo">
                <Gea class='nombreFooter'>GE</Gea>
                </div>
{/*                 <div class="terms">
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit cum cumque velit libero officiis quam doloremque reprehenderit quae corporis! Delectus architecto officia praesentium atque laudantium, nam deleniti sapiente deserunt.</p>
                </div> */}
            </div>
{/*             <div class="box__footer">
                <h2>Soluciones</h2>
                <a href="https://www.google.com">App Desarrollo</a>
                <a href="#">App Marketing</a>
                <a href="#">IOS Desarrollo</a>
                <a href="#">Android Desarrollo</a>
            </div> */}

            <div class="box__footer">
                <h2>Compañia</h2>
                <Link exact to='/'><a>Inicio</a></Link>
                <Link to='/trabajos'><a>Trabajos</a></Link>
                <Link to='/empresa'><a>Nosotros</a></Link>
                <Link to='/contacto'><a>Contacto</a></Link>
                <Link to='/avisos-legales'><a>Legales</a></Link>              
            </div>

            <div class="box__footer">
                <h2>Redes Sociales</h2>
                <a href="#">{/* <i class="fab fa-facebook-square"></i> */} Facebook</a>
                <a href="#">{/* <i class="fab fa-linkedin"></i> */} Linkedin</a>
                <a href="#">{/* <i class="fab fa-instagram-square"></i> */} Instagram</a>
            </div>
            
        </div>

        <div class="box__copyright">
            <hr></hr>
            <p>Todos los derechos reservados © 2021 <b>GEA</b></p>
        </div>
    </footer>
    )
}

export default Footer

const Gea = styled.h2`
    color: white;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`