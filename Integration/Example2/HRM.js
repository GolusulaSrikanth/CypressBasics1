/// <reference types="Cypress" />
     //require('cypress-xpath');
describe('my Flipkart test suit',function()
{

    it('My FirstTest case',function() 
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin")
        cy.get("input[type='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.contains("My Info").click()
        cy.get("input[name='firstName']")
        .clear()
        .invoke("show")
        .type("Srikanth")
        .focused()
        .should('be.visible')
        cy.get("input[name='middleName']")
        .clear()
        .invoke("show")
        .type("Srikanth")
        cy.get("[name='lastName']")
        .clear()
        .type("Golusula")

        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .clear()
        .type("P0181612")

        //calender
       //cy.xpath("(//input[@placeholder='yyyy-mm-dd'])[1]").click()
       // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        // cy.xpath("(// div[@class='datepicker -- cells datepicker -- cells-days"])[1]/div")
        //  .each(($el,index,$list)=>{
        //  var dateName = $el.text()
        // if(dateName =='14')
        //  {
        // cy.wrap($el).click()
        //  })
       //cy.xpath("//div[contains(text(),'25')]").click()
      // cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    //    cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").click({froce:true})
    //   .invoke("show")
       cy.contains("Algerian")
       .click()
   

       cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({force:true})//.should('be.disabled')
       cy.get(".oxd-icon.bi-check.oxd-checkbox-input-icon").check({force:true})
    })

})
