/// <reference types="Cypress" />
import FlipkartLogin from '../../support/PageObjects/FlipkartLoginPage'
import FlipkartHomepage from '../../support/PageObjects/FlipkartHomepage'
import WishlistFlipkart from '../../support/PageObjects/WishlistFlipkart'
import Flipkartlogout from '../../support/PageObjects/Flipkartlogout'
import Addtocart from '../../support/PageObjects/Addtocart'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
describe('my Flipkart test suit', function () {
  before(function () {

    cy.fixture('Flipkart').then(function (data) {
      this.data = data
    })
  })

  it('My FirstTest case', function () {
    const loginpage = new FlipkartLogin()
    const homepage = new FlipkartHomepage()
    const wishlistpage = new WishlistFlipkart()
    const logout = new Flipkartlogout()
    const AddToCart = new Addtocart()
    cy.visit("https://www.flipkart.com/",
      {
        onBeforeLoad(win) {
          cy.stub(win, 'open')
        }
      })
    //Flipkart login page
    loginpage.getLoginpage().click()
    loginpage.getMobileNumber().type(this.data.Number)//this.data.Number
    loginpage.getPassword().type(this.data.Password)
    loginpage.Clickloginbutton().click()
    cy.wait(8000)
    //cy.get(":nth-child(2) > label span")    
    //home page 
    homepage.clickonsearchFlied().click({ force: true })
    homepage.TypeProductonSearchFlied().type("mobiles", { timeout: 20 })
    //homepage.clicksearchbutton().click()

    AddToCart.selectinmobiletext().click()
    AddToCart.clickmoredropdown().click()
    //cy.get('._3IxutE').type("vivo")
    AddToCart.typebrandname().type("vivo")
    AddToCart.selectcheckbox().click()
    AddToCart.clickApplyfilter().click()



    // prints all the phone names

    AddToCart.printAllMobiles().as('console')
    //cy.contains('vivo T1X (Space Blue, 64 GB)').click()

    AddToCart.clickonmobilewithtext().invoke('removeAttr', 'target').click({ force: true })
    AddToCart.Typepincode().type(502278)
    cy.wait(2000)
    AddToCart.checkbutton().click()
    cy.wait(2000)

    //cy.xpath("//button[normalize-space()='ADD TO CART']").click()
    cy.get('button[class="._2KpZ6l"]').click()
    //cy.get('button._2KpZ6l').click();
    //cy.contains('ADD TO CART').click().click();
    //cy.get("YOUR_SELECTOR").click({ force: true });
    //  cy.get('svg')
    // .should('have.attr' , 'width' , '20')
    // .invoke('show')
    // .and('have.attr' , 'height' , '20')
    // .find('path')
    // //.first()
    // .invoke('attr', 'fill','#fff').click({ multiple: true })

    cy.wait(5000)


  })

})



