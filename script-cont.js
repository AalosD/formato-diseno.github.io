const contInput = document.getElementById('cont'); 
const imgPreview6 = document.getElementById('cont2');

contInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            imgPreview6.src = e.target.result; // Establece el src de la imagen
            imgPreview6.style.display = 'block'; // Muestra la imagen

            console.log("Imagen cargada y mostrada"); // Mensaje de depuración en la consola
        };
        
        reader.readAsDataURL(file);
    } else {
        console.log("No se seleccionó ningún archivo."); // Mensaje en caso de que no haya archivo
    }
});