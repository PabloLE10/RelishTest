/// <reference types="cypress" />
import { LoginPage } from "../pages/login_page"
import { MainPage } from "../pages/main_page"
import { ProductPage } from "../pages/product_page"
import { ShoppongCartPage } from "../pages/shoppingCart_page"

const loginPage = new LoginPage()
const mainPage = new MainPage()
const productPage = new ProductPage()
const shoppingCartPage = new ShoppongCartPage()

describe('Relish Technical Tests - Saucedemo automation', () => {
  it('Cart Price', () => {
    cy.fixture("testData").then((data) => {
      cy.visit('https://www.saucedemo.com/')
      data.forEach((userdata) => {
        if(userdata.password == "secret_sauce"){
          loginPage.enterUsername(userdata.username)
          loginPage.enterPassword(userdata.password)
          loginPage.clickLogin()
          mainPage.validateHeader()
          mainPage.clickProduct(userdata.product)
          productPage.clickAddToCart()
          productPage.clickShoppingCart()
          shoppingCartPage.validateProductName(userdata.product)
          shoppingCartPage.validateShoppingCartAmount(userdata.price)
          shoppingCartPage.removeProduct()
          mainPage.clickMenu()
          mainPage.clickLogout()
        }else{
          loginPage.enterUsername(userdata.username)
          loginPage.enterPassword(userdata.password)
          loginPage.clickLogin()
          loginPage.validateFailedLogin()
        }
      })
    })
  })
})