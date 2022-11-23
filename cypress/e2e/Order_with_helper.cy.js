///<reference types="cypress"/>
import AcceptCookies from '../support/Pages/AcceptCookies';
import RegistrationPage from '../support/Pages/RegistrationPage'
import AutorizationPage from '../support/Pages/AutorizationPage'
import { faker } from '@faker-js/faker';
import OrderPage from '../support/Pages/OrderPage'
import {Search_Product} from '../support/Pages/Helper'

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


describe('Order with search helper', () => {
  it('`Success order with search helper', () => {
    RegistrationPage.Open_Registration_Page()
    AcceptCookies.Perform_Accept_Cookies()
    RegistrationPage.get_Email().type(user.email)
    RegistrationPage.get_Password().type(user.password)
    RegistrationPage.get_Repeat_Password().type(user.password)
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({ force: true })
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    RegistrationPage.get_Security_Question_Answer().type(user.security_question)
    RegistrationPage.get_Register_Button().click()
    RegistrationPage.get_Registration_completed_successfully()
    AutorizationPage.get_Email().type(user.email)
    AutorizationPage.get_Password().type(user.password)
    AutorizationPage.get_Login_Button().click()
    Search_Product('Strawberry Juice');
    OrderPage.get_Add_to_Basket_btn().click()
    OrderPage.get_Basket().click()
    cy.reload() // For some reasons Checkout Button is disabled, that why we reload the page!
    OrderPage.get_Checkout_btn().click()
    OrderPage.get_Add_New_Adress().click()
    OrderPage.get_Country_Adress_page().type(user.country)
    OrderPage.get_Name_Adress_page().type(user.full_name)
    OrderPage.get_Mobile_Adress_page().type(user.mobile_number)
    OrderPage.get_ZIP_Adress_page().type(user.zip)
    OrderPage.get_Adress_Adress_page().type(user.streetAddress)
    OrderPage.get_City_Adress_page().type(user.city)
    OrderPage.get_State_Adress_page().type(user.state)
    OrderPage.get_Submit_on_Adress_page().click({ force: true })
    OrderPage.get_Firs_Adress().click()
    OrderPage.get_Continue_btn_on_Adress_page().click({ force: true })
    OrderPage.get_Standard_Delivery().click()
    OrderPage.get_Continue_btn_on_Delivery_page().click({ force: true })
    OrderPage.get_Add_Credit_card().click()
    OrderPage.get_Credt_card_Name().eq(1).type(user.first_name)
    OrderPage.get_Credit_card_Number().type(user.credit_card_number)
    OrderPage.get_Credit_card_Month_Expiry().select('12')
    OrderPage.get_Credit_card_Year_Expiry().select('2080')
    OrderPage.get_Submit_Credit_card_Data().click()
    OrderPage.get_First_Credit_Cart().click()
    OrderPage.get_Continue_btn_on_Payment_page().click({ force: true })
    OrderPage.get_Continue_btn_on_Order_Summary_page().click();
    OrderPage.get_Confirmation__order_title()
      .should('contain', 'Thank you for your purchase!');

  })


})