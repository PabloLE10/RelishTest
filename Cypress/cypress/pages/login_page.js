export class LoginPage {

    //Element locators of Login Page
    loginPage_username_id = '#user-name'
    loginPage_password_id = '#password'
    loginPage_loginButton_id = '#login-button'
    loginPage_loginFailed_button = '.error-button'

    //Methods to interact with the Login Page
    openUrl(url) {
        cy.visit(url)
    }
    enterUsername(username) {
        cy.get(this.loginPage_username_id).clear().type(username) 
    }
    enterPassword(password) {
        cy.get(this.loginPage_password_id).clear().type(password)   
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton_id).click()
    }
    validateFailedLogin(){
        cy.get(this.loginPage_loginFailed_button).should('be.visible')
    }
} 