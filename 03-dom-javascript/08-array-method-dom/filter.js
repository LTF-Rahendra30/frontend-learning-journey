
// Mengambil semua elemen <p> di halaman dan mengubahnya menjadi array
const paragraphs2 = Array.from(document.querySelectorAll('p'));

//  Try Filter to get paragraph > 50 caracter
// const longParagraph = paragraphs2.filter((p) => p.textContent.length > 150 );

// ========= Manipulation DOM with Filter Map =========

const filterContainer = document.querySelector('.filter-konten');

filterContainer.innerHTML = `
    <h2>DOM manipulation with Filter Method</h2>
    <p>Filter patargaph that have > 150 char</p>`
// ---- Manipulation DOM With filter any condition ----

const eligibleP = paragraphs2.filter((p) => p.textContent.length > 150 );

eligibleP.forEach((p) => {
    const pCopy = p.cloneNode(true);
    pCopy.classList = 'filter-box';
    filterContainer.append(pCopy);
});