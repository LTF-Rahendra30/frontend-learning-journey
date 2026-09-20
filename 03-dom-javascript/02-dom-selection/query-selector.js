// ======= QUERY  SELECTOR =======

const paragraph4 = document.querySelector('#b p');

paragraph4.style.color = 'pink';
paragraph4.style.fontSize = '30px';

const secondItem = document.querySelector('ul li:nth-child(2');
secondItem.style.backgroundColor = 'orange';


// ======== QUERY SELECTORS THAT RETURN Node LIST =====

const p = document.querySelectorAll('p');

// Simple Manipualation 
for(let i = 0; i < p.length; i++){
    p[i].innerHTML = "Lorem, ipsum";
}