const form = document.getElementById("form-container");

form.addEventListener('submit', function(event){
    event.preventDefault();

    // ==== GET RESULT ====
    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result-text");

    // ----- ROW CONTENT -----
    const nameRowContent = document.getElementById("name-row");
    const ageRowContent = document.getElementById("age-row");
    
    // ---- Remove ----
    result.classList.remove("result-content-valid");
    result.classList.remove("result-content-invalid");
    resultContainer.classList.remove("result-container");

    // -- Remove Content Row ---
    nameRowContent.classList.remove("name-row");
    ageRowContent.classList.remove("age-row");

    // ==== Process ====
    // --- Username ---
    const nameInput = document.getElementById("name-input");
    const userName = nameInput.value;

    // --- Age ---
    const ageInput = document.getElementById("age-input");
    const userAge = ageInput.valueAsNumber;
    
    // ==== Output Pop-up & AGE VALIDATOR ====
    if (userAge >= 17){
        // ==== Container ====
        resultContainer.classList.add("result-container");
        
        // ==== Row Content ====
        nameRowContent.classList.add("row-atribute");
        ageRowContent.classList.add("row-atribute");
        
        result.textContent = `✅ ${userName}, ${userAge} yo, You're Eligible!`;
        result.classList.add("result-content");
        result.classList.add("result-content-valid");
        
    }else{
        // ==== Container ====
        resultContainer.classList.add("result-container");
        
        // ==== Row Content ====
        nameRowContent.classList.add("row-atribute");
        ageRowContent.classList.add("row-atribute");

        result.textContent = `❌ You're not Eligible!`
        result.classList.add("result-content");
        result.classList.add("result-content-invalid");
    }
});