// ======= CHANGE BG COLOR OF P3 WHEN CLICK ======

const p3 = document.querySelector('.p3');

// ==== INLINE HTML ATRIBUTE ====

function changeColor(){
    p3.style.backgroundColor = 'lightgreen';
    p2.classList.add('color')
}


// ====== CHANGE COLOR BY METHOD ====
const p2 = document.querySelector('.p2');
p2.onclick = changeColor;