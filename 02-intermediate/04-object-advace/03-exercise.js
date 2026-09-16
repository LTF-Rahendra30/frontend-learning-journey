
// Create bject
function Buss(sopir,tujuan,penumpang,bayar){
    this.sopir = sopir;
    this.tujuan = tujuan;
    this.penumpang = penumpang;
    this.bayar = bayar;

    // Method
    this.penumpangNaik = (name) => {
        this.penumpang.push(name)
        return this.penumpang
    }
}

const buss1 = new Buss("Bob",['jakarta','bekasi','jogja'],[],0);
console.log(buss1);
/* Buss {
  sopir: 'Bob',
  tujuan: [ 'jakarta', 'bekasi', 'jogja' ],
  penumpang: [],
  bayar: 0
} */

// === Try method ====
buss1.penumpangNaik("Chocky","Bob");
console.log(buss1.penumpang);
// [ 'Chocky' ]