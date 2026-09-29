const paragraph = Array.from(document.querySelectorAll('p'));

// ---- MAP -----
// Change whole text to uppercase in the html with map method
const upperTexts = paragraph.map(p => p.textContent.toLocaleUpperCase());

console.log(upperTexts);
