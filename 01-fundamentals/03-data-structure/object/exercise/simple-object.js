const user = {
    name: "Bob",
    age: 12,
    isStudent: true,
    hobby: 'Coding'
}

// ==== Display Property ====
console.log(user.name);
console.log(user.age);
/* Bob
12 */

// ==== Change Property Object ====
user.hobby = 'Drawing';
console.log(user);
// { name: 'Bob', age: 12, isStudent: true, hobby: 'Drawing' }

// ==== Update Property Object ====
user.city = 'Tokyo';
console.log(user);
/* 
{
  name: 'Bob',
  age: 12,
  isStudent: true,
  hobby: 'Drawing',
  city: 'Tokyo'
}
 */