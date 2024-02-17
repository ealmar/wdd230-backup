const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rate");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
/*** finish function */
const expresiones = {
	userValues:/^[a-zA-Z0-9\_\-]{8,20}$/,
	passwordValues:/^[a-zA-Z0-9]{8,}$/,
    emailValues:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-.]+$/
}

const formulario = document.getElementById('formulario'); 
const inputs = document.querySelectorAll('#formulario input'); //access to all inputs from formulario


const validarFormulario = (event) => {
    
  //checking char by char and also expresion
    switch (event.target.name) {
        case 'userName':
            if(expresiones.userValues.test(event.target.value)){
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-incorrecto'); //removing the incorrect part
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-correcto');   // adding the correct part
                document.querySelector('#grupo-usuario i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-usuario i').classList.add('fa-check-circle');
                document.querySelector('#grupo-usuario .formulario-input-error').classList.remove('formulario-input-error-activo');
                
            } else {
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-usuario i').classList.add('fa-times-circle');
                document.querySelector('#grupo-usuario i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-usuario .formulario-input-error').classList.add('formulario-input-error-activo');
         
            }
            break;

        case 'password':
            if(expresiones.passwordValues.test(event.target.value)){
                document.getElementById('grupo-password').classList.remove('formulario-grupo-incorrecto'); //removing the incorrect part
                document.getElementById('grupo-password').classList.add('formulario-grupo-correcto');   // adding the correct part
                document.querySelector('#grupo-password i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-password i').classList.add('fa-check-circle');
                document.querySelector('#grupo-password .formulario-input-error').classList.remove('formulario-input-error-activo');
                
            } else {
                document.getElementById('grupo-password').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-password').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-password i').classList.add('fa-times-circle');
                document.querySelector('#grupo-password i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-password .formulario-input-error').classList.add('formulario-input-error-activo'); 
       
            }
            validarPassword2();
            break;

        case 'password2':
             validarPassword2();

            /*    
            const message = document.querySelector("#formmessage");

            kp2.addEventListener("focusout", checkSame);

            // This should be refactored.
            function checkSame() {
                if (kp1.value !== kp2.value) {
                    message.textContent = "❗Key Phrases DO NOT MATCH!";
                    message.style.visibility = "show";
                    kp2.style.backgroundColor = "#fff0f3";
                    kp2.value = "";
                    kp2.focus();
                } else {
                    message.style.display = "none";
                    kp2.style.backgroundColor = "#fff";
                    kp2.style.color = "#000";
                }
            }
            */
            break;

        case 'email':
            if(expresiones.emailValues.test(event.target.value)){
                document.getElementById('grupo-email').classList.remove('formulario-grupo-incorrecto'); //removing the incorrect part
                document.getElementById('grupo-email').classList.add('formulario-grupo-correcto');   // adding the correct part
                document.querySelector('#grupo-email i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-email i').classList.add('fa-check-circle');
                document.querySelector('#grupo-email .formulario-input-error').classList.remove('formulario-input-error-activo');
                
            } else {
                document.getElementById('grupo-email').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-email').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-email i').classList.add('fa-times-circle');
                document.querySelector('#grupo-email i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-email .formulario-input-error').classList.add('formulario-input-error-activo'); 
       
            }
             break;
    };
}

const validarPassword2=()=>{
    const inputPsw1 = document.getElementById('password');
    const inputPsw2 = document.getElementById('password2');
    if(inputPsw1.value !== inputPsw2.value){
     
        document.getElementById('grupo-password2').classList.add('formulario-grupo-incorrecto');
        document.getElementById('grupo-password2').classList.remove('formulario-grupo-correcto');
        document.querySelector('#grupo-password2 i').classList.add('fa-times-circle');
        document.querySelector('#grupo-password2 i').classList.remove('fa-check-circle');
        document.querySelector('#grupo-password2 .formulario-input-error').classList.add('formulario-input-error-activo'); 
        
                    kp2.focus();
    } else {
        document.getElementById('grupo-password2').classList.remove('formulario-grupo-incorrecto'); //removing the incorrect part
        document.getElementById('grupo-password2').classList.add('formulario-grupo-correcto');   // adding the correct part
        document.querySelector('#grupo-password2 i').classList.remove('fa-times-circle');
        document.querySelector('#grupo-password2 i').classList.add('fa-check-circle');
        document.querySelector('#grupo-password2 .formulario-input-error').classList.remove('formulario-input-error-activo');

    }

}
inputs.forEach((input) => {   //go trught all inputs to add an event listener
    input.addEventListener('keyup', validarFormulario); //after typed check each key entered in the field
    input.addEventListener('blur',  validarFormulario); //cursor is out of the fields
})

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

});