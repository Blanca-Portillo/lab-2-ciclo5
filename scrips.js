
document.getElementById('hobby').addEventListener('click', function() {
    document.getElementById('hobby-text').textContent = 'Leer libros de acción romance y comedia ';
    document.querySelector('#hobby .card-image').classList.remove('hidden');
    document.querySelector('#hobby .card-image').classList.add('visible');
});


document.getElementById('comida').addEventListener('click', function() {
    document.getElementById('comida-text').textContent = 'Hamburguesa';
    document.querySelector('#comida .card-image').classList.remove('hidden');
    document.querySelector('#comida .card-image').classList.add('visible');
});


document.getElementById('Serie').addEventListener('click', function() {
    document.getElementById('Serie-text').textContent = 'GAMES OF THRONES y HOUSE OF THE DRAGÓN';
    document.querySelector('#Serie .card-image').classList.remove('hidden');
    document.querySelector('#Serie .card-image').classList.add('visible');
});

document.getElementById('color').addEventListener('click', function() {
    document.getElementById('color-text').textContent = 'Rojo';
    document.querySelector('#color .card-image').classList.remove('hidden');
    document.querySelector('#color .card-image').classList.add('visible');
});


document.getElementById('artista').addEventListener('click', function() {
    document.getElementById('artista-text').textContent = 'Lana del Rey';
    document.querySelector('#artista .card-image').classList.remove('hidden');
    document.querySelector('#artista .card-image').classList.add('visible');
});


document.getElementById('pais').addEventListener('click', function() {
        document.getElementById('pais-text').textContent = 'Colombia';
        document.querySelector('#pais .card-image').classList.remove('hidden');
        document.querySelector('#pais .card-image').classList.add('visible');
    }
);
