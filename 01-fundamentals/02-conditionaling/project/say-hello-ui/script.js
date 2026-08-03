const form = document.getElementById("form-container");

form.addEventListener('submit', function(event){
    event.preventDefault();

    
    // get result id
    const result = document.getElementById("result");
    result.classList.remove("final-result"); // remove
    
    // --- Process
    const nameInput = document.getElementById("name-input");
    const userName = nameInput.value;


    // --- Set text & Style
    result.textContent = `Hello, ${userName}` // add text by input
    result.classList.add("final-result"); // add style
});