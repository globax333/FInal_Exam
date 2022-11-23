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
    cy.log(`Type email: test54@mailinator.com`)
    RegistrationPage.get_Email().type('test54@mailinator.com')
    cy.log(`Type password: Globax123 `)
    RegistrationPage.get_Password().type('Globax123')
    cy.log(`Repeat password: Globax123`)
    RegistrationPage.get_Repeat_Password().type('Globax123')
    cy.log(`Click on radio button **Show password advice**`)
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({ force: true })
    cy.log(`Set **Your favorite book** in Sequrity question field `)
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    cy.log(`Type random generated sequrity questin answer`)
    RegistrationPage.get_Security_Question_Answer().type(user.security_question)
    cy.log(`Click on **Register** button`)
    RegistrationPage.get_Register_Button().click()
    cy.log(`Check if pop up with text **Registration completed successfully. You can now log in** appear `)
    RegistrationPage.get_Registration_completed_successfully()
  })

  it('Success Registration with a random user data', () => {

    RegistrationPage.Open_Registration_Page()
    AcceptCookies.Perform_Accept_Cookies()
    cy.log(`Type random generated email`)
    RegistrationPage.get_Email().type(user.email)
    cy.log(`Type random generated password`)
    RegistrationPage.get_Password().type(user.password)
    cy.log(`Repeat random generated password`)
    RegistrationPage.get_Repeat_Password().type(user.password)
    cy.log(`Click on radio button **Show password advice**`)
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({ force: true })
    cy.log(`Set **Your favorite book** in Sequrity question field `)
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    cy.log(`Type random generated sequrity questin answer`)
    RegistrationPage.get_Security_Question_Answer().type(user.security_question)
    cy.log(`Click on **Register** button`)
    RegistrationPage.get_Register_Button().click()
    cy.log(`Check if pop up with text **Registration completed successfully. You can now log in** appear `)
    RegistrationPage.get_Registration_completed_successfully()
  })

  let user2 = {
    fake_email: faker.word.noun(10),
    fake_password: faker.internet.password(4),
    security_question: faker.word.noun(10)
  }

  it('Error validation check', () => {

    RegistrationPage.Open_Registration_Page()
    AcceptCookies.Perform_Accept_Cookies()
    RegistrationPage.get_Email().type(user2.fake_email).clear()
    RegistrationPage.get_Password().type(user2.fake_password)
    RegistrationPage.get_Repeat_Password().type(user2.fake_password).clear().clear().type(user.password)
    RegistrationPage.Select_Favorite_Book_in_Security_Question_Dropdown()
    RegistrationPage.get_Security_Question_Answer().type(user2.security_question).clear()
    RegistrationPage.get_Show_Password_advice_radio_switcher().click({ force: true })
    cy.log(`Check assertions:`)
    cy.log(`Check if **Email adress** field is empty an error message is show`)
    RegistrationPage.get_Please_provide_an_email_address()
      .should('contain', 'Please provide an email address.');
    cy.log(`Check if **Password** field  is than 4 charecters an error message is show`)
    RegistrationPage.get_Password_must_be_XX_characters_long()
      .should('contain', 'Password must be 5-40 characters long. ')
    cy.log(`Check if **Repeat password** field is not match **Password** field an error message is show`)
    RegistrationPage.get_Passwords_do_not_match()
      .should('contain', ' Passwords do not match ')
    cy.log(`Check if **Security question** field is selected`)
    RegistrationPage.get_This_cannot_be_changed_later()
      .should('contain', 'This cannot be changed later!')
    cy.log(`Check if **Security question answer** field  is empty an error message is show`)
    RegistrationPage.get_Please_provide_an_answer_to_your_security_question()
      .should('contain', ' Please provide an answer to your security question. ')

  })





})