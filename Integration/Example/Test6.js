/// <reference types="Cypress" />
 //handling web table with cypress
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
             //index is in 7 row 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText= price.text()
         //its equal and compare
         expect(priceText).to.equal('25')
        })
    }
 
})
 
it('My FirstTest case',function() {
cy.get('#content>div>h3').should('include.text', 'A/B Test Control')
var dta1 = cy.get('#content>div>h3').invoke('show')
console.log(dta1.textContent)
cy.get('.example>h3').should('have.text', 'A/B Test Control')


cy.get('.large-4 > div > a').invoke('removeAttr', 'target').click('center')

cy.get('h2.subheader').should('have.text', 'A free, once-weekly e-mail on how to use Selenium like a Pro')
})
 
 
})
})