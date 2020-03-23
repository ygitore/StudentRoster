export const Student = (studentObject, cohortObject) => {
    return `<div>
        <div>${studentObject.name}</div>
        <div>${cohortObject.name}</div>
    </div>`
}