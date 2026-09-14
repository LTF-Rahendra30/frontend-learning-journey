
// ----- Global ----
let x = 100;

// ---- Local var ----
function func1(){
    let x = 1;
    console.log(x);
    
}
function func2(){
    let y = 2;
    console.log(y);

    // console.log(x);  this eror
    
    
}

func1() // 1
func2() // 2
console.log(x); // 100
