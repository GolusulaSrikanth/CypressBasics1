/// <reference types="Cypress" />
import FlipkartLogin from '../../support/PageObjects/FlipkartLoginPage'
import FlipkartHomepage from '../../support/PageObjects/FlipkartHomepage'
import WishlistFlipkart from '../../support/PageObjects/WishlistFlipkart'
import FlipkartMobilePage from '../../support/PageObjects/FlipkartMobilepage';

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
           const mobilepage=new FlipkartMobilePage()
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
            cy.wait(2000)
  
  
  
           //home page 
           homepage.clickonsearchFlied().click({force: true})
           homepage.TypeProductonSearchFlied().type("mobiles",{timeout:20})
           homepage.clicksearchbutton().click()
  
          //mobiles page
          mobilepage.searchforbrand().type('realme')
          //realme check box
          mobilepage.Clickonbrandcheckbox().click()
          cy.wait(2000)
          //ram check box

          //internal storage dropdown 
         mobilepage.Internaldropdown().click({force: true})
          cy.wait(2000)
          //internal check box
          mobilepage.Internalcheckbox().click()
          cy.wait(1000)
          
          //mobile selected by text
          mobilepage.Selecttext().each(($e1,index ,$list)=>
          {
          const text=($e1.text())
            if(text.includes('realme 9 5G'))
            { 
              cy.wait(2000)
              console.log(text)
              cy.wait(2000)
              //add to compare
              mobilepage.Addtocomaprecheckbox().click({force: true})
           
              //click on addtocompare popup window
              mobilepage.Addtocomparepopup().click()
              cy.contains('Choose Brand').type('red')

              cy.get('._1z5ndO').each(($el, index, $list) =>
               {
                if($el.text()==="REDMI")
                {
                 cy.wrap($el).click()
                }
              })
            
             cy.contains('Choose a Product').click()
             cy.get("._3mL9c2 >._1z5ndO [data-value='MOBGC9GYCHQZK9GW']").each(($el) => 
             {
              if($el.text()==="REDMI 10 (Pacific Blue, 64 GB)")
               {  
                 cy.wrap($el).click({force: true})
               }
               console.log(($el).text())
            })
            cy.wait(2000)
            cy.go('back')
            return false
          }
          
           
         })

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
          
          
         cy.go('back')

          }
   
         })
        
         cy.go('back')
        
        
        
         
         
          //      cy.wait(3000)
          //      mobilepage.choosebrand().type('red')
          //      mobilepage.selectbrand().then(function($e2, index, $list) {
          //      if($e2.text()==="REDMI")
          //      {
          //       cy.wrap($e2).click()
          //      }
          //   mobilepage.chooseproduct().click()
          //   mobilepage.selectdropdownofchooseproduct().click()
          //   cy.wait(8000)
          // })
         
  //   cy.contains('Choose Brand').type('red')

  //   cy.get('._1z5ndO').each(($el, index, $list) => {
 
  //   if($el.text()==="REDMI")
  //  {
  //  cy.wrap($el).click()
  //  }
  // })
  // cy.contains('Choose a Product').click()
  // cy.get("._3mL9c2 >._1z5ndO [data-value='MOBGC9GYCHQZK9GW']").each(($el) => {
  // if($el.text()==="REDMI 10 (Pacific Blue, 64 GB)")
  // {  
  // cy.wrap($el).click({force: true})
  // }

  // console.log(($el).text())
  // })


       
        
  


           
          
          
         
        
       

        })
      
    })