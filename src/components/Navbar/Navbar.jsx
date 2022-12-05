import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import images from "../../images/images.js";
import BurgerButton from "./Burgerbutton";




const Navbar = () =>{
  const [clicked, setClicked] = useState(false)
  const handleClick = () =>{
    setClicked(!clicked)
  }
  return(
    <NavStyle>
      <img src={images.logo} className="logoNav"></img>
      <ul className={`links ${clicked ? 'active': ''}`}>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/trabajos'>Trabajos</Link></li>
        <li><Link to='/empresa'>Nosotros</Link></li>
        <Link to='/contacto'><Contact href='mailto:ivogarrachip@gmail.com'><button class="button-87" role="button" >Contacto</button></Contact></Link>
      </ul>
      <div className="burger">
        <BurgerButton clicked={clicked} handleClick={handleClick}></BurgerButton>
      </div>
      <BgDiv className={`inital ${clicked ? 'active': ''}`}></BgDiv>
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
 /*  display: block; */
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
  flex-direction: row;
  justify-content: space-between;
  
  /* box-shadow: 1px 1px 1px 1px black; */
}
.links{
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  position: absolute;
  right: 1%;
}
.links.active{
  
}
.links li{
  margin-left: 10px;
  margin: 10px;
  font-weight: bold;
  position: initial;
}

.links li:hover{
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
  margin:1%;
}

.burger{
  display: none;
}

@media (max-width: 764px) {
  .links{
    position: absolute;
    right:-700px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    transition: all .5s ease;
  }

  .links.active{
    width: 100%;
    color:black;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top:30%;
    text-align: center;
    align-items: center;
    left: 0;
    right: 0;
  }
  .logoNav{
    width: 30%;
    margin:2%;
    /* margin-left: 32%; */
  }
  .burger{
    display: flex;
  }
  display :flex;
  justify-content: space-between;
  
}

 
`

const BgDiv = styled.div`
  background-color: black;
  position: absolute;
  width:100%;
  height: 100%;
  top: 0;
  left:-7000px;
  z-index: -1;
`