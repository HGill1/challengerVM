Feature: Login into appliaction

As a valid user 
I want log in into appliaction

Scenario: Valid Login
Given I open login page
When I submit login
Then I should see home page