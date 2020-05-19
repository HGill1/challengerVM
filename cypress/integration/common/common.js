/// <reference types="Cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { checkAvailabilityPage } from '../sales/CheckAvailablity/checkAvailablityPage'

Given('I navigate to virgin media website', () => {
    cy.visit('/')
    cy.get('#consent_prompt_submit').click()
})

When('I enter a valid postcode {string}', (postcode) => {
    checkAvailabilityPage.enterPostcode(postcode);
    cy.wrap(postcode).as('getPostcode');
})

When('I enter a valid house number {string}', (houseNumber) => {
    checkAvailabilityPage.enterHouseNumber(houseNumber);
    cy.wrap(houseNumber).as('getHouseNumber')
})

Then('I should see a popup box displayed', () => {
    checkAvailabilityPage.clickSubmitButton()
    checkAvailabilityPage.addressPopupDisplayed()
})

When('I confirm my address is correct', () => {
    checkAvailabilityPage.clickAddressConfirmButton()
})