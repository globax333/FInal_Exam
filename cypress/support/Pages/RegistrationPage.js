class RegistrationPage {


    Open_Registration_Page() {
        cy.log(`Open Register Page`)
        return cy.visit('/#/register')
    }
    get_Email() {

        return cy.get('#emailControl')
    }
    get_Password() {
        return cy.get('#passwordControl')
    }
    get_Repeat_Password() {
        return cy.get('#repeatPasswordControl')
    }
    get_Show_Password_advice_radio_switcher() {
        return cy.get('input[role="switch"]')
    }
    get_Security_Question_Dropdown() {
        return cy.get('mat-select[role="combobox"]')
    }
    get_Your_Favorite_Book() {
        return cy.get('span:contains(" Your favorite book? ")')
    }
    Select_Favorite_Book_in_Security_Question_Dropdown() {
        this.get_Security_Question_Dropdown().click()
        this.get_Your_Favorite_Book().click()
    }
    get_Security_Question_Answer() {
        return cy.get('#securityAnswerControl')
    }
    get_Register_Button() {
        return cy.get('#registerButton')
    }
    get_Registration_completed_successfully() {
        return cy.get('span:contains("Registration completed successfully. You can now log in.")')
            .should('be.visible')
    }
    // Error validations checks
    get_Please_provide_an_email_address() {
        return cy.get('[class="mat-form-field-subscript-wrapper ng-tns-c119-7"]')
    }
    get_Password_must_be_XX_characters_long() {
        return cy.get('[class="mat-form-field-subscript-wrapper ng-tns-c119-8"]')
    }
    get_Passwords_do_not_match() {
        return cy.get('[class="mat-form-field-subscript-wrapper ng-tns-c119-9"]')
    }
    get_This_cannot_be_changed_later() {
        return cy.get('[class="mat-form-field-subscript-wrapper ng-tns-c119-10"]')
    }
    get_Please_provide_an_answer_to_your_security_question() {
        return cy.get('[class="mat-form-field-subscript-wrapper ng-tns-c119-12"]')
    }





}
export default new RegistrationPage();
