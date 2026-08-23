

// let numbers = [1,2,3,4,5];
// for ( const num of numbers){
//     console.log(num);
    
// }

const cat = {
    name: 'Bob',
    age: 3
};

// Manual loop value in oject
for (const key in cat){
    console.log(cat[key]);
    // Bob
    // 3
}

// With Method
const keys = Object.keys(cat);
console.log(keys);
// [ 'name', 'age' ]


const values = Object.values(cat);
console.log(values);
// [ 'Bob', 3 ]