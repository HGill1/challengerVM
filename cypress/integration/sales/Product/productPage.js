export class Product{
    productMessageDispalyed(){
         cy.get('h1').should('have.text', 'Awesome news!')
    }
}
export const product = new Product();
