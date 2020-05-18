Feature: Check broadband availbility

    As a valid user
    I should be able to check broadband Availablity
    in my area

    @focus
    Scenario: Check broadband availbility for a valid postcode and house number
        Given I navigate to virgin media website
        When I enter a valid postcode "SW11 2PN"
            And I enter a valid house number "14"
        Then I should see a popup box displayed containing my address

