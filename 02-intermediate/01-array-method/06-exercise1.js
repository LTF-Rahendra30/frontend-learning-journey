const transactions = [
  { id: 1, amount: 50000, status: 'success' },
  { id: 2, amount: 30000, status: 'pending' },
  { id: 3, amount: 75000, status: 'success' },
  { id: 4, amount: 20000, status: 'failed' }
];

/* 
1. take transaction that success
2. Make new array
3. calculate all amount
*/

const total = transactions
    .filter(trx => trx.status === "success")
    .map(trx => trx.amount)
    .reduce((sum,amountNow) => sum + amountNow, 0);

console.log(total);
// 125000



// ===== AVARAGE AMOUNT =====

const avgAmount = transactions
    .filter(trx => trx.status === "success")
    .map(trx => {
      return {
        id: trx.id,
        amount: trx.amount
      }
    })
    .reduce((accumulator,currentAmount) => {
      return {
        total: accumulator.total + currentAmount.amount,
        count: accumulator.count + 1
      }
    }, {total: 0, count:0})
    const avarage = avgAmount.total / avgAmount.count
console.log(avarage);


// ========= More Update ======
/* 
1. Total amount
2. Jumlah transaksi
3. Transaksi terbesar (max amount)
4. Transaksi terkecil (min amount) */

const transactions2 = [
  { id: 1, amount: 50000, status: 'success' },
  { id: 2, amount: 30000, status: 'pending' },
  { id: 3, amount: 75000, status: 'success' },
  { id: 4, amount: 20000, status: 'success' }
];
const stats = transactions2
    .filter(trx => trx.status === "success")
    .reduce((acc,trx) => {
      return {
        total: acc.total + trx.amount,
        count: acc.count + 1,
        maxAmount : Math.max(acc.maxAmount, trx.amount),
        minAmount: Math.min(acc.minAmount, trx.amount)
      }
    },{total: 0, count: 0, maxAmount: -Infinity, minAmount: Infinity});
console.log(stats);
// { total: 145000, count: 3, maxAmount: 75000, minAmount: 20000 }
