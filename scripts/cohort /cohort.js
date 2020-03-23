/*
    Responsible for respresenting an individual cohort object as HTML
*/
export const Cohort = cohortObject => {
    return `<div>${cohortObject.name}</div>`
}