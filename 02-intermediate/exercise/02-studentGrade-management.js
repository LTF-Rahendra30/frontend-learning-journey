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
    }
}
classroom.addStudent("Bob");
classroom.addStudent("Chloe");
console.log(classroom.students);


