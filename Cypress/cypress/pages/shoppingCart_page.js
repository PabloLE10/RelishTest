export class ShoppongCartPage {

    //Element locators of Shopping Cart Page
    shoppingCart_product = '.inventory_item_name'
    shoppingCart_amount = '.inventory_item_price'
    shoppingCart_remove = 'Remove'

    //Methods to interact with the Shopping Cart Page
    validateProductName(product) {
        cy.get(this.shoppingCart_product).should('contain', product)
    }
    validateShoppingCartAmount(amount) {
        cy.get(this.shoppingCart_amount).should('contain', amount)
    } 
    removeProduct() {
        cy.contains(this.shoppingCart_remove).click()
    } 
} 