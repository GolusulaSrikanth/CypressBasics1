/// <reference types="Cypress" />
describe('my Flipkart test suit',function()
  {
      
    
         it('My FirstTest case',function() 
         {
            cy.visit("https://www.tatacliq.com/",)
            cy.wait(5000)
            cy.contains("Categories").trigger('mouseover').should('be.visible')
           
            cy.contains("Men's Fashion").invoke("show").trigger('mouseover').should('be.visible')
            cy.wait(5000)
            cy.get(".DesktopHeader__subCategoryDetailsHolder").each(($e1, index, $list) => {

                const text=$e1.text()
            if(text.includes("Jeans"))
            {
               cy.wrap($e1).click()

            }
        })


        })

})
