
//should take in an array of student objects as a paramter, and return these records grouped by the grade field on these records
const groupByGrade = (array) => {
let holder = [];

//reduce data to grade and name
let newArr = array.map((student) => {
    return {
        grade: student.grade,
        name: student.name
    }
})

//seperate reduced data by grade
for (let student in newArr) {
    var studentGrade = newArr[student].grade;

    if(!holder[studentGrade]) {
        holder[studentGrade] = [];
        for (let i in newArr) {      
            if (studentGrade === newArr[i].grade) {
                holder[studentGrade].push(newArr[i]);
            }
        }
    }
}
return(holder)
}

export default groupByGrade;