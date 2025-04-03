document.addEventListener('DOMContentLoaded', function () {
    const btnAceptar = document.querySelector('button');  // Selecciona el primer botón
    const aviso = document.getElementById('avisoPrivacidad');
    const body = document.body;

    // Si ya aceptó, ocultamos el aviso y quitamos el desenfoque
    if (localStorage.getItem('avisoAceptado') === 'true') {
        aviso.style.display = 'none';
        body.classList.remove('desenfocado');
    }

    // Si no, esperamos al clic en el botón
    if (btnAceptar) {
        btnAceptar.addEventListener('click', function () {
            aviso.style.display = 'none';
            body.classList.remove('desenfocado');
            localStorage.setItem('avisoAceptado', 'true');
        });
    }
});
