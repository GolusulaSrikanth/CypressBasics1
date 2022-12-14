/// <reference types="Cypress" />
describe('my thired test suit',function()
{
it('my thired  test case',function()
{
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//check box
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
cy.get('input[type="checkbox"]').check(['option1','option2'])
//static dropdown
cy.get('select').select('option2').should('have.value','option2')

//Dynamic dropdowns
cy.get('#autocomplete').type('ind')
 
cy.get('.ui-menu-item div').each(($e1,index,$list) => {
 
    if($e1.text()==="India")
    {
       cy.wrap($e1).click()
    }


})
//autocomplete
cy.get('#autocomplete').should('have.value','India')
//visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
 
//radio buttons
 
cy.get('[value="radio2"]').check().should('be.checked')

})
})