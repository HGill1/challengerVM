import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { checkAvailabilityPage } from './checkAvailablityPage';

Given('I navigate to virgin media website', () => {
    cy.visit('/')
    cy.get('#consent_prompt_submit').click();
})

When('I enter a valid postcode {string}', (postcode) =>{
    checkAvailabilityPage.enterPostcode(postcode)
})

When('I enter a valid house number {string}', (houseNumber) => {
    checkAvailabilityPage.enterHouseNumber(houseNumber)
})

Then('I should see a popup box displayed containing my address', () =>{
    checkAvailabilityPage.clickSubmitButton()
    checkAvailabilityPage.addressPopupDisplayed()
})
