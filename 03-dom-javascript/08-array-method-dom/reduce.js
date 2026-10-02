const paragraphs4 = Array.from(document.querySelectorAll('#konten-artikel p'));

const reduceContainer = document.querySelector('.reduce-content');

reduceContainer.innerHTML = `
    <h2>DOM manipulation with Filter Reduce</h2>
    <p>Reduce whole pargaph character</p>`


const totalCaracters = paragraphs4.