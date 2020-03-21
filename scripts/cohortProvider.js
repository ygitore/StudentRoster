const eventHub = document.querySelector(".container")
let cohorts = []
const dispatchStateChanged = () => {
    const apiStateChange = new CustomEvent("apiStateChanged")
    eventHub.dispatchEvent(apiStateChange)
}

export const useCohorts = () => cohorts.slice()

export const getCohorts = () => {
    return fetch("http://localhost:8088/cohorts")
        .then(response => response.json())
        .then(parsedData => {
            cohorts = parsedData
        })
}

export const SaveCohorts = (cohortObject) => {
    return fetch("http://localhost:8088/cohorts", {
        Method : "POST",
        Headers : {
            "Content-Type": "application/json"
        },
        body :JSON.stringify(cohortObject)
    })
    .then(getCohorts)
    .then(dispatchStateChanged)

} 