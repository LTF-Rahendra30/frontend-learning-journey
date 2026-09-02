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