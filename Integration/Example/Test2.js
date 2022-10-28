//cypress first code
/// <reference types="Cypress" />
describe('my first test suit',function()
{
it('my first test case',function()
{

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
//selenium get hit the url in browser ,cypress get is like findelement in it
cy.get('.search-keyword').type('ca')
//waite method
cy.wait(2000)
//the visible syntax define it shows the what elements are visible on page

//parent and chiled chaining
cy.get('.products').as('productlocator')

//here we see get the particular element by iteration(text) using each and if loop
cy.get('@productlocator').find('.product').each(($el, index, $list) => 
{
   const  textveg=$el.find('h4.product-name').text()
   //includes is a javascript syntax ex={"hello word this is"} we want word text using include here
   if (textveg.includes('Cashews') )
   {
    cy.wrap($el).find('button').click()
   }
})
cy.get('.tada').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()


})

})