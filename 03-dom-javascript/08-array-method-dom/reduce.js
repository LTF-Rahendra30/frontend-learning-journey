const paragraphs4 = Array.from(document.querySelectorAll('#konten-artikel p'));

const reduceContainer = document.querySelector('.reduce-content');



const totalCaracters = paragraphs4.reduce((acc,p) => acc + p.textContent.length,0);

reduceContainer.innerHTML = `
    <h2>DOM manipulation with Filter Reduce</h2>
    <p>Reduce whole pargaph character: ${totalCaracters}</p>`
