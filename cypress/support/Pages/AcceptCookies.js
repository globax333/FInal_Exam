class AcceptCookies {


    get_Me_Want_it_BNT() {
        return cy.get('a[aria-label="dismiss cookie message"]')
    }
    get_Dismiss_BNT() {
        return cy.get('button[aria-label="Close Welcome Banner"]')
    }

    Perform_Accept_Cookies() {
        cy.log(`Click on accept Cookies butons`)
        this.get_Me_Want_it_BNT().click()
        this.get_Dismiss_BNT().click()
    }

}
export default new AcceptCookies();