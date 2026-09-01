// SCPEAD OPERATPORS

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];


const combine = [...arr1, ...arr2];
console.log(combine);
/* 
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
   */

const combine2 = [...arr1, "hello",...arr2 , "Welcome"];
console.log(combine2);

// [ 1, 2, 3, 4, 'hello', 5, 6, 7, 8, 'Welcome' ]




// ======= CLONE OLD ARRAY WITHOUT CHANGE ORIGINAL ARRAY ===========

const originalUser = ['Andrew','Bob','Chloe'];
console.log(originalUser);
// [ 'Andrew', 'Bob', 'Chloe' ]


const newUser = [...originalUser, 'Duts'];
console.log(newUser);
// [ 'Andrew', 'Bob', 'Chloe', 'Duts' ]