/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })

    //1
    it.only('Navigate to the url ', function () {
        cy.visit(this.data.url)
        //1.with contains
        //cy.contains('A/B Testing').click()
        //2.with actions
        cy.get('ul > :nth-child(1)').click('left')
        //3.normal click function
        //cy.get(':nth-child(1) > a').click()

        cy.go('back')
    })
    //2
    it('Add/remove element in the page', function () {
        // cy.visit(this.data.url)
        cy.contains('Add/Remove Elements').click().should('be.visible')
        cy.get('button').click()
        cy.get('.added-manually').click()
        cy.go('back')
    })
    //3 
    it('login to the page with valid username and password', function () {
        cy.contains('Basic Auth').click().invoke('show')
        //cy.contains('Elemental Selenium').invoke('removeAttr','target').click()
        cy.go('back')
    })
    //4
    it('click on broken images', function () {
        cy.get(':nth-child(4) > a').click()
        cy.go('back')
    })

    //5
    it.only('Count the No of rows and columns in table ', function () {
        cy.get(':nth-child(5) > a').click()
        //no of rows
        cy.get("div[class='large-10 columns'] table")
            .find("tr")
            .then((row) => {
                //row.length will give you the row count
                cy.log(row.length);
            })

        cy.get("div[class='large-10 columns'] table").contains('td', 'Phaedrum1');
        //no of rows
        cy.get('tbody tr').should('have.length', 10)
        //no colums
        cy.get('tbody tr:eq(0)>td').should('have.length', 7)
        //cy.get("div[class='large-10 columns']>table>tbody>tr:nth-child(1)>td").should('have.length', 7)
        cy.go('back')
    })
    //6
    it('get the whole table data', function () {
        //get whole table data
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

    //7
    it('Get single row data', function () {
        cy.get("div[class='large-10 columns']>table>tbody>tr").first()
            .within(function () {
                cy.get('td').eq(4).should('contain.text', 'Consequuntur0')
            })
    })

    //8
    it('Get single row data', function () {

        cy.get("div[class='large-10 columns']>table>tbody>tr").eq(2)
            .within(function () {
                cy.get('td').eq(5).should('contain.text', 'Phaedrum2')
            })
    })

    //9
    it('Get specific cell value based on another cell', function () {
        cy.get("div[class='large-10 columns']>table").contains('Iuvaret4').parent()
            .within(function () {
                cy.get('td').eq(4).then(function (websiteLink) {
                    cy.log(websiteLink.text())
                })
            })
    })



    it('Get single row data', function () {
        cy.get("div[class='large-10 columns']>table>tbody>tr").eq(3)
            .within(function () {
                cy.get('td').eq(6)
                    .within(function () {
                        cy.get('a').eq(1)
                            .invoke('show').click()
                    })
            })
    })

    it.skip('Dynamic buttons', function () {
        cy.get('.large-2.columns').each(function ($celldata, index, $columns) {
            cy.log($celldata.text())
        })
    })


    it.only('Dynamic buttons', function () {
        cy.get('.large-2.columns').first().dblclick().focused().should('be.visible')

    })

})