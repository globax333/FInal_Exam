///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import AcceptCookies from '../support/Pages/AcceptCookies';
import AutorizationPage from '../support/Pages/AutorizationPage'
import FeedbackPage from '../support/Pages/FeedbackPage'

beforeEach('Change Captcha response', () => {
  cy.intercept('GET', 'http://juice-shop-sanitarskyi.herokuapp.com/rest/captcha/', 
  { "captchaId": 46,
    "captcha": "5-10+5",
    "answer": "0"
  })
})

let comment =  faker.random.words(15)



describe('Customer Feedback', () => {
  it('Success feedback with rating 5 ', () => {
    AutorizationPage.Open_Autorization_Page()
    AcceptCookies.Perform_Accept_Cookies()
    AutorizationPage.SubmitLoginForm();
    FeedbackPage.get_Side_Menu().click()
    FeedbackPage.get_Customer_Feedback_in_Menu_list().click()
    FeedbackPage.get_Comment().type(comment)
    FeedbackPage.get_Raiting().click('right')
    FeedbackPage.get_Captha_Answer().type('0')
    FeedbackPage.get_Submit_Button().click()
    FeedbackPage.get_Five_star_feedback()
    .should('contain', 'Thank you so much for your amazing 5-star feedback!');
  })
})