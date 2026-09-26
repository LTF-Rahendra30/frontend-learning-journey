

function getRandomChoose(){
    const komputerChose = ['gajah','orang','semut'];
    
    const indeksAcak = Math.floor(Math.random() * komputerChose.length);
    
    // 3. Ambil data berdasarkan indeks tersebut
    const randomChoose = komputerChose[indeksAcak];
    
    return randomChoose;
}


// const komputerUI = document.querySelector('.komputer');
// komputer.textContent += 'Semut'

function getResult(randomChoose,user){
    if (user === randomChoose) return 'SERI';
    if(user === 'gajah') 
        return (randomChoose === 'orang') ? 'MENANG' : 'KALAH';

    if(user === 'orang')
        return (randomChoose === 'gajah') ? 'KALAH' : 'MENANG';
    if(user === 'semut')
        return (randomChoose === 'orang') ? 'KALAH' : 'MENANG';
    
    return 'salah, gak ada pilihanya wok'
    
}

console.log(getResult(getRandomChoose(),"wowok"));
