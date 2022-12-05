import React from "react";
import styled from "styled-components";
import Contador from "../contador/contador";


const Cards3 = () =>{
    return(
        <CardStyle3>
            <div className="cardCount">
                <h3>Trabajos realizados</h3>
                <Contador></Contador>
            </div>
            <div className="cardCount"></div>
            <div className="cardCount"></div>
            <div className="cardCount"></div>
        </CardStyle3>
    )
}

export default Cards3


const CardStyle3 = styled.div`
    
`