const item = Array.from(document.querySelectorAll('.product-item'));

const readyBtn = document.getElementById('ready-button');
const notRedyButton = document.getElementById('not-ready-button');

const resultContainer = document.querySelector('.product-result');

readyBtn.addEventListener('click', (event) => {
    const readyItem = item.filter((itm) => {
        return itm.dataset.status === 'ready';
    });
    
    readyItem.forEach(itm => {
        console.log(itm);
        
        const itemCopy = itm.cloneNode(true);
        resultContainer.append(itemCopy)
        
    });
    
})