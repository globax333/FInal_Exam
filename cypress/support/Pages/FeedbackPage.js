class FeedbackPage {

    get_Side_Menu() {
        return cy.get('button[aria-label="Open Sidenav"]')
    }
    get_Customer_Feedback_in_Menu_list() {
        return cy.get('a[href="#/contact"]')
    }
    get_Raiting() {
        return cy.get('mat-slider[id="rating"]')
    }
    get_Comment() {
        return cy.get('textarea[id="comment"]')
    }
    get_Captha_Answer() {
        return cy.get('[id="captchaControl"]')
    }
    get_Submit_Button() {
        return cy.get('button[id="submitButton"]')
    }
    get_Five_star_feedback() {

        return cy.get('span[class="mat-simple-snack-bar-content"]')
    }

}
export default new FeedbackPage();
