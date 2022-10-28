/// <reference types="Cypress"/>
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
        loginpage.getLoginpage().click()
        loginpage.getMobileNumber().type(this.data.Number)//this.data.Number
        loginpage.getPassword().type(this.data.Password)
        loginpage.Clickloginbutton().click()
        cy.wait(2000)
    //cy.get(":nth-child(2) > label span")
    cy.wait(5000)
    cy.get('.InyRMC._3Il5oO :nth-child(8)')
    cy.get('._3704LK').type('mobiles{enter}').click({ force: true })
    //cy.contains("in Mobiles").click()
    cy.contains('MORE').click()
    cy.get('input[placeholder="Search Brand"]').type("realme")
    cy.get(':nth-child(2) > ._4921Z > ._1Y4Vhm > ._2iDkf8').click()
    cy.wait(5000)
    cy.get('.THxusM').click()
    cy.wait(5000)
    //cy.contains('Apply Filters').click()
     // prints all the phone names
    cy.spy(console, 'log').as('console')
    cy.get('._13oc-S').each(($el,index ,$list) => {
    const text=($el.text())
    //console.log(text)
    if (text.includes('realme C35')) {
     console.log(text)
     const pop_url = "/realme-c35-glowing-green-128-gb/p/itmafb045222b2cf?pid=MOBGFJ35ZHFDPU4Y&lid=LSTMOBGFJ35ZHFDPU4YSUHJFM&marketplace=FLIPKART&q=mobiles&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=44fc7dc1-2b39-4d8f-85fb-796a509dc7de.MOBGFJ35ZHFDPU4Y.SEARCH&ppt=sp&ppn=sp&ssid=dzwbpwb2vk0000001661519444346&qH=eb4af0bf07c16429"
     cy.wait(5000)
     cy.window().then(win => {
     const stub = cy.stub(win, 'open').as('windowopen')
     console.log(text)
     //mobilepage.Internaldropdown().click({force: true})
     //cy.wait(2000)
     //internal check box
    // mobilepage.Internalcheckbox().click()
     //cy.wait(1000)
})
     cy.get('[data-id="MOBGBTHFSKHF8RAU"] > ._2kHMtA > ._1fQZEK > ._3pLy-c > .col-7-12 > ._4rR01T').click({force:true})
     //cy.get('@windowopen').should('be.calledWith',pop_url)
     cy.window().then(win => {
     win.location.href = pop_url
     cy.get('.N79-rD').type(502278)
     cy.get('._2P_LDn').click()
     cy.get(':nth-child(3) > .Qc7Nxn > :nth-child(2) > ._2wKoSe > ._1UcWw6 > ._2KpZ6l').click({force:true})
     return false
    })
    //cy.wrap(text).click()
    }

     })
    })
    
    })