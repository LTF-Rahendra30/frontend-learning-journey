const form = document.getElementById("form-container");
const closeButton = document.getElementById("x-button");

// ==== GET RESULT ====
const resultContainer = document.getElementById("result-container");
const result = document.getElementById("result-text");

// ----- ROW CONTENT -----
const nameRowContent = document.getElementById("name-row");
const ageRowContent = document.getElementById("age-row");

// ----- Row Value ----
const nameValue = document.getElementById("name-value");
const ageValue = document.getElementById("age-value");

const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
// ================ Process ====================

form.addEventListener('submit',(event) => {
    event.preventDefault();
    // --- Username ---
    const userName = nameInput.value;
    // --- Age ---
    const userAge = ageInput.valueAsNumber;
     
    // ========== REMOVE ========
    result.classList.remove("result-content-valid");
    result.classList.remove("result-content-invalid");
    resultContainer.classList.remove("result-container");

    // -- Remove Content Row ---
    nameRowContent.classList.remove("name-row");
    ageRowContent.classList.remove("age-row");

    // ==== Output Pop-up & AGE VALIDATOR ====
    if (userAge >= 17){
        // ==== Row Content ====
        nameRowContent.classList.add("row-atribute");
        ageRowContent.classList.add("row-atribute");
        
        // --- Row Information Content ---
        nameValue.textContent = `Name: ${userName}`;
        ageValue.textContent = `Age: ${userAge}`;
        
        result.textContent = `✅ ${userName}, ${userAge} yo, You're Eligible!`;
        result.classList.add("result-content");
        result.classList.add("result-content-valid");
        
        // ==== Container ====
        document.body.classList.add("popup-active");
        resultContainer.classList.add("result-container");
        
    }else{
        
        // ==== Row Content ====
        nameRowContent.classList.add("row-atribute");
        ageRowContent.classList.add("row-atribute");
        
        // --- Row Information Content ---
        nameValue.textContent = `Name: ${userName}`;
        ageValue.textContent = `Age: ${userAge}`;
        
        result.textContent = `❌ You're not Eligible!`
        result.classList.add("result-content");
        result.classList.add("result-content-invalid");
        
        // ==== Container ====
        document.body.classList.add("popup-active");
        resultContainer.classList.add("result-container");
    }
    
});


closeButton.addEventListener('click',() => {
    resultContainer.style.display = "none";
    document.body.classList.remove("popup-active");
});