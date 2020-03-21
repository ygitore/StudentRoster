import { cohortFormHtml } from "./cohort-form.js"

const contentTarget = document.querySelector(".show-button")
const eventHub = document.querySelector(".container")
contentTarget.addEventListener("click", e=>{
    if(e.target.id === "Show-Form"){
        const customeEventChange = new CustomEvent("show-Form-Button-clicked")
        eventHub.dispatchEvent(customeEventChange)
    }
})
export const DisplayButton = () => {
    contentTarget.innerHTML = `<button class = "invisible"id="Show-Form">Show Form</button>`
}