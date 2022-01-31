import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

/*  adding event listener: click on a product
    and get it's price displayed in Alert window
        1. need to import getProducts from database.js
        2. need to invoke the getProducts fn
            a. both steps already done above, so "products" is
             available as the var holding the return from getProducts
*/

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productsId] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt(productsId)) {     
                        
                    window.alert(`${product.name} costs $${product.price}`)     
                }
            }
        }
    }
)
