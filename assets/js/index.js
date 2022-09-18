const btnEnviar = document.getElementById('botonEnviar');
const validate = (e) => {
    e.preventDefault();
    const nombreDeUsuario = document.getElementById('usuario');
    const direcciónEmail = document.getElementById('email');
    if (usuario.value === "") {
        alert("Por favor, escribe tu nombre de usuario.");
        usuario.focus();
        return false;
    }
    if (email.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return false;
    }
    if (!emailVálido(email.value)) {
        alert("Por favor, escribe un correo electrónico válido");
        emailAddress.focus();
        return false;
    }
    return true; 
}
const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
botonEnviar.addEventListener('click', validate);


