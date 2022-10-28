/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })


    it(' should find a table in the iframe', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').its('0.contentDocument.body').then(cy.wrap).find('#tinymce').should('be.visible')
    })





    it('iFrame Type in the body - JavaScript Way', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').within(fr => {
            const [myIframe] = fr.get()
            myIframe.contentDocument.body.getElementsByTagName('p')[0].textContent = 'Hello every one'

        })
    });

    it.skip('iFrame - Type in the body - jQuery way', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('iframe#mce_0_ifr').within(($frame) => {

            const body = $frame.contents().find('body#tinymce')
            cy.wrap(body).clear().click().type('Test')
        })
    });



    it.skip('Nested Frames Fetch the text JavaScript Way', () => {
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
        cy.get('frame[src="/frame_top"]').within($frame => {
            const [frame_top] = $frame.get()
            const text = frame_top.contentDocument.body.getElementsByTagName('frame')[1]
                .contentDocument.body.querySelector('div#content').innerText
            expect(text).to.be.eql('MIDDLE')
        })
    })


    it.skip('Nested Frames - Fetch the text - jQuery Way', () => {
        // $('frame[src="/frame_top"]').contents(). find('frame[src="/frame_middle"]').co
        cy.visit('https://the-internet.herokuapp.com/nested_frames')
        cy.get('frame[src="/frame_top"]').within($frame => {
            cy.wrap($frame.contents().find('frame[src="/frame_middle"]')).within(fr => {
                cy.wrap(fr.contents().find(' div#content')).should('have.text', 'MIDDLE')
            })

        })
    })

    it('iFrame Type in the body - JavaScript Way', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').then(fr => {
            const [myIframe] = fr.get()
            myIframe.contentDocument.body.getElementsByTagName('p')[0].textContent = 'hello everrir'
        })
    })



    it.only('iframe', function () {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then(function ($iFrame) {
            const iFrameContent = $iFrame.contents().find('body')
            cy.wrap(iFrameContent)
                .clear()
                .click()
                .type('hello')
                
        })
    })

    it('iframe', function () {

        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').its('0.contentDocument.body').
            clear().find('#tinymce').type('hello')
    })

    it("cy iframe", () => {
        cy.visit('https://qavbox.github.io/demo/iframes/')
        //cy.get('#frameinput').type('QAVBOX')
        cy.get('#Frame2').its('0.contentDocument.body').find('#frameinput').type('QAVBOX')
        //cy.get('#Frame2').its('0.contentDocument.body'). find(' #frameinputtext')
        // cy.get('#Frame2').its('0.contentDocument.body').contains('Category3').click()
        //cy.get('#Frame1').its('0.contentDocument.body').find('#frametext')
        //https://github.com/cypress-io/cypress/issues/1433
    })



})