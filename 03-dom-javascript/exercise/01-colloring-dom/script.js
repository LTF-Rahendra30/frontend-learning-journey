// EXERCISE 1, ADD BUTTON THAT CHANGE COLOR OF BODY (BG COLOR)

const button = document.getElementById('ubahWarna');
const body = document.getElementById('body');
const containerButton = document.querySelector('.container')

button.addEventListener('click', ()=> {
    document.body.classList.toggle('bg-color')

});



// ==== EXERCISE 2, ADD RANDOM BUTTON TO CHANGE BG COLOR OF BODY BY RANDOM WITH RANDOM MATH AND RGB  ====

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