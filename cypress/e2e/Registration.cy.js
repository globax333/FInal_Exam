///<reference types="cypress"/>
import AcceptCookies from '../support/Pages/AcceptCookies';
import RegistrationPage from '../support/Pages/RegistrationPage'
import { faker } from '@faker-js/faker';

let user = {
  email: faker.internet.email(12),
  password: faker.internet.password(15),
  security_question: faker.word.noun(10)
}




describe('Registration TC', () => {
  it('Success Registration user: test54@mailinator.com', () => {

    RegistrationPage.Open_Registration_Page()
    AcceptCookies.Perform_Accept_Cookies()
    RegistrationPage.get_Email().type('test54@mailinator.com')
    RegistrationPage.get_Password().type('Globax123')
    RegistrationPage.get_Repeat_Password().type('Globax123')
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({force: true})
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    RegistrationPage.get_Security_Question_Answer().type(user.security_question)
    RegistrationPage.get_Register_Button().click()
    RegistrationPage.get_Registration_completed_successfully()
  })

  it.skip('Success Registration with a random user data', () => {

    RegistrationPage.Open_Registration_Page()
    AcceptCookies.Perform_Accept_Cookies()
    RegistrationPage.get_Email().type(user.email)
    RegistrationPage.get_Password().type(user.password)
    RegistrationPage.get_Repeat_Password().type(user.password)
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({force: true})
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    RegistrationPage.get_Security_Question_Answer().type(user.security_question)
    RegistrationPage.get_Register_Button().click()
    RegistrationPage.get_Registration_completed_successfully()
  })

  let user2 = {
    fake_email: faker.word.noun(10),
    fake_password: faker.internet.password(4),
    security_question: faker.word.noun(10)
  }

  it.skip('Error validation check', () => {

    RegistrationPage.Open_Registration_Page()
    AcceptCookies.Perform_Accept_Cookies()
    RegistrationPage.get_Email().type(user2.fake_email).clear()
    RegistrationPage.get_Password().type(user2.fake_password)
    RegistrationPage.get_Repeat_Password().type(user2.fake_password).clear().clear().type(user.password)
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    RegistrationPage.get_Security_Question_Answer().type(user2.security_question).clear()
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({force: true})

    RegistrationPage.get_Please_provide_an_email_address()
    .should('contain', 'Please provide an email address.');
    RegistrationPage.get_Password_must_be_XX_characters_long()
    .should('contain', 'Password must be 5-40 characters long. ')
    RegistrationPage.get_Passwords_do_not_match()
    .should('contain', ' Passwords do not match ')
    RegistrationPage.get_This_cannot_be_changed_later()
    .should('contain', 'This cannot be changed later!')
    RegistrationPage.get_Please_provide_an_answer_to_your_security_question()
    .should('contain', ' Please provide an answer to your security question. ')

  })





})