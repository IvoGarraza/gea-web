import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BurguerButton from './BurgerButton'
import images from '../../images/images'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <img src={images.logo} className="logoNav"></img>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h"><Link to='/'>Inicio</Link></a>
          <a onClick={handleClick} href="#h"><Link to='/trabajos'>Trabajos</Link></a>
          <a onClick={handleClick} href="#h"><Link to='/empresa'>Nosotros</Link></a>
          <a onClick={handleClick} href="#h"><Link to='/contacto'>Contacto</Link></a>
        </div>
        <div className='lista'>
           <Link to='/'>Inicio</Link>
           <Link to='/trabajos'>Trabajos</Link>
           <Link to='/empresa'>Nosotros</Link>
           <Link to='/contacto'>Contacto</Link> 
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
.lista{
    @media (max-width: 764px) {
        display: none;
    }
}
.logoNav{
  width: 10%;
  object-fit: contain;
  margin:1%;
  @media (max-width:764px) {
    width: 30%;

    
  }
  }


  h2{
    color: #000000;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a{
    color: #000000;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    /* top: -700px; */
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .6s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      
      a{
        font-size: 1rem;
        color: #000000;
        display: inline;
      }
      display: none;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    z-index: 11;
    color: black;
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  /* top: -1000px; */
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  z-index: 1;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1
  }

  @media (min-width: 768px) {
    display: none;
  }
`