
// Mengambil semua elemen <p> di halaman dan mengubahnya menjadi array
const paragraphs = Array.from(document.querySelectorAll('p'));

//  Try Filter to get paragraph > 50 caracter
const logParagraph = paragraphs.filter((p) => p.textContent.length > 50 );
