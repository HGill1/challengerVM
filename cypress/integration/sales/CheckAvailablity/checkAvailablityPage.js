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

}

export const checkAvailabilityPage =  new CheckAvailabilityPage