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
    
         it('validate img of product',function() 
         {
           const loginpage=new FlipkartLogin()
          
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
            cy.wait(2000)


            //verify the image of the product
            cy.contains('Fashion').trigger('mouseover')
            cy.contains("Men's Kurtas").click()
            cy.wait(2000)
            cy.screenshot()
            cy.get('._2B099V').each(($e1, index=1, $list) => {
            //consol.log($e1.text())
            if($e1.text().includes("Majestic Man"))
            {
                cy.get('._30jeq3').eq(index).first().then(function(price)
                {
                 const priceText=   price.text()
                 //its equal and compare
                 expect(priceText).to.equal('₹499')
                 cy.screenshot()
                 console.log(priceText)
                 cy.wait(2000)
                })
                cy.wrap($e1).should('be.visible')
              }
          
            
            })
              
              //review capture
              cy.wait(3000)
              const text=cy.get('.t-ZTKy')
              console.log(text)

              //capture the product
           
              

            })
        })