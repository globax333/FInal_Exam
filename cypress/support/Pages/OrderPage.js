class OrderPage {

    get_Add_to_Basket_btn() {
        return cy.get('button[class="mat-focus-indicator btn-basket mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted"]')
    }
    get_Basket() {
        return cy.get('button[routerlink="/basket"]')
    }
    get_Checkout_btn() {
        return cy.get('#checkoutButton')
    }
    get_Add_New_Adress(){
        return cy.get('button[aria-label="Add a new address"]')
    }
    get_Country_Adress_page(){
        return cy.get('input[placeholder="Please provide a country."]')
    }
    get_Name_Adress_page(){
        return cy.get('input[placeholder="Please provide a name."')
    }
    get_Mobile_Adress_page(){
        return cy.get('input[placeholder="Please provide a mobile number."]')
    }
    get_ZIP_Adress_page(){
        return cy.get('input[placeholder="Please provide a ZIP code."]')
    }
    get_Adress_Adress_page(){
        return cy.get('textarea[data-placeholder="Please provide an address."]')
    }
    get_City_Adress_page(){
        return cy.get('input[placeholder="Please provide a city."]')
    }
    get_Submit_on_Adress_page(){
        return cy.get('button[id="submitButton"]')
    }
    get_State_Adress_page(){
        return cy.get('input[placeholder="Please provide a state."]')
    }
    get_Firs_Adress() {
        return cy.get('[class="mat-cell cdk-cell cdk-column-Address mat-column-Address ng-star-inserted"]').eq(0)
    }
    get_Continue_btn_on_Adress_page() {
        return cy.get('button[aria-label="Proceed to payment selection"]')
    }
    get_Standard_Delivery() {
        return cy.get('[class="mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted"]').eq(2)
    }
    get_Continue_btn_on_Delivery_page() {
        return cy.get('button[aria-label="Proceed to delivery method selection"]')
    }
    get_Add_Credit_card(){
        return cy.get('[id="mat-expansion-panel-header-0"]')
    }
    get_Credt_card_Name(){
        return cy.get('input[type="text"]')
    }
    get_Credit_card_Number(){
        return cy.get('[type="number"]')
    }
    get_Credit_card_Month_Expiry(){
        return cy.get('select').eq(0)
    }
    get_Credit_card_Year_Expiry(){
        return cy.get('select').eq(1)
    }
    get_Submit_Credit_card_Data(){
        return cy.get('[id="submitButton"]')
    }
    get_First_Credit_Cart() {
        return cy.get('[class="mat-radio-button mat-accent"]').eq(0)
    }
    get_Continue_btn_on_Payment_page() {
        return cy.get('button[aria-label="Proceed to review"]')
    }
    get_Continue_btn_on_Order_Summary_page() {
        return cy.get('#checkoutButton')
    }
    get_Confirmation__order_title() {
        return cy.get('[class="confirmation"]')
    }


}
export default new OrderPage();