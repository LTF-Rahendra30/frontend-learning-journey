// ============ INPUT GRADE FROM USER =======

let gradeValue = prompt("Enter your GPA: ");
gradeValue = gradeValue ?? "";

if (gradeValue >= 90){
    alert("Your Valid");
} else if (gradeValue < 90 && gradeValue > 20){
    alert("Great");
}else if(gradeValue <= 20 && gradeValue >= 0){
    alert("Remedial!");
}else {
    alert("Enter something!");
}