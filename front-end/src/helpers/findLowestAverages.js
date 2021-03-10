//should take in an array of student objects as a parameter and return the student with the lowest score average for each grade
const findLowestAverages = (array) => {

    let holder = []

    const studentAverage = (student)=>{
        let scoreTotal = 0;
        for(let i=0;i<student.scores.length; i++){
          scoreTotal += student.scores[i]["value"]
        }
        return scoreTotal/(student.scores.length)
      }

    const getStudentAverages = (array)=>{
        let averages = array.map((student) => {
          student["average"] = studentAverage(student);
          return student;
        });
        return averages;
     }

    let sortedStudents = getStudentAverages(array.sort((x,y) => x.grade - y.grade))
    let target = sortedStudents[0]
    for(let i=1; i<sortedStudents.length; i++){
        if (sortedStudents[i]["grade"] > target["grade"] || i === sortedStudents.length-1){
            holder.push(target)
            target = sortedStudents[i]
        }
        else if (sortedStudents[i]["average"] < target["average"]) {
            target = sortedStudents[i]
        }
    }
    let solutionArray = holder.map((student) => {
        return {
            grade: student.grade,
            name: student.name,
            average: student.average
        }
    })
    return solutionArray;
}
export default findLowestAverages;