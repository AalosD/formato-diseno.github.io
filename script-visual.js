const visualInput = document.getElementById('visual');
    const imgPreview5 = document.getElementById('visual2');

    visualInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgPreview5.src = e.target.result;
                imgPreview5.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });