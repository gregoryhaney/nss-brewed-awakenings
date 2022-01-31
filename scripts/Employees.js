import { getEmployees } from "./database.js"
const employees = getEmployees()


// fn to list employees for display on
// the index.html page

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}
