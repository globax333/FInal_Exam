///<reference types="cypress"/>
import AcceptCookies from '../support/Pages/AcceptCookies';
import RegistrationPage from '../support/Pages/RegistrationPage'
import AutorizationPage from '../support/Pages/AutorizationPage'
import { faker } from '@faker-js/faker';
import OrderPage from '../support/Pages/OrderPage'

let user = {
  email: faker.internet.email(12),
  password: faker.internet.password(15),
  security_question: faker.word.noun(10),
  country: faker.address.country(),
  full_name: faker.name.fullName(),
  mobile_number: faker.random.numeric(10),
  zip: faker.random.numeric(8),
  streetAddress: faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  first_name: faker.name.firstName(),
  credit_card_number: faker.random.numeric(16),
}



describe('Check order flow', () => {

  it('Order with new user', () => {

    RegistrationPage.Open_Registration_Page()
    AcceptCookies.Perform_Accept_Cookies()
    cy.log(`Type random generated **Email**`)
    RegistrationPage.get_Email().type(user.email)
    cy.log(`Type random generated **Password**`)
    RegistrationPage.get_Password().type(user.password)
    cy.log(`Repeat random generated **Password**`)
    RegistrationPage.get_Repeat_Password().type(user.password)
    cy.log(`Click on radio button **Show password advice**`)
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({ force: true })
    cy.log(`Set **Your favorite book** in Security question field `)
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    cy.log(`Type random generated Security questin answer`)
    RegistrationPage.get_Security_Question_Answer().type(user.security_question)
    cy.log(`Click on **Register** button`)
    RegistrationPage.get_Register_Button().click()
    cy.log(`Check if pop up with text **Registration completed successfully. You can now log in** appear `)
    RegistrationPage.get_Registration_completed_successfully()
    cy.log(`Set **Email** `)
    AutorizationPage.get_Email().type(user.email)
    cy.log(`Set **Password** `)
    AutorizationPage.get_Password().type(user.password)
    cy.log(`Click on **Log in** button`)
    AutorizationPage.get_Login_Button().click()
    cy.log(`Find **Apple Pomace** and click on  **Add to Basket** button `)
    OrderPage.get_Add_to_Basket_btn().eq(1).click()
    cy.log(`Click on **Basket** icon`)
    OrderPage.get_Basket().click()
    cy.reload() // For some reasons Checkout Button is disabled, that why we reload the page!
    cy.log(`Click on **Checkout** button`)
    OrderPage.get_Checkout_btn().click()
    cy.log(`Click on **Add New Address** button`)
    OrderPage.get_Add_New_Adress().click()
    cy.log(`Set random generated **Country**`)
    OrderPage.get_Country_Adress_page().type(user.country)
    cy.log(`Set random generated **Full name**`)
    OrderPage.get_Name_Adress_page().type(user.full_name)
    cy.log(`Set random generated **Mobile number** with 10 digits`)
    OrderPage.get_Mobile_Adress_page().type(user.mobile_number)
    cy.log(`Set random generated **Zip code** with 8 digits`)
    OrderPage.get_ZIP_Adress_page().type(user.zip)
    cy.log(`Set random generated **Adress steet**`)
    OrderPage.get_Adress_Adress_page().type(user.streetAddress)
    cy.log(`Set random generated **City**`)
    OrderPage.get_City_Adress_page().type(user.city)
    cy.log(`Set random generated **State**`)
    OrderPage.get_State_Adress_page().type(user.state)
    cy.log(`Click on **Submit** button`)
    OrderPage.get_Submit_on_Adress_page().click({ force: true })
    cy.log(`Select first **Adress**`)
    OrderPage.get_Firs_Adress().click()
    cy.log(`Click on **Continue** button`)
    OrderPage.get_Continue_btn_on_Adress_page().click({ force: true })
    cy.log(`Select **Standard Delivery**`)
    OrderPage.get_Standard_Delivery().click()
    cy.log(`Click on **Continue** button`)
    OrderPage.get_Continue_btn_on_Delivery_page().click({ force: true })
    cy.log(`Click on **Add new card** button`)
    OrderPage.get_Add_Credit_card().click()
    cy.log(`Set random generated  **Card name**`)
    OrderPage.get_Credt_card_Name().eq(1).type(user.first_name)
    cy.log(`Set random generated  **Card number** with 16 digits`)
    OrderPage.get_Credit_card_Number().type(user.credit_card_number)
    cy.log(`Set **Month Expiry date** to **12**`)
    OrderPage.get_Credit_card_Month_Expiry().select('12')
    cy.log(`Set **Year Expiry date** to **2080**`)
    OrderPage.get_Credit_card_Year_Expiry().select('2080')
    cy.log(`Click on  **Submit** button`)
    OrderPage.get_Submit_Credit_card_Data().click()
    cy.log(`Select **Firs Credit card**`)
    OrderPage.get_First_Credit_Cart().click()
    cy.log(`Click on  **Submit** button`)
    OrderPage.get_Continue_btn_on_Payment_page().click({ force: true })
    cy.log(`Click on **Continue** button`)
    OrderPage.get_Continue_btn_on_Order_Summary_page().click();
    cy.log(`Click on **Place your order and pay** button`)
    cy.log(`Check if title **Thank you for your purchase!** is shown`)
    OrderPage.get_Confirmation__order_title()
      .should('contain', 'Thank you for your purchase!');

  })

})