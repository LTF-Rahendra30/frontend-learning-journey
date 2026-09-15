function showNum(n){
    if(n === 0) return;
    console.log(n);
    return showNum(n - 1);
    
}

showNum(10); // infity and never endded 

/* 10
9
8
7
6
5
4
3
2
1
 */


// ==== FACTORIAL ===
function factorial(n){

    if(n === 0) return 1;
    return n * factorial(n-1)
}

console.log(factorial(5)); // 120
