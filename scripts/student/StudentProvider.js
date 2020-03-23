/*
    Responsible for managing all of the cohort's data
*/

// a copy of our cohort data
let students = []
// the eventHub in which all events are heard
const eventHub = document.querySelector(".container")
/*
    Sends a message out to the application via eventHub that the state of the notes was changed
*/
const dispatchStateChanged = () => {
    const apiStateChange = new CustomEvent("studentsStateChange")
    eventHub.dispatchEvent(apiStateChange)
}
// the function that makes copy of our cohort data
export const useStudents = () => students.slice()
// gonna need a method that fetches (GETs) students
export const getStudents = () => {
    return fetch("http://localhost:8088/students")
        .then(response => response.json())
        .then(parsedData => {
            students = parsedData
        })
}
// gonna need a method that creates (POSTs) students
export const SaveStudents = (studentObject) => {
    return fetch("http://localhost:8088/students", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentObject)
    })
    .then(getStudents)
    .then(dispatchStateChanged)

} 