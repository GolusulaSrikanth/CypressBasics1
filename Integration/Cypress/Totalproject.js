/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })
    it.skip('Cypress commands are Asych', function () {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('ul > :nth-child(1)').click('left')
        cy.get('#content>div>h3').should('include.text', 'A/B Test Control')
        var dta1 = cy.get('#content>div>h3').invoke('show')
        console.log(dta1.textContent)
        cy.get('.example>h3').should('have.text', 'A/B Test Control')
      
      
        cy.get('.large-4 > div > a').invoke('removeAttr', 'target').click('center')
      
        cy.get('h2.subheader').should('have.text', 'A free, once-weekly e-mail on how to use Selenium like a Pro')
    })
    //verification of heading
    it.skip('Cypress commands are Asych', function () {
        cy.visit(this.data.url)
        cy.get("h1").then(function (heading) {
            var headingstr = heading.text()
            cy.log(headingstr)
            expect(heading).to.equal("Welcome to the-internet")
            //console.log('In inside')
        })

        // console.log('In outside')
    })


    //verifycation of text
    it.skip('Navigate to the url ', function () {
        cy.visit(this.data.url)
        cy.get('ul > :nth-child(1)').click('left')
        cy.get('.example>h3').should('have.text', 'A/B Test Control')
        cy.go('back')
    })



    //Adding  and Removing Elements 
    it.skip('Add/remove element in the page', function () {
        cy.visit(this.data.url)
        cy.contains('Add/Remove Elements').click().should('be.visible')
        cy.get('#content>h3').should('have.text', 'Add/Remove Elements')
        cy.get('button').click()
        cy.get('.added-manually').click()
        cy.go('back')
    })




    //Broken images
    it.skip('click on broken images', function () {
        cy.visit(this.data.url)
        cy.get(':nth-child(4) > a').click().should('be.visible')
        cy.go('back')
    })





    //counting the no of rows and columns in table

    it.skip('Count the No of rows and columns in table ', function () {
        cy.visit(this.data.url)
        cy.get(':nth-child(5) > a').click()
        //no of rows
        // cy.get("div[class='large-10 columns'] table")
        //     .find("tr")
        //     .then((row) => {
        //         //row.length will give you the row count
        //         cy.log(row.length);
        //     })

        cy.get("div[class='large-10 columns'] table").contains('td', 'Phaedrum1').then((row) => {
            cy.log(row.text())
        });
        //no of rows
        cy.get('tbody tr').should('have.length', 10)
        //no colums
        cy.get('tbody tr:eq(0)>td').should('have.length', 7)
        cy.go('back')
    })




    //print The whole data of table

    it.skip('get the whole table data', function () {
        //get whole table data
        cy.visit(this.data.url)
        cy.get(':nth-child(5) > a').click()
        cy.get("div[class='large-10 columns']>table>tbody>tr")
            //total rows data
            .each(function ($row, index, $rows) {
                //in side rows data
                cy.wrap($row).within(function () {
                    //rows inside columns
                    cy.get('td')
                        //columns data
                        .each(function ($celldata, index, $columns) {
                            cy.log($celldata.text())
                        })

                })
            })
    })
    //Getting Single Row Data
    it.skip('Get single row data', function () {
        cy.visit(this.data.url)
        cy.get(':nth-child(5) > a').click()
        cy.get("div[class='large-10 columns']>table>tbody>tr").first()
            .within(function () {
                cy.get('td').eq(4).should('contain.text', 'Consequuntur0')
            })
    })

    //Dynamic buttons
    it.skip('Dynamic buttons', function () {
        cy.visit(this.data.url)
        cy.get(':nth-child(5) > a').click()
        cy.get('.large-2.columns').each(function ($celldata, index, $columns) {
            cy.log($celldata.text()).should('be.visible')
        })
    })



    //check box
    it.skip('check box', function () {
        cy.visit(this.data.url)
        cy.contains('Checkboxes').click()
        cy.get(':checkbox').first().check()
        cy.get(':checkbox:eq(1)').should('be.checked').and('have.value', 'on')
        cy.get('#checkboxes >:nth-child(3)').uncheck().should('not.be.checked')

    })

    //DropDowns
    it.skip('Dropdown', function () {
        cy.visit(this.data.url)
        cy.contains('Dropdown').click()
        //select by value
        // cy.get("#dropdown").select(1)
        //select by  text
        cy.get("#dropdown").select('Option 1')
        cy.get("#dropdown").children().first().then(function (dropdownfile) {
            cy.log(dropdownfile.text()).should('be.visible')
        })



    })


    // JavaScript Alert type
    it.skip('Alert type', function () {
        cy.visit(this.data.url)
        cy.contains('JavaScript Alerts').click()
        cy.on('window:alert', function (alerText) {
            expect(alerText).eq('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
        cy.go('back')
    })

    //confirm type Alert
    it.only('Confirm type cancel Alert', function () {
        cy.visit(this.data.url)
        cy.contains('JavaScript Alerts').click()
        cy.on('window:confirm', function (confirmText) {
            expect(confirmText).eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')
    })


    //confirm type alert
    it.only('Confirm type ok Alert', function () {
        cy.visit(this.data.url)
        cy.contains('JavaScript Alerts').click()
        cy.on('window:confirm', function (confirmText) {
            expect(confirmText).eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
    })


    //prompt alert type
    it.skip('Prompt type Alert', function () {
        cy.visit(this.data.url)
        cy.contains('JavaScript Alerts').click()
        cy.window().then(function ($win) {
            cy.stub($win, 'prompt').returns('Hello')
            cy.contains('Click for JS Prompt').click()
            cy.get('p#result').should('have.text', "You entered: Hello")
            //expect('p#result').to.contains('You entered: Hello');

        })
    })



    //Drag And drop element

    it.skip('Drag and drop', function () {
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

    //verify the drag  and drop functionality
    it.skip('Check whether the drag and drop  is possible', function () {

        cy.get('#column-b').should('have.text', 'A')
        cy.go('back')
    })


    //Multiple windows

    it.skip('multiple windows', function () {
        cy.visit(this.data.url)
        cy.contains('Multiple Windows').click()
        cy.contains('Click Here').invoke('removeAttr', 'target').click().should('be.visible')
        cy.go('back').go('back')
    })


    //Shadow wlwments

    it.skip('Shadow dom', function () {

        cy.visit(this.data.url)
        cy.get(':nth-child(38)>a').click()
        cy.get('#content').find('my-paragraph')
            .find("span[slot='my-text']", { includeShadowDom: true })
            .should('have.text', "Let's have some different text!")

    })

    //input 

    it.skip("input selector", function () {
        cy.visit(this.data.url)
        cy.contains('Inputs').click()
        //cy.visit("https://the-internet.herokuapp.com/inputs")
        cy.get(".example>input[type='number']").type(7).should('be.visible')


    })


    //hovers functionality

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


    })


    //Horigental slider

    it.skip('horigental slider', function () {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider')
        cy.get("input[type='range']").invoke("val", "4").trigger("change")
        cy.get('span#range').should('have.text', 4)

    })


    //File uploading
    it.skip('uploading', function () {
        cy.visit(this.data.url)
        cy.get(':nth-child(18) > a').click()
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/images/error.png', {
            action: 'drag-drop'
        })
        cy.get('#file-submit').click()
    })

    //file download
    it.skip('File download using cypress-file-upload npm package', function () {
        cy.visit(this.data.url)
        cy.get("a[href='/download']").click()
        cy.downloadFile('https://the-internet.herokuapp.com/download', 'C:/Users/srikanth.golusula/Downloads/cypressdownload', 'Selenium.docx')

    })

    //Key presses
    it.skip('Key Presses', function () {
        cy.visit(this.data.url)
        cy.get("a[href='/key_presses']").click()
        cy.get('input').type('{ENTER}')
    })

    //Redirect url
    it.skip('Redirect', function () {
        cy.visit("https://the-internet.herokuapp.com/jqueryui/menu")
        cy.get('a[href="http://api.jqueryui.com/menu/"]').click()
        cy.go('back')

    })

    //wysiwyg editor
    it.skip('WYSIWYG Editor', function () {
        cy.get("a[href='/tinymce']").click()
        cy.get('#mce_0_ifr').then(function ($Iframe) {
            const IframeContest = $Iframe.contents().find('body')
            cy.wrap(IframeContest)
                .clear()
                .type('HELLO!')

        })

    })

    //Form Authentication
    it.skip('Form Authentication', function () {
        cy.get("a[href='/login']").click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').should('include.text', 'You logged into a secure area')
        cy.get('.button').click()

    })
})