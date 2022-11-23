export function Search_Product(productName) {
    cy.log(`Type **product name** in the search field and click enter button`)
    cy.get('mat-icon:contains(" search ")').type(`${productName}{enter}`)
    cy.log(`When the **product name** is found check product name title `)
    cy.get('div[class="item-name"]').should('contain', `${productName}`)
}
