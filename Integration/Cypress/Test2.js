/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })


    it.only('Cypress commands are Asych', function () {
        cy.visit(this.data.url)
        cy.get("h1").then(function (heading) {
            var headingstr = heading.text()
            cy.log(headingstr)

            console.log('In inside')
        })

        console.log('In outside')
    })


    it('check box', function () {
        cy.contains('Checkboxes').click()
        cy.get(':checkbox').first().check()
        cy.get(':checkbox:eq(1)').should('be.checked').and('have.value', 'on')
        cy.get('#checkboxes >:nth-child(3)').uncheck().should('not.be.checked')

    })
    it('Dropdown', function () {
        cy.contains('Dropdown').click()
        //select by value
        // cy.get("#dropdown").select(1)
        //select by  text
        cy.get("#dropdown").select('Option 1')
        cy.get("#dropdown").children().first().then(function (dropdownfile) {
            cy.log(dropdownfile.text())
        })



    })

    it('Alert type', function () {

        cy.contains('JavaScript Alerts').click()
        cy.on('window:alert', function (alerText) {
            expect(alerText).eq('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.go('back')
    })

    it('Confirm type cancel Alert', function () {
        cy.contains('JavaScript Alerts').click()
        cy.on('window:confirm', function (confirmText) {
            expect(confirmText).eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
    })

    it('Confirm type ok Alert', function () {
        cy.contains('JavaScript Alerts').click()
        cy.on('window:confirm', function (confirmText) {
            expect(confirmText).eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
    })

    it.only('Prompt type Alert', function () {
        cy.contains('JavaScript Alerts').click()
        cy.window().then(function ($win) {
            cy.stub($win, 'prompt').returns('Hello')
            cy.contains('Click for JS Prompt').click()
            cy.get('p#result').should('have.text', "You entered: Hello")
            //expect('p#result').to.contains('You entered: Hello');

        })
    })


})