const user ={
    name : "bob",
    age: 12,
    isMarry : false
};

// Without Loop for access property in the Object
console.log(user.name);
console.log(user['age']);
console.log(user.isMarry);
// bob
// 12
// false


// ==== With Loop ===
for (const key in user){
    console.log(user[key]);
    // bob
    // 12
    // false
    
}