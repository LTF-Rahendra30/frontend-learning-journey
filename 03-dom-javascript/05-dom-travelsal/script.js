// Event handling
const card = document.querySelector('.card');
const closeButton = document.querySelector('.close');


closeButton.addEventListener('click', () => {
    card.remove();
})