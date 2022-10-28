/// <reference types="Cypress" />
import FlipkartLogin from '../../support/PageObjects/FlipkartLoginPage'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
 describe('my Flipkart test suit',function()
  {
        before(function()
        {
          cy.fixture('Flipkart').then(function(data)
           {
             this.data=data
           })
       })
    

         it('My FirstTest case',function() 
         {
           const loginpage=new FlipkartLogin()

           cy.visit("https://www.flipkart.com/",)
           loginpage.getLoginpage().click()
           loginpage.getMobileNumber().type(this.data.Number)//this.data.Number
           loginpage.getPassword().type(this.data.Password)
           loginpage.Clickloginbutton().click()
           cy.wait(2000)
           //men's casual shirts
           cy.contains('Fashion').trigger('mouseover')
           cy.contains("Men's Casual Shirts").invoke('show').click()
           cy.get("._213eRC._2ssEMF")
           .invoke('show') 
           .contains("Size")
           .click({multiple : true})
           cy.wait(3000)
           //cy.get('[type="checkbox"]:enabled').check("L")
           cy.wait(2000)
           cy.get('._1Y4Vhm._4FO7b6 [type="checkbox"]')
           // .should('have.length',81)
           .invoke("show")
           .click({force : true},{multiple : true})
           //  cy.get('input[type="checkbox"]')
           //  .invoke("show")
           //  .should('have.length', 6)
           // .check("L")
           cy.get('[type="checkbox"]')
           .should('have.length', 6)
           .invoke("show")
           .then(function($items) {
            return Cypress._.sampleSize($items.toArray(), 2)
          })
          .should('have.length', 2)
          cy.get('[type="checkbox"]')
          .not("[disabled]")
          .click({ multiple: true })
          cy.get('[type="checkbox"]:checked').should(
          'have.length',
          2,
        )
           


    })
 })

