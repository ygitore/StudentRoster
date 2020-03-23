/*
    Responsible for creating the HTML for the form, and creating (POSTing) a new cohort
*/

import { SaveCohorts } from "./cohortProvider.js"

const contentTarget = document.querySelector(".cohort-form-container")
const eventHub = document.querySelector(".container")
eventHub.addEventListener("show-Form-Button-clicked", e=>{
    cohortFormHtml()
})
contentTarget.addEventListener("click", e=>{
    if(e.target.id === "save-cohort"){
        const cohortName = {
            name:document.querySelector(".form-input").value
        }

        SaveCohorts(cohortName)
    }
})
export const cohortFormHtml = () => {
    contentTarget.innerHTML = `<div>
        <input type = "text" class ="form-input">
        <button id ="save-cohort">Save</button>
    </div>`
}
