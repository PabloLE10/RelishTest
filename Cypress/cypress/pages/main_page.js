export class MainPage {

    //Element locators of Main Page
    mainPage_header = '.app_logo'
    mainPage_menu = '#react-burger-menu-btn'
    mainPage_menu_logout = '#logout_sidebar_link'

    //Methods to interact with the Main Page
    validateHeader() {
        cy.get(this.mainPage_header).should('contain', 'Swag Labs').should('be.visible')
    }
    clickProduct(product) {
        cy.contains(product).click()
    }
    clickMenu() {
        cy.get(this.mainPage_menu).click()
    }
    clickLogout() {
        cy.get(this.mainPage_menu_logout).click()
    }
} 