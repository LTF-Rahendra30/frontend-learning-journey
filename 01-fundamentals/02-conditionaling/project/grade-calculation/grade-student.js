// ============ INPUT GRADE FROM USER =======

let gradeValue = prompt("Enter your GPA: ");
// Checking
let validInput = gradeValue && !isNaN(gradeValue);

if (!validInput){
    alert("Enter something!");
} else{
    // Convert 
    gradeValue = Number(gradeValue);
    if (gradeValue >= 90){
        alert("Your Valid");
    } else if (gradeValue < 90 && gradeValue >= 20){
        alert("Great");
    } else if (gradeValue >=0){
        alert("Remedial");
    }
}
