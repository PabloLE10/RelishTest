export class ProductPage {

    //Element locators of Product Page
    productPage_addToCart_button_text = 'Add to cart'
    productPage_shoppingCart_button = '.shopping_cart_link'


    //Methods to interact with the Product Page
    clickAddToCart() {
        cy.contains(this.productPage_addToCart_button_text).click()
    }
    clickShoppingCart() {
        cy.get(this.productPage_shoppingCart_button).click()
    }
} 