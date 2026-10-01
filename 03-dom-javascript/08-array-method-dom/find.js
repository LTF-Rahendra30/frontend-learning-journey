const paragraphs3 = Array.from(document.querySelectorAll('#konten-artikel p'));


const findContainer = document.querySelector('.find-content');

findContainer.innerHTML = `
    <h2>DOM manipulation with Find Method</h2>
    <p>Find the first word in paragraph that includes "Javascript" word</p>`;

const firstWord = paragraphs3.find((p) => 
    p.textContent.includes("JavaScript")
);

if(firstWord){
    const pCopy = firstWord.cloneNode(true);
    findContainer.append(pCopy);
    pCopy.classList = 'filter-box';
    pCopy.style.color = 'red';
}