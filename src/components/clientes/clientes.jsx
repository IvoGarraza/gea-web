import React,{useEffect} from "react";
import styled from "styled-components";
import  AOS  from "aos";
import 'aos/dist/aos'

const Clientes = () =>{
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return(
        <ClientesStyle>
            <div className="capa">
                <h2>Clientes que confian en nosotros</h2>
                <div className="containerClientes">
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE1</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE2</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE3</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE4</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE5</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE6</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE7</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE8</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE9</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE10</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE11</h3>
                    <h3 data-aos='zoom-in' data-aos-duration='3000'>LOGO CLIENTE12</h3>
                </div>
            </div>
        </ClientesStyle>
    )
}

export default Clientes


const ClientesStyle = styled.div`
    width: 100%;
    height: 600px;
    padding-bottom: 0%;
    text-align: center;
    background-image: url('https://aquasurv.com/wp-content/uploads/2019/02/IMG-20180502-WA0021.jpg');
    background-size: cover;
    color:#ffffff;
    .capa{
        width: 100%;
        height: 600px;
        background: #0f202799;  /* fallback for old browsers */

    }
    h2{
        padding: 10%;
    }
    .containerClientes{
        padding: 5%;
        padding-top: 0;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 4rem 4rem 4rem 4rem ;
        color: #ffffff;
    }

    @media (max-width: 764px) {
        .containerClientes{
        grid-template-columns: 50% 50%;
        grid-template-rows: 4rem 4rem 4rem 4rem 4rem;
        }
        .capa{}
    }
`