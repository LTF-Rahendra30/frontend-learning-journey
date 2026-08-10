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