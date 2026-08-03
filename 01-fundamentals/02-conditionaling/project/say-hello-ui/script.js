const form = document.getElementById("form-container");

form.addEventListener('submit', function(event){
    event.preventDefault();

    
    // get result id
    const resultContainer = document.getElementById("result");
    const result = document.getElementById("result-text");
    resultContainer.classList.remove("result-container"); // remove
    result.classList.remove("final-result"); // remove
    
    // --- Process
    const nameInput = document.getElementById("name-input");
    const userName = nameInput.value;


    // --- Set text & Style
    result.textContent = `Hello, ${userName}` // add text by input
    result.classList.add("final-result") // add style
    resultContainer.classList.add("result-container");
});