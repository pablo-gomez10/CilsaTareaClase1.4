function submitForm() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const pais = document.getElementById('pais').value;

    if (nombre && apellido && email && fechaNacimiento && pais) {
        alert('Formulario enviado con éxito');
    } else {
        alert('Por favor, completa todos los campos');
    }
}

function changeStyle(style) {
    const formContainer = document.getElementById('formContainer');
    if (style === 'normal') {
        formContainer.className = 'normal';
        document.body.className = ''; // Restablecer el fondo del cuerpo
    } else if (style === 'alto-contraste') {
        formContainer.className = 'alto-contraste';
        document.body.className = 'alto-contraste'; // Aplicar alto contraste al cuerpo
    }
}
