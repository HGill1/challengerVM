export class CheckAvailabilityPage{

    enterPostcode(postcode){
        cy.get('#postcode').type(postcode);
    }

    enterHouseNumber(houseNumber){
        cy.get('#housenumber').type(houseNumber);
    }

    clickSubmitButton(){
        cy.get('[type="submit"]').click();
    }
    
    addressPopupDisplayed(){
        cy.get('.modal-dialog').should('be.visible') 
    }
    

    clickAddressConfirmButton(){
        cy.get('[data-message-code="availability.confirm.address.button"]').click()
    }

    verifyAddressDetails(){
        cy.get('@getPostcode').then((postcode) => {
            const p = postcode
            cy.get(".address-detail").should('contain', p)
          })
    
          cy.get('@getHouseNumber').then((houseNumber) => {
            const h = houseNumber
            cy.get(".address-detail").should('contain', h)
          }) 
    }

}

export const checkAvailabilityPage =  new CheckAvailabilityPage