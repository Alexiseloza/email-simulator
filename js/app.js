// VARIABLES

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const resetBtn = document.getElementById('resetBtn');
const formularioEnviar = document.getElementById('enviar-mail');

// EVENT LISTENERS
eventListeners()
function eventListeners(){
     // desactiva el boton enviar
     document.addEventListener('DOMContentLoaded', inicioApp);

     // valicadion de los campos del form
     email.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);

     // Boton para el envio
     btnEnviar.addEventListener('click', enviarEmail);

     // boton reset
     resetBtn.addEventListener('click', resetFormulario);

     // form evniar
     formularioEnviar.addEventListener('submit', enviarEmail);

}



// FUNCTIONS 

function inicioApp() {
     // boton evniar desactivado
     btnEnviar.disabled = true;
}

// validacion del campo de email 
function validarCampo(){
     // valida la longitud de los campos y el contenido
     validarLongitud(this);

     // validar el campo email
     if(this.type === 'email'){
          validarEmail(this);
     }
     let errores = document.querySelectorAll('.error');
     if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
         if(errores.length === 0){
              btnEnviar.disabled = false;
         }
          
     }
}

// boton reset
function resetFormulario(e){
     formularioEnviar.reset();

     e.preventDefault();
}

function validarLongitud(campo){
     if(campo.value.length > 0){
          campo.style.borderBottomColor= 'green';
          campo.classList.remove('error');
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}

// validadcion del campo email
function validarEmail(){
     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1 ){
          campo.style.borderBottomColor = 'green';
          campo.classLista.remove('error');  
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classLista.add('error');
          alert(' Verify you Email Address Please');
          
     }
     
}
// enviando el correo

function enviarEmail(e){
          // muestra el spinner en el envio!!
const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display ='block';

     // gif de envio de correo
    
     const enviado = document.createElement('img');
     enviado.src ='img/mail.gif';
     enviado.style.display = 'block';

     // funcion de spinner

     setTimeout(function() {
          spinnerGif.style.display = 'none';

          document.querySelector('#loaders').appendChild(enviado );

           setTimeout(function(){
                enviado.remove();
                formularioEnviar.reset();
               
                
           }, 3000)
     }, 2500);
     e.preventDefault();
     
}