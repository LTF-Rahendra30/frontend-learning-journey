// ======= TAKE VALID TRANSACTION AND CHANGE DATA TO NEW ARRAY WITHOUT CHANGE ORIGINAL ARRAY ==========


const transactionHistory = [
  { id: "TX01", produk: "Kemeja Flanel", total: 200000, status: true },
  { id: "TX02", produk: "Celana Chino", total: 350000, status: true },
  { id: "TX03", produk: "Jaket Bomber", total: 450000, status: false }
];

// ---- Chaining proccess ----

const validTransaction = transactionHistory.filter((transaction) => transaction.status === true).map((transaction) => `[${transaction.id}] ${transaction.produk} | Rp ${transaction.total.toLocaleString()}`);

console.log(validTransaction);
// ===== New Array after filtering by some condition ====
/* 
[
  '[TX01] Kemeja Flanel | Rp 200.000',
  '[TX02] Celana Chino | Rp 350.000'
] */


// -------- CHINING FILTER,MAP AND FOR-EACH() ========
const transactionHistory2 = [
  { id: "TX01", produk: "Kemeja Flanel", total: 200000, status: true, hp: "08123" },
  { id: "TX02", produk: "Celana Chino", total: 350000, statuts: false, hp: "08456" },
  { id: "TX03", produk: "Jaket Bomber", total: 450000, status: true, hp: "08789" }
];

function sendAPI(no,massage){
    console.log(`[System] Send to ${no}: ${massage}`);
    
}

transactionHistory2
    .filter(transaction => transaction.status === true)
    .map(transaction => {
        return {
            noHp : transaction.hp,
            massage: `Hello, order ${transaction.produk} | Value: ${transaction.total}`
        };
    })
    .forEach(notifData => {
        sendAPI(notifData.noHp,notifData.massage);
    });

