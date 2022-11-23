import user from "../../fixtures/user.json";
class AutorizationPage {


    Open_Autorization_Page() {
        return cy.visit('/#/login')
    }
    get_Email(){
        return cy.get('#email')
    }
    get_Password(){
        return cy.get('#password')
    }
    get_Login_Button(){
        return cy.get('#loginButton')
    }
    get_Remember_me_checkbox(){
        return cy.get('#rememberMe-input')
    }

    SubmitLoginForm(){
        this.get_Email().type(user.email)
        this.get_Password().type(user.password)
        this.get_Remember_me_checkbox().check({force: true})
        this.get_Login_Button().click()
    }

}
export default new AutorizationPage();
