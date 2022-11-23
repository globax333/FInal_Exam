///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import AcceptCookies from '../support/Pages/AcceptCookies';
import AutorizationPage from '../support/Pages/AutorizationPage'
import user from '../fixtures/user.json'


describe('Autorization  TC', () => {
  it(`Success Autorization with user: ${user.email} / ${user.password} `, () => {
    AutorizationPage.Open_Autorization_Page()
    AcceptCookies.Perform_Accept_Cookies()
    AutorizationPage.SubmitLoginForm();
  })


  it('Invalid credentials authorization', () => {
    AutorizationPage.Open_Autorization_Page()
    AcceptCookies.Perform_Accept_Cookies()
    cy.log(`Type non-existent email`)
    cy.get('#email').type(fake_user.fake_email)
    cy.log(`Type non-existent password`)
    cy.get('#password').type(fake_user.fake_password)
    cy.log(`Click on Login button`)
    AutorizationPage.get_Login_Button().click()
    cy.log(`Check if the error message is shown and the text color is red`)
    cy.get('div[class="error ng-star-inserted"]')
      .should('be.visible')
      .should('have.css', 'color')
      .and('eq', 'rgb(255, 87, 34)');
  })

  let fake_user = {
    fake_email: faker.internet.email(),
    fake_password: faker.internet.password()
  }

})