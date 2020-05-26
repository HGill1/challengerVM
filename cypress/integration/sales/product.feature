@sales-ui
Feature: Product page

    As a valid-user
    I should be able to see products available to me

    @product
    Scenario: Product page gets displayed after entering a valid postcode and house number
        Given I navigate to virgin media website
        When I enter a valid postcode "SW11 2PN"
            And I enter a valid house number "14"
        Then I should see a popup box displayed
        When I confirm my address is correct
        Then I should see the product page displayed

