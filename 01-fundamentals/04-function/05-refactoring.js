function twoCubeVolume(a,b) {
    return a*a*a + b*b*b 
}

console.log(twoCubeVolume(10,10));
// 2000


// ============= Extraction Function ============
const keranjangBelanja = [
  { produk: "Sepatu Lari", harga: 500000, jumlah: 1 },
  { produk: "Kaos Polos", harga: 150000, jumlah: 2 },
  { produk: "Kaos Kaki", harga: 50000, jumlah: 3 }
];

const dataPengiriman = { kota: "Jakarta", beratKg: 2 };
const diskonMember = 0.10; // Diskon 10%

// ==== EXTRACTION CALCULATE TOTAL PRICE =====
function calculateSubtotal(items){
    return items.reduce((total,item) => total + (item.harga * item.jumlah),0);
}