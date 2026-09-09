/* EXERCISE: Student Grade Management System
RULSES:
1. Add stusent
2. Inpute grade
3. Calculate statistic
4. Return clean Interface
*/


const classroom = {
    students: [],


    addStudent : (name) => {
        // Auto genetrate ID
        const newId = classroom.students.length + 1;
        let newStudents =  {
            id: newId,
            name: name,
            grades: []
        }

        classroom.students.push(newStudents)
    },

    addGrade : (studentId,grade) => {
        if (typeof grade !== 'number' || grade < 0 || grade > 100) {
            console.log("Grade must be number and range 0-100\n")
            return;
        }
        
        // === Find Student ====
        const student = classroom.students.find(s => s.id === studentId);

        // Push Grade
        if (student){
            student.grades.push(grade);
            console.log(`Success added grade: ${grade} in ${student.name}`);
            
        } else{
            console.log(`Not found or user by ID : ${studentId}`);
            
        }
    },

    // Get Average
    getAverage: (grades) => {
        // Sum All grade in the array
        const sum = grades.reduce((acc,val) => {
            return acc + val
        },0)

        return sum / grades.length;
    },


    // ==== Get Top Student ===
    getTopStudent: () => {
        let topStudent = null;
        let maxAvg  = 0;

        classroom.students.forEach(student => {
            const average = classroom.getAverage(student.grades)
            if(average > maxAvg){
                maxAvg = average;
                topStudent = student;
                
            }
        });

        if(!topStudent){
            console.log("The grade dosent ready");
            return null;
        }

        return {...topStudent,average:maxAvg};
    },

    // ==== FILTER BY AVERAGE ====
    filterByAverage: (minAvg) => {
        return classroom.students.filter(student => {
            if (student.grades.length === 0) return false;

            const average = classroom.getAverage(student.grades);
            return average >= minAvg;
        });
    }
}

// ------ ADD STUDENT ------
classroom.addStudent("Bob");
classroom.addStudent("Chloe");
classroom.addStudent("Andrew");
classroom.addStudent("Robby");

// ------- ADD GRADE -------
classroom.addGrade(1,false);
classroom.addGrade(1,77);
classroom.addGrade(1,33);
classroom.addGrade(1,88);

classroom.addGrade(2,88);
classroom.addGrade(2,88);
classroom.addGrade(2,88);

classroom.addGrade(3,90);
classroom.addGrade(3,90);
classroom.addGrade(3,90);


console.log(classroom.students);

// ========== AVERAGE STUDENT GRADE ===========
let averageStudentGrade = classroom.getTopStudent();
console.log(averageStudentGrade);

// ========== FILTER AVERAGE STUDENT GRADE ===========
let filterByAverage = classroom.filterByAverage(80);
console.log(filterByAverage);

// ======= OUTPUT ========
/* Grade must be number and range 0-100

Success added grade: 77 in Bob
Success added grade: 33 in Bob
Success added grade: 88 in Bob
Success added grade: 88 in Chloe
Success added grade: 88 in Chloe
Success added grade: 88 in Chloe
Success added grade: 90 in Andrew
Success added grade: 90 in Andrew
Success added grade: 90 in Andrew
[
  { id: 1, name: 'Bob', grades: [ 77, 33, 88 ] },
  { id: 2, name: 'Chloe', grades: [ 88, 88, 88 ] },
  { id: 3, name: 'Andrew', grades: [ 90, 90, 90 ] },
  { id: 4, name: 'Robby', grades: [] }
]
{ id: 3, name: 'Andrew', grades: [ 90, 90, 90 ], average: 90 }
[
  { id: 2, name: 'Chloe', grades: [ 88, 88, 88 ] },
  { id: 3, name: 'Andrew', grades: [ 90, 90, 90 ] }
] */