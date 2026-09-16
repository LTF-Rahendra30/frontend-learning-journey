
// Create bject
function Buss(sopir,tujuan,penumpang,bayar){
    this.sopir = sopir;
    this.tujuan = tujuan;
    this.penumpang = penumpang;
    this.bayar = bayar;
}

const buss1 = new Buss("Bob",['jakarta','bekasi','jogja'],[],0);
console.log(buss1);
/* Buss {
  sopir: 'Bob',
  tujuan: [ 'jakarta', 'bekasi', 'jogja' ],
  penumpang: [],
  bayar: 0
} */