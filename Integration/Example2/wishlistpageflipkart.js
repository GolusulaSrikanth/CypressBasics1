
/// <reference types="Cypress" />
import FlipkartLogin from '../../support/PageObjects/FlipkartLoginPage'
import FlipkartHomepage from '../../support/PageObjects/FlipkartHomepage'
import WishlistFlipkart from '../../support/PageObjects/WishlistFlipkart'


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
         const homepage=new FlipkartHomepage()
         const wishlistpage=new WishlistFlipkart()
           
          cy.visit("https://www.flipkart.com/",
          {
          onBeforeLoad(win) 
          {
            cy.stub(win, 'open')
          }
         })
          //Flipkart login page
          loginpage.getLoginpage().click()
          loginpage.getMobileNumber().type(this.data.Number)//this.data.Number
          loginpage.getPassword().type(this.data.Password)
          loginpage.Clickloginbutton().click()
          cy.wait(8000)

          //whish list
          cy.wait(2000)
          wishlistpage.mouseoveronflipkarticon().trigger('mouseover')
          cy.wait(2000)
          wishlistpage.flipkartdropdownvisibility().invoke('show')
          cy.wait(2000)
          // cy.get('.UCYWwU._3vLkjj').should('be.visible') 
          wishlistpage.clickwishlist().click({force: true})
          cy.wait(2000)
          cy.get('._3FVYY1>span').should('be.visible') 
        

          //click on the product with text
          cy.get('._3E8aIl.sTQ7AV :nth-child(1)>._3hscEA').each(($e3 ,index ,$list)=> 
          {
          const textveg=($e3.text())
          if(textveg.includes('Roadster Men Checkered Casual Brown Shirt'))
          {
          cy.wrap($e3).click()  
          }

         })

       })
    })
