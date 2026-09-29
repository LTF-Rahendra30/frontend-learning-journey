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

// --- Add Index in Html ---

paragraphs.map((p,index) => {
    p.innerHTML = `<span class="index-span">Index ke - ${index + 1}</span>. ${p.textContent}`;

    const spanTextIndex = document.querySelectorAll('.index-span');

    spanTextIndex.forEach(text => text.style.color = 'blue')
})