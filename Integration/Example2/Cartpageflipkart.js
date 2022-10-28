/// <reference types="Cypress" />
import FlipkartLogin from '../../support/PageObjects/FlipkartLoginPage'
import FlipkartHomepage from '../../support/PageObjects/FlipkartHomepage'
import WishlistFlipkart from '../../support/PageObjects/WishlistFlipkart'
import Flipkartlogout from '../../support/PageObjects/Flipkartlogout'

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
         const logout=new Flipkartlogout()
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

          //cart icon
          cy.get('._1bS9ic').click()
          //print price of items
          cy.get(':nth-child(3) > .zab8Yh')  
          cy.wait(5000)
          cy.get("._2nQDXZ").each(($e2, index, $list) =>
          {
              console.log($e2.text())
          })
          cy.get('.zab8Yh > ._2nQDXZ > ._3fSRat > ._1WpvJ7').each(($e2, index, $list) => 
          //cy.get(':nth-child(1) ._2-ut7f._1WpvJ7').each(($e2, index, $list) => 
           { 
           const amount=$e2.text()
           var res=amount.split("₹")
           res=res[1].trim()
           cy.log(res)
           })

          //total price of items
          
             cy.get('._I_XQO > :nth-child(1) > span').then(function(element)
             {
              const amount=element.text()
              var res=amount.split("₹")
              var total=res[1].trim()
              //expect(Number(total)).to.equal(sum)
              cy.log(total)
             })
             cy.get("._1AtVbE.col-12-12")
             .should("be.visible")
             .invoke("show")
             cy.spy(console, 'log').as('console')
             logout.mouseoveronflipkartDropdown().trigger('mouseover')
             logout.clicklogut().click();


            }) 
          })   
             

              
               

           

        

    

