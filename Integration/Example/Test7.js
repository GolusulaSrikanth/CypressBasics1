/// <reference types="Cypress" />
 //handling mouseover with cypress
 describe('My Second Test Suite', function() 
 {
  
 it('My FirstTest case',function() {
  
 
 cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//mouse over on element 
cy.get('div.mouse-hover').invoke('show')
//here we click the hiden dropdow
cy.contains('Top').click({force: true})
cy.url().should('include','top')

 })
})