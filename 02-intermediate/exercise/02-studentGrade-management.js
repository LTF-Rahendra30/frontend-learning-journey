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
            const average = this.getAverage(student.grades)
            if(average > maxAvg){
                maxAvg = average;
                topStudent = student;
            }
        });

        return {...topStudent,average:maxAvg};
    }
}
classroom.addStudent("Bob");
classroom.addStudent("Chloe");
classroom.addGrade(1,false);
classroom.addGrade(1,77);
classroom.addGrade(1,33);
console.log(classroom.students);

let sumGradeArray = [100,100,100];
console.log(classroom.getAverage(sumGradeArray));




