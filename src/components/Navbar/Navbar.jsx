import React, { useState } from "react";
/* import "./Navbar.css"; */
import styled from "styled-components";
import { Link } from "react-router-dom";
import images from "../../images/images.js";
import { slide as Menu } from 'react-burger-menu'
import BurgerButton from "./Burgerbutton";


/* const Navbar = () => {
  return (
   <div class="nav">
    <img src={images.logo} class="logoNav"></img>
    <ul class="lista">
      <li><Link to='/'>Inicio</Link></li>
      <li><Link to='/trabajos'>Trabajos</Link></li>
      <li><Link to='/empresa'>Nosotros</Link></li>
      <Link to='/contacto'><Contact href='mailto:ivogarrachip@gmail.com'><button class="button-87" role="button" >Contacto</button></Contact></Link>
    </ul>

   </div>
)}

 */

const Navbar = () =>{
  return(
    <NavStyle>
      <img src={images.logo} class="logoNav"></img>
      <ul class="lista">
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/trabajos'>Trabajos</Link></li>
        <li><Link to='/empresa'>Nosotros</Link></li>
        <Link to='/contacto'><Contact href='mailto:ivogarrachip@gmail.com'><button class="button-87" role="button" >Contacto</button></Contact></Link>
      </ul>
      <div className="burger">
        <BurgerButton></BurgerButton>
      </div>
    </NavStyle>
  )
}


export default Navbar;

const Contact = styled.li`

/* CSS */
.button-87 {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  font-weight: bold;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-87:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-87:active {
  transform: scale(0.95);
}
  
`

const Logo = styled.img`
  height: auto;
  width: 10%;
  align-items: center;
`

const NavStyle = styled.nav`
  .nav{
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  /* box-shadow: 1px 1px 1px 1px black; */
}
.lista{
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
}

.lista li{
  margin-left: 10px;
  margin: 10px;
  font-weight: bold;
}

.lista li:hover{
  color: #f09819;
}

a{
  text-decoration: none;
  color: black;
}
a:hover{
  color:#f09819;
}

.logoNav{
  width: 10%;
  object-fit: contain;
  margin-left: 2%;
}

.menu{
  
}

@media (max-width: 764px) {
  .lista{
    display: none;
  }
  .logoNav{
    width: 30%;
    margin:2%;
    /* margin-left: 32%; */
  }
  display :flex;
  
}

  .burger{
    @media (min-width: 764px) {
      display: none;
    }
  }
`