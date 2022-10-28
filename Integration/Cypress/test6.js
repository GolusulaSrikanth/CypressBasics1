
/// <reference types="Cypress" />


describe('Internet Examples for cypress Automation', function () {
    this.beforeEach(function () {

        cy.visit('https://the-internet.herokuapp.com/')

    })
    // before(function () {
    //     cy.fixture('InternetExample').then(function (data) {
    //         this.data = data;
    //     })
    // })
    it.skip('Cypress commands are Asych', function () {
        // cy.visit(this.data.url)
        // cy.visit(this.data.url)
        cy.visit("https://the-internet.herokuapp.com/")
        cy.get('a[href="/jqueryui/menu"]').click()
        //cy.visit("https://the-internet.herokuapp.com/jqueryui/menu")
        cy.get('a[href="http://api.jqueryui.com/menu/"]').click()
        cy.get("a[href='//api.jqueryui.com/category/selectors/']").click()
        cy.get("a[title='Permalink to :data() Selector']").should('have.text', ":data() Selector")
        cy.go('back').go('back')
        cy.wait(3000)
        //cy.get('li.ui-state-disabled.ui-menu-item').should('be.visibile')



        cy.contains("Enabled").trigger('mouseover')
        cy.get('#ui-id-4').trigger('mouseover').invoke('show')
        cy.get('#ui-id-5').invoke('show').click({ force: true })
        cy.downloadFile('https://the-internet.herokuapp.com/jqueryui/menu', 'C:/Users/srikanth.golusula/Downloads/cypressdownload', 'menu.pdf')
        cy.go('back')




        // cy.contains("Back to JQuery UI").should('be.visible')
        // cy.get('#ui-id-4')

    })

    it.skip('WYSIWYG Editor', function () {
        cy.get("a[href='/tinymce']").click()
        cy.get('#mce_0_ifr').then(function ($Iframe) {
            const IframeContest = $Iframe.contents().find('body')
            cy.wrap(IframeContest)
                .clear()
                .type('HELLO!')

        })


    })



    it.skip('Form Authentication', function () {
        cy.get("a[href='/login']").click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').should('include.text', 'You logged into a secure area')
        cy.get('.button').click()

    })


    it.skip('Shifting content', function () {
        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains("Shifting Content").click()

    })



    it.skip('Redirect Link Handle Cypress', function () {

        cy.contains('Redirect Link').click()
        cy.get('h3').should('be.visible')
        cy.get("a[id='redirect']").click()

        cy.get("h3").should('be.visible')
        cy.get("a[href='status_codes/200']").click()
        cy.get('p').within(($p) => {
            const Content1 = $p.text()
            cy.log(Content1)

        })
        cy.contains('here').click({ force: true })

        cy.get("a[href='status_codes/301']").click()
        cy.get('p').within(($p) => {
            const Content1 = $p.text()
            cy.log(Content1)

        })
        cy.contains('here').click({ force: true })

        cy.get("a[href='status_codes/404']").click()
        cy.get('p').within(($p) => {
            const Content1 = $p.text()
            cy.log(Content1)

        })
        cy.contains('here').click({ force: true })

        cy.get("a[href='status_codes/500']").click()
        cy.get('p').within(($p) => {
            const Content1 = $p.text()
            cy.log(Content1)

        })
        cy.contains('here').click({ force: true })
        cy.get('p').within(($p) => {
            const Content1 = $p.text()
            cy.log(Content1)
        })
        cy.contains('here').click({ force: true })
        cy.wait(10000)
        cy.get("img[alt='Internet Assigned Numbers Authority']").should('be.visible')
        cy.spy(console, 'log').as('console')
        // cy.get("tbody tr").each(($el, index, $list) => {
        cy.get("tbody tr td[align='center'] ").each(($el, index, $list) => {

            var data = $el.text()
            console.log(data)
        })
        cy.get('pre').within(($p) => {
            const Content1 = $p.text()
            cy.log(Content1)
        })

        cy.contains("XML").click()
        cy.contains("Plain text").click({ force: true })

        cy.get("pre[style='word-wrap: break-word; white-space: pre-wrap;']").within(($p) => {
            const Content1 = $p.text()
            cy.log(Content1)
        })
    })
    it.only('Dynamic contorls', function () {
        cy.get(':nth-child(13) > a').click()

        cy.get('#checkbox > input').check().should('be.checked')

        cy.get('#checkbox-example > button').click()
        cy.get('#message').should('have.text', "It's gone!")

        cy.get('#input-example > button').click()
        cy.get('#message').should('have.text', "It's enabled!")

        cy.get("#input-example>input[type='text']").type('hello')//.should('be.disabled')
        cy.get('#input-example > button').click().should('be.disabled')

        cy.get("#input-example>input[type='text']").should('not.be.disabled')

        cy.get('#message').should('have.text', "It's disabled!")
        cy.get('#input-example > :nth-child(4)').should('be.visible')

        cy.get('#checkbox-example > button').click()
        cy.get('#message').should("have.text", "It's back!")
        cy.get('#checkbox').check().should('be.checked')

        cy.get('#checkbox-example > button').click()
        cy.wait(2000)
        cy.get('#checkbox-example > :nth-child(5)').should('have.text', ' A checkbox')

        cy.get('#checkbox-example > button').click()
        cy.get('#checkbox').check().should('be.checked')
        cy.get('#checkbox-example > button').click()

    })


})
