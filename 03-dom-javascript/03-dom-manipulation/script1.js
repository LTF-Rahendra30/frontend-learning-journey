


// ======== INNER HTML (CHANGE CONTENT OF HTML) FROM JS ==========

// Change h1
const h1 = document.getElementById('judul');
judul.innerHTML = "HIDUP JOKOWIIIII";

// change section A
// const sectionA = document.querySelector('#a');
// sectionA.innerHTML = 'Lorem ipsum';


// ======= ELEMENT STYLE ======

// Change color of first paragraph
const paragraph1 = document.querySelectorAll('p')[0];
paragraph1.style.color = 'red';


// ========== MANIPULATION ATRIBBUTE =======

// Add new atribute in h1
h1.setAttribute('name', 'WOWO');
// <h1 id= "judul" name="WOWO">XXXXXXX</h1>

const a = document.querySelector('a');
a.setAttribute('id', 'LOLOLOLO')

// ---- Get Attribute ------
a.getAttribute('href');

// 'http://instagram.com/sandhikagalih'


// ------- REMOVE ATTRIBUTE -------

a.removeAttribute('href');
// atribbute href has deleted


// ======== ADD CLASS WITH CLASS LIST =======
const p2 = document.querySelector('.p2');
p2.classList.add('mbg')
// mbg added to extra class

// ---- remove class ---
p2.classList.remove('mbg');
// mbg has removed



// ---- toggle class ---
const button = document.getElementsByTagName('button')[0];
const toggleClass = button.classList.toggle('style');

// Add class Toggle in element HTML 
const section2 = document.getElementById('b');
section2.classList.toggle('light-green');



// ======= ITEM METHOD =====
p2.classList.add('mbg');
p2.classList.add('satu');
p2.classList.add('dua');

p2.classList.item(0); // Show class that index 0