const num = [1,2,3,4,5];


// === As a Call back ==
function callback(n){
    console.log(n);
}
num.forEach(callback);
/* 
1
2
3
4
5 */

// ======= With index and Value =====
const user = ['andrew','bob','chloe','david'];

user.forEach((usr,idx) => console.log(`User: ${usr} Index: ${idx}`)
)
/* User: andrew Index: 0
User: bob Index: 1
User: chloe Index: 2
User: david Index: 3
 */