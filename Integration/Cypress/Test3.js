/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })


    it('Drag and drop', function () {
        cy.visit(this.data.url)
        cy.contains('Drag and Drop').click()
        //cy.get('#column-a').trigger('drag')
        const dataTransfer = new DataTransfer();

        cy.get('#column-a').trigger('dragstart', {
            dataTransfer
        });

        cy.get('#column-b').trigger('drop', {
            dataTransfer
        })
        cy.get('#column-b').trigger('dragend').should('have.text', 'A')
    })

    it('should drag A to B', () => {

        cy.get('#column-a').drag('#column-b')
    })

    it('Check whether the drag and drop  is possible', function () {

        cy.get('#column-a').should('have.text', 'B')
        cy.go('back')
    })


    it('multiple windows', function () {
        cy.contains('Multiple Windows').click()
        cy.contains('Click Here').invoke('removeAttr', 'target').click().should('be.visible')
        cy.go('back').go('back')
    })

    it.only('Shadow dom', function () {

        cy.visit("https://the-internet.herokuapp.com/")
        cy.get(':nth-child(38)>a').click()
        cy.get('#content').find('my-paragraph')
            .find("span[slot='my-text']", { includeShadowDom: true })
            .should('have.text', "Let's have some different text!")

    })

    it('Notication masssege', function () {
        cy.visit('https://the-internet.herokuapp.com/notification_message_rendered')
        cy.contains('Click here').click()
    })

    it('should trigger and approve notifications', () => {
        cy.visit('https://the-internet.herokuapp.com/notification_message_rendered', {

            //     onBeforeLoad(win) {
            //         cy.stub(win.Notification, ' request Permission').resolves('granted').as('permission')
            //         cy.stub(win, 'Notification').as('Notification')
            // }
        });
        cy.contains('Click here').click()
        cy.get('@permission').should('have. been.calledOnce')
            .and('have.been. called Before', cy.get('@permission'))
    })

})
