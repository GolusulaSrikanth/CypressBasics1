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

          //cart icon
          cy.get('._1bS9ic').click()
          //print price of items
          cy.get(':nth-child(1) ._2-ut7f._1WpvJ7').each(($e2, index, $list) => 
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
              cy.log(total)
             })

             
            //  //delete item
            // cy.get('div.Gh3O6V.row ._2Nq6Qc').first().click({force: true})
            // cy.get('._3S58wp').click()
            // cy.get('._2sKwjB').should('have.text',"Removed from your Wishlist")

            //   //currently unavilable             
            //  cy.get('._3G6awp._246rc2').should('have.class','Currently unavailable')
            //  cy.contains('NOTIFY ME').click()
            //  //currently avaiable products
            //     const text=($e3.text()) 
            //     if(text.includes('Currently unavailable'))
            //     {
            //       cy.wrap($e3).eq(index).click();
            //     }
            //   cy.get('._3G6awp._246rc2').eq(1).should('contain', 'Currently unavailable').click({ waitForAnimations: false })
            }) 
          })   
             

              
               

           

        

    

