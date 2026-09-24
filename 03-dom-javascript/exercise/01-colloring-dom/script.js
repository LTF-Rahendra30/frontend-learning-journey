const button = document.getElementById('ubahWarna');
const bodyBackground = document.getElementById('body');


button.addEventListener('click', ()=> {
    bodyBackground.classList.toggle('bg-color')

})