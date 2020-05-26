@sales-api
Feature: Testing get and post requets

As a valid user 
I should be able to generate GET and POST requets

Scenario: Validate GET request
Given I have a valid request URL
When I send a get request 
Then I should be able to validate response

Scenario: Validate POST request
Given I have a valid post URL
When I send a post request
Then I should be able to validate post response