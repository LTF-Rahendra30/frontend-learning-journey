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
        for(let idSDU = 0; idSDU < students.length; idSDU++){
            idSDU += 1;
        }

        let newStudents =  {
            id: idSDU,
            name: name,
            grade: []
        }

        classroom.students.push(newStudents)
    }
}
classroom.addStudent("Bob");
console.log(classroom.students);


