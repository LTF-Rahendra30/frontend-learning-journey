const paragraphs = Array.from(document.querySelectorAll('p'));

// ---- MAP -----
// Change whole text to uppercase in the html with map method
const upperTexts = paragraphs.map(p => p.textContent.toLocaleUpperCase());

console.log(upperTexts);


// --- CHANGE COLOR TEXT WHOLE PARAGRAPH TO BE BLUE ---
paragraphs.map((p) => {
    p.style.color = 'coral';
    p.style.fontFamily = 'sans-serif'
})