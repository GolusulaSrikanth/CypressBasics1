/// <reference types="Cypress" />
///<reference types="cypress-iframe" />
  import 'cypress-iframe'
 //shifted to iframes
 describe('My Second Test Suite', function() 
 {
  
 it('My FirstTest case',function() {
  
 
 cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 cy.frameLoaded('#courses-iframe')
 cy.iframe().find("a[href='mentorship']").eq(0).click()
 cy.wait(3000)
 cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)


 })
})