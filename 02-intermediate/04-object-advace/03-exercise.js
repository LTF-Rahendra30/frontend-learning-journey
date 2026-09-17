
// Create bject
function Buss(sopir,tujuan,penumpang,bayar){
    this.sopir = sopir;
    this.tujuan = tujuan;
    this.penumpang = penumpang;
    this.bayar = bayar;

    // Method
    this.penumpangNaik = function(name) {
        this.penumpang.push(name)
        return this.penumpang
    }

    this.penumpangTurun = function(name,bayar) {
        if(this.penumpang.length === 0){
            console.log("Empty");
            return false;
        }
        for(let i =0; i < this.penumpang.length; i++){
            if(this.penumpang[i] === name){
                this.penumpang.splice(i,1);
                this.bayar += bayar;
                i --;
                return this.penumpang
            }
        }
        console.log("Name is empty in buss");
        return false;
        
    }
}

const buss1 = new Buss("Bob",['jakarta','bekasi','jogja'],[],0);
/* Buss {
    sopir: 'Bob',
    tujuan: [ 'jakarta', 'bekasi', 'jogja' ],
    penumpang: [],
    bayar: 0
    } */
   
   // === Try method ====
buss1.penumpangNaik("Chocky");
buss1.penumpangNaik("bob");
buss1.penumpangNaik("Joy");
console.log(buss1.penumpang);
// [ 'Chocky', 'bob', 'Joy' ]

buss1.penumpangTurun("bob",100);
console.log(buss1.penumpang);

// [ 'Chocky', 'Joy' ]


console.log(buss1);
/* 
Buss {
  sopir: 'Bob',
  tujuan: [ 'jakarta', 'bekasi', 'jogja' ],
  penumpang: [ 'Chocky', 'Joy' ],
  bayar: 100,
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
} */