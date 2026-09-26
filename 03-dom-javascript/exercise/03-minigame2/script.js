

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


// === EVENTS FOR CLICK ====
const pGajah = document.querySelector(".gajah");
const pOrang = document.querySelector(".orang");
const pSemut = document.querySelector(".semut");

const infoArea = document.querySelector('.info');
const compArea = document.querySelector('.komputer');

pGajah.addEventListener('click', () => {
    const computerChoose = getRandomChoose();
    const playerChoose = pGajah.className;

    const result = getResult(computerChoose,playerChoose);

    // Result 
    compArea.textContent += computerChoose;
    infoArea.textContent = result;
})