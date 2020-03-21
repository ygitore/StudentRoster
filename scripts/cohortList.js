import { useCohorts, getCohorts } from "./cohortProvider.js"
import { Cohort } from "./cohort.js"

const contentTarget = document.querySelector(".cohortcontainer")
const show = document.querySelector(".show-cohorts")
show.addEventListener("click", e=> {
    render()
})
const render = () => {
    getCohorts().then(() => {
        const allCohorts = useCohorts()
        contentTarget.innerHTML = allCohorts.map(cohort => {
            return Cohort(cohort)
        }).join("")
    })
}
