
/// <reference types="Cypress"
describe('Internet Examples for cypress Automation', function () {



    it.skip('Assertion Demo', () => {

        cy.visit("https://the-internet.herokuapp.com/")

        //implicit Assertions

        //1.should 
        // cy.url().should('include','herokuapp')
        // cy.url().should('eq','https://the-internet.herokuapp.com/')
        // cy.url().should('contain','internet')


        //insted of should we use and
        cy.url().should('include', 'herokuapp')
            .and('not.eq', 'https://the-internet.herokuapp.in')
            .and('not.contain', 'internal')

        cy.title()
            .should('include', 'Internet')
            .and('eq', 'The Internet')
            .and('contain', 'The')
            .and('exist')

        cy.xpath('//a').should('have.length', 46)

    })



    it.skip("explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then((x) => {
            let actName = x.text()
            // BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)
            // TDD Style
            assert.equal(actName, expName)
            assert.notequal(actName, expName)

        })
    })


    it.only('Ragav class', () => {
        cy.visit('https://example.cypress.io/')
        cy.contains('get').click()
        cy.get('#query-btn')
            .should('contain', 'Button')
            .should('have.class', 'query-btn')
            .should('be.visible')
            .should('be.enabled')
        cy.get('#query-btn').invoke('attr', 'id')
            .should('equal', 'query-btn')
        cy.get('#query-btn')
            .should('contain', 'Button')
            .and('have.class', 'query-btn')

        // Explicit assertions
        // expect
        expect(true).to.be.true
        let name = 'Raghav'
        expect(name).to.be.equal('Raghav')
        // assert
        assert.equal(4, 4, ' Not Equal')
        assert.strictEqual(4, 4, 'Not Strictly Equal')
    })
})