const button = document.getElementById('ubahWarna');
const body = document.getElementById('body');
const containerButton = document.querySelector('.container')

button.addEventListener('click', ()=> {
    document.body.classList.toggle('bg-color')

});



// ==== RANDOM BUTTON TO CHANGE BG COLOR OF BODY ====

const randomBtn = document.createElement('button');
randomBtn.textContent = 'Random Bg Warna';
randomBtn.type = 'button';

button.after(randomBtn);


randomBtn.addEventListener('click', () => {
    const red = Math.round(Math.random() * 255 *1);
    const green = Math.round(Math.random() * 255 *1);
    const blue = Math.round(Math.random() * 255 *1);
    
    document.body.style.backgroundColor = 'rgb('+ red+','+green+','+blue+')'

})