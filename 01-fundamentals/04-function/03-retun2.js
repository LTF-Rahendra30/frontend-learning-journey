function isValidEmail(email){
    return email.includes("@");
}

console.log(isValidEmail('Bob@mail'));
console.log(isValidEmail('Bob.mail'));
/* true
false */