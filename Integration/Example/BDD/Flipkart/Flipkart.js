/// <reference types="Cypress" />
import FlipkartLogin from '../../../../support/PageObjects/FlipkartLoginPage'
import FlipkartHomepage from '../../../../support/PageObjects/FlipkartHomepage'
import FlipkartMobilePage from '../../../../support/PageObjects/FlipkartMobilepage'
import WishlistFlipkart from '../../../../support/PageObjects/WishlistFlipkart'
import Flipkartlogout from '../../../../support/PageObjects/Flipkartlogout'
//import { Given, When, Then, And } from "cypress-cucumber-preprocessor";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const loginpage = new FlipkartLogin()
const homepage = new FlipkartHomepage()
const mobilepage = new FlipkartMobilePage()
const wishlistpage = new WishlistFlipkart()
const logout = new Flipkartlogout()
// const wishlistpage=new WishlistFlipkart()
let name

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

//login page

Given('User lands on Flipkart Dashboard page', () => {
  cy.visit("https://www.flipkart.com/");
})


When('User clicks the Login on Header page', function () {
  loginpage.getLoginpage().click()
})


Then('User enter Email or PhoneNumber and password', function (dataTable) {
  name = dataTable.rawTable[1][0]
  loginpage.getMobileNumber().type(dataTable.rawTable[1][0])
  loginpage.getPassword().type(dataTable.rawTable[1][1])
})

And('User clicks on the Login in popup window', function () {
  loginpage.Clickloginbutton().click()
  cy.wait(2000)
})

//cart page
When('User click on carticon', function () {
  cy.get('._1bS9ic').click({ force: true })
})


Then('print price of the added item in cart', function () {
  cy.get(':nth-child(1) ._2-ut7f._1WpvJ7').each(($e2, index, $list) => {
    const amount = $e2.text()
    var res = amount.split("₹")
    res = res[1].trim()
    cy.log(res)
  })
})
Then('print the Total product price', function () {
  cy.get('._I_XQO > :nth-child(1) > span').then(function (element) {
    const amount = element.text()
    var res = amount.split("₹")
    var total = res[1].trim()
    cy.log(total)
  })
})

And('Go Back to the Home page', function () {
  cy.go('back')
})

//mobile page
Given('user search for a product on search filed', () => {
  homepage.clickonsearchFlied().click({ force: true })
  homepage.TypeProductonSearchFlied().type("mobiles")
})
Then('user click on Search button', () => {
  homepage.clicksearchbutton().click()
})
Then('user search for a brand in brand filed', () => {
  mobilepage.searchforbrand().type('realme')
})
And('click on related brand check box', () => {
  mobilepage.Clickonbrandcheckbox().click()
})
Then('user click on internal storage dropdown', () => {
  mobilepage.Internaldropdown().click({ force: true })
})
And('select the check box of 6GB RAM', function () {
  mobilepage.Internalcheckbox().click({ force: true })
})

//comapre page
When('User selecte product By text and click on Add to compare', function () {
  mobilepage.Selecttext().each(($e1, index, $list) => {
    const text = ($e1.text())
    if (text.includes('realme 9 5G')) {
      cy.wait(2000)
      console.log(text)
      cy.wait(2000)
      //add to compare
      mobilepage.Addtocomaprecheckbox().click({ force: true })
      //click on addtocompare popup window
      mobilepage.Addtocomparepopup().click()
      mobilepage.choosebrand().type('red')

      mobilepage.selectmobile().each(($el, index, $list) => {
        if ($el.text() === "REDMI") {
          cy.wrap($el).click()
        }
      })
      mobilepage.chooseproduct().click()
      cy.get("._3mL9c2 >._1z5ndO [data-value='MOBGC9GYCHQZK9GW']").each(($el) => {
        if ($el.text() === "REDMI 10 (Pacific Blue, 64 GB)") {
          cy.wrap($el).click({ force: true })
        }
        console.log(($el).text())
      })
      cy.wait(2000)
      cy.go('back')
      return false
    }


  })
})


//wish list
When('user mouse over on the Flipkary dropdown', function () {
  wishlistpage.mouseoveronflipkarticon().trigger('mouseover')
})
Then('visibility of the dropdown details', function () {
  wishlistpage.flipkartdropdownvisibility().invoke('show')
})
Then('click on wishlish text in flipkartdropdown', function () {
  wishlistpage.clickwishlist().click({ force: true })
})
And('verify the wishlist page', function () {
  cy.get('._3FVYY1>span').should('be.visible')
})
Then('select the product by text and click on the product', function () {
  cy.get('._3E8aIl.sTQ7AV :nth-child(1)>._3hscEA').each(($e3, index, $list) => {
    const textveg = ($e3.text())
    if (textveg.includes('Roadster Men Checkered Casual Brown Shirt')) {
      cy.wrap($e3).click()
    }


    //Add to cart page


    //Logout page
    When('user mouseover on flipkartdropdown')
    {
      logout.mouseoveronflipkartDropdown().trigger('mouseover')

    }
    Then('click on loggout text')

    {
      logout.clicklogut().click();
    }



  })
})