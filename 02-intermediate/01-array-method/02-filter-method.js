// ====== FILTER =====
// TAKE ITEM THAT ELIGIBLE

const number = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = number.filter(num => num %2 === 0);
console.log(evenNumber);
// [ 2, 4, 6, 8, 10 ]

const oddNumber = number.filter(num => num %2 !== 0);
console.log(oddNumber);
// [ 1, 3, 5, 7, 9 ]