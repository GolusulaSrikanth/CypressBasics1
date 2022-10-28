/// <reference types="Cypress" />
describe('my thired test suit',function()
{
it('my thired  test case',function()
{
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('input.search-keyword').type('Br')
cy.wait(2000)
cy.get('div.product:visible').should('have.length',2)
//parent to chiled chaining
cy.get('.products').as('productslocators')
//cy.get('@productslocators').find('.product').eq(1).contains('ADD TO CART').click()
//we are try to get with text
cy.get('@productslocators').find('.product').each(($el, index, $list) => 
{
    const  textveg=$el.find('h4.product-name').text()
   
   if(textveg.includes('Brinjal'))
   {
    cy.wrap($el).find('button').click()
   }

})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
})

})