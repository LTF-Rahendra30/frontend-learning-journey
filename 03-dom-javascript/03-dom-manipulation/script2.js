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


// ====== ADD NEW CONTENT AFTER ITEM 1 AND BEFORE ITEM 2 IN LIST (SECTION 2) ========

const newItem = document.createElement('li');
const newItemText = document.createTextNode("New Item");
newItem.appendChild(newItemText);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');


// Add content 
ul.insertBefore(newItem,li2);





// ========= REMOVE LINK IN HTML WITH REMOVE CHILD NODE =========

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// ---- CHANGE P4 WITH H2 -----

const sectionB = document.getElementById('b');

const paragraph4 = sectionB.querySelector('p');

const h2New = document.createElement('h2');
const h2Text = document.createTextNode('New H2 Lorem ipsum')

h2New.appendChild(h2Text);

sectionB.replaceChild(h2New,paragraph4);