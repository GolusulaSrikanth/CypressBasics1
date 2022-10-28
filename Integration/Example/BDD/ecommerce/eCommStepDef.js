/// <reference types="Cypress" />
import HomePage from'../../../../support/PageObjects/HomePage'
import ProductPage from'../../../../support/PageObjects/ProductPage'
import { Given , When,Then, And} from "cypress-cucumber-preprocessor/steps";

const homepage=new HomePage()
const productPage=new ProductPage()
let name
// cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
// npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// add cucumber report options in package.json ->output.json
// use html report plugin /create js file (pass the details of output.json)
// run js file
Given('I open Ecommerce page', ()=>
{
 cy.visit('https://rahulshettyacademy.com/angularpractice/');
})

//When('I add items to cart',function()
When('User clicks the Login on Header page',function()
{
   homepage.getShop().click()
   this.data.productName.forEach(function(element) 
   {
     cy.selectproduct(element)
   });
    productPage.checkOutButton().click()
})

And('Validate the total prices',function()
{
 var sum=0
 cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>
 {
   const amount=$el.text()
   var res=amount.split(" ")
   res =res[1].trim()
   sum=Number(sum)+Number(res) 
 }).then(function()
  {
   cy.log(sum)
  })
 cy.get('h3 strong').then(function(element)
 {
   const amount=element.text()
   var res=amount.split(" ")
   var total =res[1].trim()
   expect(Number(total)).to.equal(sum)
  })
})
Then('Select the country Submit  and  verify  Thankyou',function()
{
  cy.contains('Checkout').click()
  cy.get('#country').type('India')
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').check({force: true})
  cy.get('.ng-untouched > .btn').click()
  cy.get('.alert').then(function(element)
 {
   const actualtext=element.text()
   expect(actualtext.includes("Success")).to.be.true
 })
})

When('I fill the form details',function(dataTable)
{
  name=dataTable.rawTable[1][0]
  homepage.getEditBox().type(dataTable.rawTable[1][0])
  homepage.getGender().select(dataTable.rawTable[1][1])
})

Then('validate the forms behaviour',function()
{
 homepage.getTwoWayDataBinding().should('have.value',name)
 homepage.getEditBox().should('have.attr','minlength','2')
 homepage.getEntrepreneur().should('be.disabled')
 Cypress.config('defaultCommandTimeout', 8000)
})

And('select the Shop page',function()
{
  homepage.getShop().click()
})
