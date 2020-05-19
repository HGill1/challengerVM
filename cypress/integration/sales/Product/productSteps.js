import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { product } from './productPage'

Then('I should see the product page displayed', () =>{
    product.productMessageDispalyed();
})