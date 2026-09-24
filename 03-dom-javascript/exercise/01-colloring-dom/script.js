const button = document.getElementById('ubahWarna');
const body = document.getElementById('body');
const containerButton = document.querySelector('.container')

button.addEventListener('click', ()=> {
    document.body.classList.toggle('bg-color')

});



// ==== RANDOM BUTTON TO CHANGE BG COLOR OF BODY ====

const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random Bg Warna';

containerButton.append(randomBtn);