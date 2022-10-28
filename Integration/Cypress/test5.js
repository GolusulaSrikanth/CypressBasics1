/// <reference types="Cypress" />
require('cypress-xpath');
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })



        / 1
    it.skip('Navigate to the url ', function () {
        cy.visit(this.data.url)
        //1.with contains
        cy.contains('A/B Testing').click()
        //2.with actions
        // cy.get('ul > :nth-child(1)').click('left')
        //3.normal click function
        //cy.get(':nth-child(1) > a').click()
        //    var data=cy.get("div[class='example']>p")
        //     console.log(data.text())
        //     cy.go('back')
        cy.wait(3000)
        cy.xpath('//*[@id="content"]/div/p').within($frame => {
            const frame_top = $frame.text()
            console.log(frame_top)
        });

    })


    //input 
    it.skip("input selector", () => {
        cy.visit("https://the-internet.herokuapp.com/inputs")
        cy.get(".example>input[type='number']").type(7).should('be.visible')


    })

    //Hover
    it.skip('hovers', () => {
        cy.visit("https://the-internet.herokuapp.com/hovers")
        //cy.get('#left11').should('not.be.visible')
        cy.get(":nth-child(3) > img").trigger('mouseover')
        cy.get("a[href='/users/1']").should('be.visible')
            .wait(1000)
        // cy.get('#menu1' ).trigger('mouseout')
        // cy.get('#left11'). should('not.be.visible')

    })

    it.skip('hovers', function () {

       // cy.get("a[href='/hovers']").click()
       cy.visit("https://the-internet.herokuapp.com/hovers")
        cy.get(".example > div:nth-child(3)").trigger('mouseover').invoke('show')
        cy.get(".example > div:nth-child(3)").should('be.visible')

        cy.get('.figcaption').should('include.text', 'user1')//.invoke('show')

        cy.get("a[href='/users/1']").invoke('show').click({ force: true })
        cy.go('back')

        cy.get('.figcaption').should('include.text', 'user2')
        cy.get("a[href='/users/2']").invoke('show').click({ force: true })
        cy.go('back')

        cy.get('.figcaption').should('include.text', 'user3')
        cy.get("a[href='/users/3']").invoke('show').click({ force: true })



        //cy.get('span#range').should('have.text', 2)

    })
    it.skip('Redirect', function () {
     cy.visit("https://the-internet.herokuapp.com/jqueryui/menu")
     cy.get('a[href="http://api.jqueryui.com/menu/"]').click()
     cy.go('back')

    })
    it.only('Redirect', function () {
    cy.visit("https://www.google.co.in/")
    cy.get("input[name='q']").type('gmail{Enter}')
    

})
})