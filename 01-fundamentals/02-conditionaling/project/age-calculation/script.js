
const form = document.getElementById("form-container");

form.addEventListener('submit', function(event){
    event.preventDefault();

    // ==== GET RESULT ====
    const resultContainer = document.getElementById("result");
    const result = document.getElementById("result-text");


    // ==== Process ====

    // --- Username ---
    const nameInput = document.getElementById("name-input");
    const userName = nameInput.value;

    // --- Age ---
    const ageInput = document.getElementById("age-input");
    const userAge = ageInput.valueAsNumber;
    
});