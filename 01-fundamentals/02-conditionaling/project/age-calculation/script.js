const form = document.getElementById("form-container");

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    // ==== GET RESULT ====
    const closeButton = document.getElementById("x-button");
    const resultContainer = document.getElementById("result-container");
    const result = document.getElementById("result-text");

    // ----- ROW CONTENT -----
    const nameRowContent = document.getElementById("name-row");
    const ageRowContent = document.getElementById("age-row");

     
    // ========== REMOVE ========
    result.classList.remove("result-content-valid");
    result.classList.remove("result-content-invalid");
    resultContainer.classList.remove("result-container");

    // -- Remove Content Row ---
    nameRowContent.classList.remove("name-row");
    ageRowContent.classList.remove("age-row");

    // --- remove Close Button ---

    // ==== Process ====
    // --- Username ---
    const nameInput = document.getElementById("name-input");
    const userName = nameInput.value;

    // --- Age ---
    const ageInput = document.getElementById("age-input");
    const userAge = ageInput.valueAsNumber;

    // ----- Row Value ----
    const nameValue = document.getElementById("name-value");
    const ageValue = document.getElementById("age-value");
    

    // ==== Output Pop-up & AGE VALIDATOR ====
    if (userAge >= 17){
        // ==== Container ====
        resultContainer.classList.add("result-container");
        
        // ==== Row Content ====
        nameRowContent.classList.add("row-atribute");
        ageRowContent.classList.add("row-atribute");

        // --- Row Information Content ---
        nameValue.textContent = `Name: ${userName}`;
        ageValue.textContent = `Age: ${userAge}`;

        result.textContent = `✅ ${userName}, ${userAge} yo, You're Eligible!`;
        result.classList.add("result-content");
        result.classList.add("result-content-valid");
        
    }else{
        // ==== Container ====
        resultContainer.classList.add("result-container");
        
        // ==== Row Content ====
        nameRowContent.classList.add("row-atribute");
        ageRowContent.classList.add("row-atribute");

        // --- Row Information Content ---
        nameValue.textContent = `Name: ${userName}`;
        ageValue.textContent = `Age: ${userAge}`;

        result.textContent = `❌ You're not Eligible!`
        result.classList.add("result-content");
        result.classList.add("result-content-invalid");
    }

    closeButton.addEventListener('click',function(){
        
        // result.classList.remove("result-content-valid");
        // result.classList.remove("result-content-invalid");
        resultContainer.style.display = "none";
        closeButton.style.display  = "none"

    });
});