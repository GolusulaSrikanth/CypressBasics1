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
cy.get('.product:visible').should('have.length',4)
//parent and chiled chaining
cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').should('have.length',4)


//eq-->is go to  the  element by index on page
//here we are get the element by index
cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('sf') 
})
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
//assert if logo text is correctly  display or not
cy.get('.brand').should('have.text','GREENKART')
//text it is print it in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})


})

})