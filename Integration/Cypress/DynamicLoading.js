/// <reference types="Cypress"

describe('Internet Examples for cypress Automation', function () {
    this.beforeEach(function () {

        cy.visit('https://the-internet.herokuapp.com/')

    })
it.only('Dynamic loading',function()
{

    cy.get('a[href="/dynamic_loading"]').click()
    cy.get('[href="/dynamic_loading/1"]').click()
    cy.get('button').click()
    Cypress.Cookies.debug(true)
    cy.getCookies
    cy.get('div#loading').should('be.visible')   
    cy.get('#finish > h4').should('have.text','Hello World!').invoke('show')
    //cy.load()
})


})