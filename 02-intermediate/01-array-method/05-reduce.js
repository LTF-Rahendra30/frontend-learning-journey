const number = [1,2,3,4];
const sum = number.reduce((accumulator,current) => {
    return accumulator + current
},0);
console.log(sum);


// --- Use Case ----

const riwayatTransaksi = [
  { produk: "Kemeja Flanel", total: 200000, status: "BERHASIL" },
  { produk: "Celana Chino", total: 350000, status: "GAGAL" },
  { produk: "Jaket Bomber", total: 450000, status: "BERHASIL" }
];

const amountValidTransaction = riwayatTransaksi.filter(transaction => transaction.status === "BERHASIL")
    .reduce((accumulator,transactionNow) => {
        return accumulator + transactionNow.total;
    },0); // <-- 0 adalah nilaiAwal (kalkulasi dimulai dari angka 0)

console.log(`Valid Transaction: ${amountValidTransaction}`);



// =========== REDUCE RETURN OBJECT ========

const num = [1,2,3,4,5];

const sum2 = num.reduce((accumulator,n) =>{
    console.log(`Accumulator: ${accumulator}, Current: ${n}`);
    return accumulator + n;
},0)
console.log(sum2);
