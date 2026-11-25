//  ========= GET ELEMENT VIDEO ======
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// ===== SELECT ONLY 'JAVASCRIPT LANJUTAN' ========
let jsLanjutan = videos.filter(vid => vid.textContent.includes('JAVASCRIPT LANJUTAN'))
// GET VIDEO
    .map(item => item.dataset.duration)
    .map(duration => {
        // 10:30 -> [10,30]
        // CHANGE DURATION TO BE INTEGER
        const parts = duration.split(':').map(part => parseFloat(part))
        return parts[0] * 60 + parts[1] ;
    })
// CALCULATE WHOLE DURATION (SECOND FORMAT)
    .reduce((total,second) => total + second,0);
// CHANGE TO hour, MINUTE

const hours = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - hours * 3600;

const minute = Math.floor(jsLanjutan / 60);
const seconds = jsLanjutan - minute * 60;


// ======= UI DOM ======

const pDuration = document.querySelector('.total-durasi');
const pTotalVideo = document.querySelector('.jumlah-video');


pDuration.textContent = `${hours} Jam , ${minute}  Menit, ${seconds} Detik`