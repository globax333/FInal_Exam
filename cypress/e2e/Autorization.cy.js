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
    cy.get('#email').type(fake_user.fake_email)
    cy.get('#password').type(fake_user.fake_password)
    cy.get('#loginButton').click()
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