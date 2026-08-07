// ============ INPUT GRADE FROM USER =======

let gradeValue = prompt("Enter your GPA: ");
// Checking
let validInput = gradeValue && !isNaN(gradeValue);
gradeValue = gradeValue ?? 0;
let bagde;
let grade;

if (!validInput){
    alert("Enter something!");
} else{
    // Convert 
    gradeValue = Number(gradeValue);
    if (gradeValue >= 90){
        bagde = "Top Performer";
        grade = "A";
        alert(`Grade: ${grade}, Bagde: ${bagde}`);
    } else if (gradeValue < 90 && gradeValue >= 80){
        grade = "B";
        alert(`Grade: ${grade}`);
    } else if (gradeValue < 80 && gradeValue >=70){
        grade = "C";
        alert(`Grade: ${grade}`)
    }else if (gradeValue < 70){
        alert("Remedial")
    }
}
