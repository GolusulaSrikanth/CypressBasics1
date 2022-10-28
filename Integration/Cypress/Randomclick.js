/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    this.beforeEach(function () {

        cy.visit('https://the-internet.herokuapp.com/')

    })
    it.only('random click', function () {


        cy.get('#content>ul>li')
            .should('have.length.greaterThan', 0)
            .its('length')
            .then(cy.log)
            .then((n) => Cypress._.random(0, n - 1))
            .then(cy.log)
            .then((k) => {
                cy.get('#content>ul>li')
                    .eq(k)
                    .click()
                    //.should('have.text', 'Dynamic Loading')
            })
    })
})//Cypress._.random(0, n - 1))