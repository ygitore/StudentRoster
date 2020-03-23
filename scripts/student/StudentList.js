import { Student } from "./Student.js";
import { useStudents } from "./StudentProvider.js";
import { useCohorts } from "../cohort /cohortProvider.js";
const contentTarget = document.querySelector(".student-container")
const eventHub = document.querySelector(".container")
eventHub.addEventListener("studentsStateChange", e=>{
    render()
})
const render = () => {
    const students = useStudents()
    const cohorts = useCohorts()
    for(const singleStudent of students) 
    {
        const cohortObject = cohorts.find(cohort=>cohort.id === singleStudent.cohortId)
        contentTarget.innerHTML += Student(singleStudent, cohortObject)
    }
}
export const StudentList = () => {
    render()
}
