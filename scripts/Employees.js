import { getEmployees, getOrders } from "./database.js"
const employees = getEmployees()
const orders = getOrders()


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


/*  adding event listener: click on an employee
    and see the number of products he/she has sold
    displayed in Alert window
        1. getEmployees: iterate through each employee
            2.  getOrders: iterate through each order
                3. conditional to check if order employee id
                equals current employee id.
                if true, count the number of orders
*/

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeesId] = itemClicked.id.split("--")
            for (const employee of employees) {
                let matches = 0
                if (employee.id === parseInt(employeesId)) {                     
                            for (const order of orders) {                            
                                if (order.employeeId === employee.id) {
                                    matches = matches + 1           
                                }
                            }  
                            window.alert(`${employee.name} sold ${matches} products`)                     
                }
            }           
        }
    }
)
