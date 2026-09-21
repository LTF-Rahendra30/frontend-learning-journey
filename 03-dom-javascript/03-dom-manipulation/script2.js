// ======= DOM NODE MANIPULATION =========

// -------- CREATE ELEMENT ---------

const newParagraph = document.createElement('p');

// ------- CREATE NEW TEXT -----------
const newText = document.createTextNode('This is new Paragraph');

// ------ SAVE TEXT IN PARAGRAPH ----
newParagraph.appendChild(newText);

// ----- SAVE NEW PARAGRAPH IN ENDING SECTION OF A ---------
const sectionA = document.getElementById('a');
sectionA.appendChild(newParagraph);