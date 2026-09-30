const item = Array.from(document.querySelectorAll('.product-item'));

const readyBtn = document.getElementById('ready-button');
const notRedyButton = document.getElementById('not-ready-button');

const resultContainer = document.querySelector('.product-result');

readyBtn.addEventListener('click', (event) => {
    item.filter((itm) => {
        itm.dataset.status === 'ready';
    }).forEach((itm) => {
        resultContainer.append(itm);
    })
    
})