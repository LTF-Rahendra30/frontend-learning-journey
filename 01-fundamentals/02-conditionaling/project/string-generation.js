// ================== STRING GENERATION WITH JAVASCRIPT =============

// Data Input Object

const userData = {
    name : "Boby Charley",
    email : "boby123@gmail.com",
    age : 15,
}
// Validator
const isValidName = userData.name !== "" && userData.name.length >= 3;

const isValidEmail = userData.email !== "" && userData.email.includes("@");

const isValidAge = userData.age >= 13 && userData.age <=100;