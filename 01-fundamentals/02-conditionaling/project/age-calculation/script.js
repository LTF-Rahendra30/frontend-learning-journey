
const form = document.getElementById("form-container");

form.addEventListener('submit', function(event){
    event.preventDefault();

    // ==== GET RESULT ====
    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result-text");
    const resultContent = document.getElementById("result-atribute");

    // ---- Remove ----
    result.classList.remove("result-content-valid") && result.classList.remove("result-content-invalid");
    resultContainer.classList.remove("result-container");

    resultContent.classList.remove("result-atribute");

    // ==== Process ====
    // --- Username ---
    const nameInput = document.getElementById("name-input");
    const userName = nameInput.value;

    // --- Age ---
    const ageInput = document.getElementById("age-input");
    const userAge = ageInput.valueAsNumber;
    
    // ==== Output Pop-up & AGE VALIDATOR ====
    if (userAge >= 17){
        resultContent.classList.add("result-atribute");
        resultContainer.classList.add("result-container");
        
        result.textContent = `✅ ${userName}, ${userAge} yo, You're Eligible!`;
        result.classList.add("result-content");
        result.classList.add("result-content-valid");
        
    }else{
        resultContent.classList.add("result-atribute");
        resultContainer.classList.add("result-container");

        result.textContent = `❌ You're not Eligible!`
        result.classList.add("result-content");
        result.classList.add("result-content-invalid");
    }
});