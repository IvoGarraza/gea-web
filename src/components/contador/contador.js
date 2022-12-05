import React from "react";
import './contador.css'


const Contador =(props)=>{
    const color=document.getElementById('fondo_color')
    const numero=document.getElementById('numero')
        
    let cantidad=0
    let tiempo=setInterval(() => {
            cantidad+=1
            color.style.height=`${cantidad}%`
            numero.textContent=cantidad
            if(cantidad===100){
                clearInterval(tiempo)
            }
        }, 100);
    return(
        
    <div class="contador2">
        <div class="color_fondo" id="fondo_color">
        </div>
        <div class="numero" id="numero">
        </div>
    </div>
        
    )
}

export default Contador


