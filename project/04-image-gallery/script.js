

// ======== EVENT DELEGATION ========

const container = document.querySelector('.container')
const mainImage = document.querySelector('.main-image');

const imageGrid = document.querySelectorAll('.image-select')

container.addEventListener('click', (event)=> {

    // Check click when Image Select
    if(event.target.className === 'image-select'){
        mainImage.src = event.target.src

        // Add animation
        mainImage.classList.add('fade');

        setTimeout(() => {
            mainImage.classList.remove('fade')
        },800);

        // Add active style when image was click 

        imageGrid.forEach((img) => {
            img.className = 'image-select'
        });

        event.target.classList.add('active')
    }

});