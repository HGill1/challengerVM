import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { checkAvailabilityPage } from './checkAvailablityPage'

Then('I can verify my address details', () => {
    checkAvailabilityPage.verifyAddressDetails()
})