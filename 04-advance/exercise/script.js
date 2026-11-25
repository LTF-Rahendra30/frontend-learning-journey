//  ========= GET ELEMENT VIDEO ======
const videos = Array.from(document.querySelectorAll('[data-duration]'));

const jsLanjutan = videos.filter(vid => vid.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(item => item.dataset.duration);
// ===== SELECT ONLY 'JAVASCRIPT LANJUTAN' ========
// GET VIDEO
// CHANGE DURATION TO BE INTEGER
// CALCULATE WHOLE DURATION (SECOND FORMAT)
// CHANGE TO hour, MINUTE




