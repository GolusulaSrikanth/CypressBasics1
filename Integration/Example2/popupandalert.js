/// <reference types="Cypress" />
describe('my thired test suit',function()
{
it('my thired  test case',function()
{
 
//pop up and alert
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha equal the string
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
//sub sring assertion
cy.get('#opentab').invoke('removeAttr','target').click()
 //get the url from page
cy.url().should('include','rahulshettyacademy')
 //back to parent window
cy.go('back')
})
})