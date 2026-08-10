const students = [
  { name: "Adi", score: 85 },
  { name: "Budi", score: 72 },
  { name: "Citra", score: 90 },
  { name: "Dina", score: 65 }
];


function findStudentGrade(name){
    for (let i =0; i < students.length; i++){

        // Find Student
        if(students[i].name.toLocaleLowerCase() === name.toLocaleLowerCase()){
            // Find Score
            const score = students[i].score;
            if(score>=85) return "A";
            else if(score >= 70) return "B";
            else if(score >= 60) return "C";
            else return "Remedial";
        }
    }

    return "Not Found";
}

const a = findStudentGrade("Citra");  // Output: "A"
const b = findStudentGrade("Budi");   // Output: "B"
const c = findStudentGrade("Dina");   // Output: "C"
const d = findStudentGrade("Eka");    // Output: "Not found"
console.log(a);
console.log(b);
console.log(c);
console.log(d);
