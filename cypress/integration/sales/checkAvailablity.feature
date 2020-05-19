Feature: Check broadband availbility

    As a valid user
    I should be able to see prducts avaialble to me
    in my postcode area

    Scenario Outline: Check broadband availability for a valid postcode and house number
        Given I navigate to virgin media website
        When I enter a valid postcode "<Postcode>"
            And I enter a valid house number "<House Number>"
        Then I should see a popup box displayed
        And I can verify my address details

        Examples:
            | Postcode | House Number |
            | SW11 2PN | 14           |
            | SW11 2PN | Confiers     |
