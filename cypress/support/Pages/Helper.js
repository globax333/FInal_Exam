export function Search_Product(productName){
    cy.get('mat-icon:contains(" search ")').type(`${productName}{enter}`)
    cy.get('div[class="item-name"]').should('contain', `${productName}`)
}
