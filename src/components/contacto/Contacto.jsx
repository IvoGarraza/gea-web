import React from "react";
import Footer from "../footer/Footer";
import './Contacto.css'

const Contacto = () =>{
    return(
        <div class='contacto'>
            <body>
                <div class="contact_form">
                    <div class="formulario">			
                        <h2 class='titleForm'>Formulario de contacto</h2>
                        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>
                                <form action="submeter-formulario.php" method="post">				
                                            <p className="texto">
                                                <label for="nombre" id='label'class="colocar_nombre">Nombre
                                                    <span class="obligatorio">*</span>
                                                </label>
                                                    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"></input>
                                            </p>     
                                            <p className="texto">
                                                <label for="email" id='label' class="colocar_email">Email
                                                    <span class="obligatorio">*</span>
                                                </label>
                                                    <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"></input>
                                            </p>
                                            <p className="texto">
                                                <label for="telefone" id='label' class="colocar_telefono">Teléfono
                                                </label>
                                                    <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"></input>
                                            </p>			    
                                            <p className="texto">
                                                <label for="asunto" id='label' class="colocar_asunto">Asunto
                                                    <span class="obligatorio">*</span>
                                                </label>
                                                    <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"></input>
                                            </p>		  
                                            <p className="texto">
                                                <label for="mensaje" id='label' class="colocar_mensaje">Mensaje
                                                    <span class="obligatorio">*</span>
                                                </label>                     
                                                    <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                                                </p>	  							
                                            <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                                            <p class="aviso">
                                                <span class="obligatorio"> * </span>los campos son obligatorios.
                                            </p>					
                                </form>
                    </div>	
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}

export default Contacto