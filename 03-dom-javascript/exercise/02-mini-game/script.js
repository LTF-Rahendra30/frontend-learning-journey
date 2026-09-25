// 1. Siapkan data di dalam array
const choose = ['semut','orang','gajah'];

// 2. Acak indeks berdasarkan panjang array
const indeksAcak = Math.floor(Math.random() * choose.length);

// 3. Ambil data berdasarkan indeks tersebut
const randomChoose = choose[indeksAcak];

 // Output akan berubah-ubah setiap kali dijalankan

const user = prompt("pilihan [gajah,orang,semut]: ");


let result = '';

if (user === randomChoose) result = 'SERI';
else if(user === 'gajah'){
    result = (randomChoose === 'orang') ? 'MENANG' : 'KALAH';
}else if(user === 'orang'){
    result = (randomChoose === 'gajah') ? 'KALAH' : 'MENANG';
} else if(user === 'semut'){
    result = (randomChoose === 'orang') ? 'KALAH' : 'MENANG';
} else{
    result = 'salah, gak ada pilihanya wok'
}

alert(`Kamu pilih: ${user}, random: ${randomChoose},
    Hasil: ${result}`)