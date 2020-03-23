/*
    Responsible for getting all of the cohorts and putting each one on the DOM 👍 
*/
import { useCohorts, getCohorts } from "./cohortProvider.js"
import { Cohort } from "./cohort.js"

const contentTarget = document.querySelector(".cohortcontainer")
const eventHub = document.querySelector(".container")
// add an event listener on the eventHub that listens for the cohortStateChanged custom event
eventHub.addEventListener("apiStateChanged", () =>{
    render()
})


// the function that renders the cohort list (and does all the things for cohort list)
const render = () => {
    getCohorts().then(() => {
        const allCohorts = useCohorts()
        // iterate through all of the cohorts and put each one on the DOM
        contentTarget.innerHTML = allCohorts.map(cohort => {
            return Cohort(cohort)
        }).join("")
    })
}
export const CohortList = () => {
    render()
}