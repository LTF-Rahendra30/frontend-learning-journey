const paragraphs3 = Array.from(document.querySelectorAll('#konten-artikel p'));


const findContainer = document.querySelector('.find-content');

findContainer.innerHTML = `
    <h2>DOM manipulation with Find Method</h2>
    <p>Find first word includes "Javascript"</p>`;

const firstWord = paragraphs3.find((p) => 
    p.textContent.includes("JavaScript")
);

if(firstWord){
    firstWord.style.color = 'red';
}