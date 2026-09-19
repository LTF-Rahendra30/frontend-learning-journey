// ===== DOM SELECTION =====

// ------- GET ELEMENT BY ID ------
const judul = document.getElementById('judul');
judul.style.color = 'red' // Change color of h1

judul.innerHTML = 'Hidup Jokowi'


// ====== GET ELEMENTS BY TAG NAME =====
const paragraph = document.getElementsByTagName('p') // HTML Collection list
// change bg color of paragraph
paragraph[0].style.backgroundColor = 'pink'

// with loop
for (let i=0; i < paragraph.length; i++){
    paragraph[i].style.backgroundColor = 'pink';

}

// ===== GET ELEMENTS BY CLASS NAME =====

const itemList = document.getElementsByClassName('item');

// Try change value and Font weight
for (let i = 0; i < itemList.length; i ++){
    itemList[i].style.fontSize = '30px'
}