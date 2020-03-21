/*
    Responsible for managing all of the cohort's data
*/

// a copy of our cohort data
let cohorts = []
// the eventHub in which all events are heard
const eventHub = document.querySelector(".container")
/*
    Sends a message out to the application via eventHub that the state of the notes was changed
*/
const dispatchStateChanged = () => {
    const apiStateChange = new CustomEvent("apiStateChanged")
    eventHub.dispatchEvent(apiStateChange)
}
// the function that makes copy of our cohort data
export const useCohorts = () => cohorts.slice()
// gonna need a method that fetches (GETs) cohorts
export const getCohorts = () => {
    return fetch("http://localhost:8088/cohorts")
        .then(response => response.json())
        .then(parsedData => {
            cohorts = parsedData
        })
}
// gonna need a method that creates (POSTs) cohorts
export const SaveCohorts = (cohortObject) => {
    return fetch("http://localhost:8088/cohorts", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cohortObject)
    })
    .then(getCohorts)
    .then(dispatchStateChanged)

} 