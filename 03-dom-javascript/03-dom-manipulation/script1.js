


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