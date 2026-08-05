
const form = document.getElementById("form-container");

form.addEventListener('submit', function(event){
    event.preventDefault();

    // ==== GET RESULT ====
    const resultContainer = document.getElementById("result");
    const result = document.getElementById("result-text");

    // ---- Remove
    result.classList.remove("result-content-valid") && result.classList.remove("result-content-invalid");
    resultContainer.classList.remove("result-container");


    // ==== Process ====

    // --- Username ---
    const nameInput = document.getElementById("name-input");
    const userName = nameInput.value;

    // --- Age ---
    const ageInput = document.getElementById("age-input");
    const userAge = ageInput.valueAsNumber;
    

    // ==== Output Pop-up & AGE VALIDATOR ====
    if (userAge >= 17){
        result.textContent = `✅ ${userName}, ${userAge} yo, You're Eligible!`;
        result.classList.add("result-content-valid");
        resultContainer.classList.add("result-container");
    }else{
        result.textContent = `❌ You're not Eligible!`
        result.classList.add("result-content-invalid");
        resultContainer.classList.add("result-container");
    }


});