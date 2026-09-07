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

    addGrade : (studenId,grade) => {
        if (typeof grade !== 'number' || grade < 0 || grade > 100){
            return "Grade must be number and range 0-100";
        }
        // Found student
        const student = classroom.students.find(s => s.id === studenId);

        // Push Grade
        if (student){
            student.grades.push(grade);
        }
    }
}
classroom.addStudent("Bob");
classroom.addStudent("Chloe");
classroom.addGrade("Bob",33);
console.log(classroom.students);



