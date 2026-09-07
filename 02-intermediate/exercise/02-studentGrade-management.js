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
        if (typeof grade !== 'number' || grade < 0 || grade > 100){
            return "Grade must be number and range 0-100";
        }
        // Found student
        const student = classroom.students.find(s => s.id === studentId);

        // Push Grade
        if (student){
            student.grades.push(grade);
            console.log(`Success added grade: ${grade} in ${student.name}`);
            
        } else{
            console.log(`Not found or user by ID : ${studentId}`);
            
        }
    }
}
classroom.addStudent("Bob");
classroom.addStudent("Chloe");
classroom.addGrade(1,33);
classroom.addGrade(1,33);
console.log(classroom.students);



