///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import AcceptCookies from '../support/Pages/AcceptCookies';
import AutorizationPage from '../support/Pages/AutorizationPage'
import FeedbackPage from '../support/Pages/FeedbackPage'

// чомусь напротязі дня інтерсепт працює і тести проходять, але на наступний день каптча змнінюється,
// і потрібно кожен день витягувати  новий капча респонс і 1 раз вставляти в  наш змінений респонс.
beforeEach('Change Captcha response', () => {
  cy.intercept('GET', 'http://juice-shop-sanitarskyi.herokuapp.com/rest/captcha/',
    {
      "captchaId": 4,
      "captcha": "9-1*5",
      "answer": "4"
    })
})

let comment = faker.random.words(15)



describe('Customer Feedback', () => {
  it('Success feedback with rating 5 ', () => {
    AutorizationPage.Open_Autorization_Page()
    AcceptCookies.Perform_Accept_Cookies()
    AutorizationPage.SubmitLoginForm();
    cy.log(`Open **Side menu**`)
    FeedbackPage.get_Side_Menu().click()
    cy.log(`Select **Customer Feedback** in the menu list`)
    FeedbackPage.get_Customer_Feedback_in_Menu_list().click()
    cy.log(`Type a random generated comment in the **Comment** field  `)
    FeedbackPage.get_Comment().type(comment)
    cy.log(`Set rating 5 stars`)
    FeedbackPage.get_Raiting().click('right')
    cy.log(`Set correct captcha answer`)
    FeedbackPage.get_Captha_Answer().type('4')
    cy.log(`Click **Submit" button`)
    FeedbackPage.get_Submit_Button().click()
    cy.log(`Check if **5 star feedback** pop up is displayed`)
    FeedbackPage.get_Five_star_feedback()
      .should('contain', 'Thank you so much for your amazing 5-star feedback!');
  })
})