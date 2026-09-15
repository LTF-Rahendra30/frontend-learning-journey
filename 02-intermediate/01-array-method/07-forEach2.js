const num = [1,2,3,4,5];


// === As a Call back ==
let callback = function(n){
    console.log(n);
}
num.forEach(callback);
/* 
1
2
3
4
5 */