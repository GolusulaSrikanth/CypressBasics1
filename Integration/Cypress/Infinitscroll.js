/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })
    it.skip('Scroll Infinite', function () {
        cy.visit(this.data.url)
        cy.get("a[href='/infinite_scroll']").click()
        cy.window().scrollTo("bottom")
        cy.get('.jscroll-added').should('be.visible')
        // cy.get('.jscroll-added').should('not.be.visible')
        //cy.get('.jscroll-inner')
        cy.get('.jscroll-added').should('have.length', 2)
        cy.get('.scroll.large-8.columns.large-centered>.jscroll-inner').should('have.length', 1)


        cy.window().scrollTo("bottom")
        cy.get('.jscroll-added').should('be.visible')
        cy.get('.jscroll-added').should('have.length', 2)
        cy.wait(3000)


        cy.window().scrollTo("bottom")
        cy.get('.jscroll-added').should('be.visible')
        cy.get('.jscroll-added').should('have.length', 3)


        cy.wait(3000)
        cy.window().scrollTo("bottom")
        cy.get('.jscroll-added').should('be.visible')
        cy.get('.jscroll-added').should('have.length', 5)

        cy.get('div.jscroll-added').then((row) => {
            //         //row.length will give you the row count
            cy.log(row.length);
        })
    })


    // it.only('fetches N-items at a time',()=>{

    //     cy.visit("https://the-internet.herokuapp.com/infinite_scroll")
    //     cy.get('.jscroll-added').should('have.length.greaterThan', 5)
    //     .then(quotes=>{
    //         cy.window().scrollTo('buttom')
    //         cy.get('.jscroll-added').should('have.lenth',quotes.lenth*2)
    //         cy.window().scrollTo('buttom')
    //         cy.get('.jscroll-added').should('have.lenth',quotes.lenth*3)


    //     })

    //  })


    // cy.visit(this.data.url)
    // cy.get('.quote').should('have.length.greaterThan', 5)
    //     .then(quotes⇒ {
    //         cy.window().scrollTo('bottom')
    // cy.get('.quote').should('have.length', quotes.length*2)
    // cy.window().scrollTo('bottom')
    // cy.get('.quote').should('have.length', quotes.length*3)
    // cy.window().scrollTo('bottom')
    // cy.get('.quote').should('have.length', quotes.length *4)
    // })


    // it('fetches quotes from API', ()⇒ {
    //     cy.intercept('GET', '**/v1/quotes/*').as('quotes')
    // cy.visit('/')
    // cy.wait('@quotes')
    // cy.get('.quote').should('have.length', -10)
    // cy.window().scrollTo('bottom')
    // cy.wait('@quotes')
    // cy.get('.quote').should('have.Length', 20)
    // cy.window().scrollTo('bottom")
    // cy.wait('@quotes')
    // cy.get('.quote').should('have.length', 30)
    // cy.window().scrollTo('bottom')
    // cy.wait('@quotes')
    // cy.get('.quote').should('have.length', 40)
    // })




    it.only('Key Presses', function () {

        cy.visit(this.data.url)
        cy.get("a[href='/key_presses']").click()
        cy.get('input').type('{ENTER}')
        //cy.get('p#result').should('have.text','You entered: ENTER')
    
        cy.get('#target').type('tab order')
        cy.get('input').type('{del}')
        cy.get('input').type('{backspace}')
        cy.get('input').type('{home}')

        cy.get('input').type('{moveToEnd}')   // Move cursor to the end of typeable element
        cy.get('input').type('{moveToStart}') // Move cursor to the start of typeable element
        cy.get('input').type('{pageDown}')    // Scroll down
        cy.get('input').type('{pageUp}')      // Scroll up
        cy.get('input').type('{selectAll}')   // Select the entire input value

        // Arrows:
        cy.get('input').type('{upArrow}')
        cy.get('input').type('{downArrow}')
        cy.get('input').type('{leftArrow}')
        cy.get('input').type('{rightArrow}')

        // Modifier keys:
         cy.get('input').type('{shift}')
         cy.get('input').type('{ctrl}')
         cy.get('input').type('{alt}')



        // cy.get('whatever').type('Test all the things', { force: true });


    })



})