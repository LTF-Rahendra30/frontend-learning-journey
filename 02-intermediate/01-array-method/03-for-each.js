
// ===== USAGE  FOR LOOPING EVERY ELEMENT IN THE ARRAY ==========
const names  = ['Adi', 'Budi', 'Citra'];
names.forEach(name => {
    console.log(`Hello ${name}`);
    /* 
    Hello Adi
    Hello Budi
    Hello Citra */
});



// ===== ACCESS INDEX ELEMENT =====
const color = ['red','green','blue'];

color.forEach((item,index) => {
    console.log(`Index to- ${index} : ${item}`);
    /* 
    Index to- 0 : red
    Index to- 1 : green
    Index to- 2 : blue */
})