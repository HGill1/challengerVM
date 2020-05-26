import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I have a valid request URL', () => {
    const endpoint = '/posts/1'
    cy.wrap(endpoint).as('getEndpoint')
})

When('I send a get request', ()=> {
    cy.get('@getEndpoint').then((endpoint) =>{
        cy.request({
            url: Cypress.env("apiBaseUrl")+endpoint,
            method: 'GET'
        }).as('getResponse');
    })
    
})

Then('I should be able to validate response', () => {
    cy.get('@getResponse').then(resp =>{
        expect(resp.status).to.equal(200)
        expect(resp.body.userId).to.equal(1)
    })
})

Given('I have a valid post URL', () => {
    const endpoint = "/posts";
    cy.wrap(endpoint).as('getEndpoint')
})

When('I send a post request',()=>{
      cy.fixture('sales/adduser').then((req) =>{
        cy.get('@getEndpoint').then((endpoint) =>{
            cy.request({
                url:Cypress.env('apiBaseUrl')+endpoint,
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=UTF-8'},
                body: req
            }).as('getResponse')
        })
      })

    
})

Then('I should be able to validate post response', () => {
    cy.get('@getResponse').then(resp =>{
        console.log(resp.body)
        expect(resp.status).to.equal(201)
        expect(resp.body.title).to.equal("foo")
    })

})