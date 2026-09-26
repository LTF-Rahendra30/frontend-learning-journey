const komputerChose = ['gajah','orang','semut'];

const indeksAcak = Math.floor(Math.random() * komputerChose.length);

// 3. Ambil data berdasarkan indeks tersebut
const randomChoose = komputerChose[indeksAcak];

console.log(randomChoose);



// const komputerUI = document.querySelector('.komputer');
// komputer.textContent += 'Semut'