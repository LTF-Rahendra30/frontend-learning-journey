function twoCubeVolume(a,b) {
    return a*a*a + b*b*b 
}

console.log(twoCubeVolume(10,10));
// 2000


// ============= Extraction Function ============

// --------- DATA EXAMPLE -------
const keranjangBelanja = [
  { produk: "Sepatu Lari", harga: 500000, jumlah: 1 },
  { produk: "Kaos Polos", harga: 150000, jumlah: 2 },
  { produk: "Kaos Kaki", harga: 50000, jumlah: 4 }
];

const dataPengiriman = { kota: "Jakarta", beratKg: 2 };
const diskonMember = 0.10; // Diskon 10%



// ==== EXTRACTION CALCULATE TOTAL PRICE =====
function calculateSubtotal(items){
    return items.reduce((total,item) => total + (item.harga * item.jumlah),0);
}

// HITUNG ONGKIR
function calculateOngkir(city,weight){
    const ONGKIR_JAKARTA = 10000;
    const TARIF_LUAR = 25000;
    return city === "Jakarta" ? weight * ONGKIR_JAKARTA : weight * TARIF_LUAR;
}
// ==== DISPLAY FUNCTION ===
function displayResult(subTotal,discount,ongkir,finalTotal){
    console.log(`--- Ringkasan Pembayaran (Clean) ---`);
    console.log(`Subtotal    : Rp ${subTotal}`);
    console.log(`Potongan    : Rp ${discount}`);
    console.log(`Ongkir      : Rp ${ongkir}`);
    console.log(`Total Bayar : Rp ${finalTotal}`);
}

// === MAIN FUNCTION ===
function proccessTransaction(items,pengiriman,discount){
    const subTotal = calculateSubtotal(items);
    const ongkir = calculateOngkir(pengiriman.kota,pengiriman.beratKg);

    const discountCut = subTotal * discount;
    const finalTotal = subTotal - discountCut + ongkir;

    displayResult(subTotal,discountCut,ongkir,finalTotal);
}



// ====== USAGE =====
proccessTransaction(keranjangBelanja,dataPengiriman,diskonMember);

