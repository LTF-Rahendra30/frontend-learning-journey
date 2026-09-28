// Event handling
/* const card = document.querySelector('.card');
const closeButton = document.querySelector('.close');


closeButton.addEventListener('click', () => {
    card.remove();
}) */




// ==== DOM TRAVELSAL ====
/* const closeButton = document.querySelectorAll('.close');

closeButton.forEach((close) => {
    close.addEventListener('click', (event) => {
        // close.parentElement.style.display = 'none';
        event.target.parentElement.style.display = 'none';

        // ----- TO HANDLE EVENT BUBBLING -----
        event.preventDefault()
        event.stopPropagation();
    })
})
// ---- EVENT FOR CARD ----
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click',() => {
        alert('ok wok');
    })
})

 */

// ==== STORED EVENTS IN COTAINERS ====

const container = document.querySelector('.container');

container.addEventListener('click', (event)=> {
    if(event.target.className === 'close') {
        event.target.perentElement.style.display = 'none'
    }
})