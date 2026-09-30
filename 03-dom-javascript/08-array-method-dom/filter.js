
// Mengambil semua elemen <p> di halaman dan mengubahnya menjadi array
const paragraphs2 = Array.from(document.querySelectorAll('p'));

//  Try Filter to get paragraph > 50 caracter
// const longParagraph = paragraphs2.filter((p) => p.textContent.length > 150 );

// ========= Manipulation DOM with Filter Map =========

const filterContainer = document.querySelector('.filter-konten');

const newH2 = document.createElement('h2');
newH2.textContent = 'DOM manipulation with Filter Method';

filterContainer.prepend(newH2);

// ---- Manipulation DOM With filter any condition ----

const eligibleP = paragraphs2.filter((p) => p.textContent.length > 150 )
.forEach((p) => {
    p.classList = 'filter-box'
    filterContainer.append(p);
})
