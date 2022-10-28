/// <reference types="Cypress"

describe('Internet Examples for cypress Automation', function () {
    this.beforeEach(function () {

        cy.visit('https://the-internet.herokuapp.com/')

    })
    it.only('geolocation', () => {
        cy.url().should('include', 'herokuapp')
            .and('not.eq', 'https://the-internet.herokuapp.in')
            .and('not.contain', 'internal')

        cy.get("a[href='/geolocation']").click()
           


        //explicit assertion
        let expectname = 'Geolocation';
        cy.get('h3').then((x) => {
            let actual = x.text()
            expect(actual).to.equal(expectname)
        })
        cy.get('#demo').should('have.text','Click the button to get your current latitude and longitude')

        //cy.get('button').click({force:true})
        cy.wait(2000)
        cy.get("button[onclick='getLocation()']").click({force:true})
        cy.wait(10000)
        cy.on('window:confirm', function (confirmText) {
            expect(confirmText).eq('Know your location')
            return true
        })
        cy.contains('Allow').click()
    
    })

})