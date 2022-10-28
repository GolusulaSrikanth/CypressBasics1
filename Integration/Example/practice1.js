/// <reference types="Cypress" />
describe('practice the cypress code suit',function()
{
  it('my first practice code test case',function()
  {
   
   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   //check the option1
   cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')
  //uncheck the option1
   cy.get('#checkBoxOption1').uncheck().should('not.be.checked').should('have.value','option1')
  //static drop down
   cy.get('Select').select('option3').should('have.value','option3')
  //dynamic drop down
   cy.get('#autocomplete').type('ind')

   cy.get('.ui-menu-item').each(($e1,index,$list)=>
   {
    if($e1.text()==="India")
    {
        cy.wrap($e1).click()
    }

   })
   //radio button
   cy.get('[value="radio2"]').check().should('be.checked')

    cy.get('#name').type('srikanth')
    cy.get('#alertbtn').click()
    
   })



})