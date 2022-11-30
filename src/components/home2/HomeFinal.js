import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import images from "../../images/images";

const HomeFinal =  ()=>{
    return(
        <HomeFinalStyle>
            <div className="contentCard">
                <div className="contenedorImg"><img src={images.maquina}></img></div>
                <h3>Nosotros</h3>
                <p>Conoce mas nuestra empresa y los tipos de estudios que realizamos</p>
                <Link to='/empresa'><a>Ir a...</a></Link>
            </div>
            <div className="contentCard">
                <div className="contenedorImg"><img src={images.maquina2}></img></div>
                <h3>Trabajos</h3>
                <p>Podes ver algunos de nuestros trabajos destacados realizados</p>
                <Link to='/trabajos'><a>Ir a...</a></Link>
            </div>
            <div className="contentCard">
                <div className="contenedorImg"><img src={images.maquina3}></img></div>
                <h3>Contacto</h3>
                <p>Escribinos para que nos podamos poner en contacto contigo</p>
                <Link to='/contacto'><a>Ir a...</a></Link>
            </div>
        </HomeFinalStyle>
    )
}

export default HomeFinal

const HomeFinalStyle=styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    .contentCard{
        width:  30%;
        height: 400px;
        padding:4%;
        border: 1px solid black;
        margin: 3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 3%;
        box-shadow: 0px 10px 10px 1px gray;
    }
    .contentCard:hover{
        img{
            animation: imagen 0.3s;
            animation-fill-mode: forwards;
        }
    }
    .contenedorImg{
        width: 150px;
        height: 150px;
    }
    img{/* 
        width: 150px;
        height: 150px;
        border-radius: 5%; */
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    img:hover{
/*         width: 300px;
        height: 300px;
        border-radius: 100%; */
/*         animation-duration: 0.5s;
        animation-name: imagen; */
        
    }
    a{
        /* border: 1px solid black; */
        width: 70%;
        background-color: gray;
        color: white;
        padding: 1%;
    }
    a:hover{
        color: #f09819;
    }

    @media (max-width: 764px) {
        flex-direction: column;
        align-items: center;
        .contentCard{
            width: 90%;
        }
    }

    @keyframes imagen {
/*         from{
        width: 150px;   
        height: 150px;
        border-radius: 50%;
        } */
        to{
        
        border-radius: 5%;
        }
    }
`

const btnCard = styled.a`
border: 1px solid black;
background-color: black;
`