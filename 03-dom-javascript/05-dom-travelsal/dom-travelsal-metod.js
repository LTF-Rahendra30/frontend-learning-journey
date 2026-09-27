// Event handling
/* const card = document.querySelector('.card');
const closeButton = document.querySelector('.close');


closeButton.addEventListener('click', () => {
    card.remove();
}) */




// ==== DOM TRAVELSAL ====
const closeButton = document.querySelectorAll('.close');

closeButton.forEach((close) => {
    close.addEventListener('click', (event) => {
        // close.parentElement.style.display = 'none';
        event.target.parentElement.style.display = 'none';
    })
})



// ========== DOM TRAVELSAL METHOD =======

const nama = document.querySelector('.nama');

// Perent element
console.log(nama.parentElement);


// Sibling
console.log(nama.nextElementSibling);


// Previous sibling
console.log(nama.previousElementSibling);
