/// <reference types="Cypress" />
describe('Internet Examples for cypress Automation', function () {
    before(function () {
        cy.fixture('InternetExample').then(function (data) {
            this.data = data;
        })
    })


    it.skip('horigental slider', function () {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider')
        cy.get("input[type='range']").invoke("val", "1").trigger("change")
        cy.get('span#range').should('have.text', 1)

    })

   

    it('rigth to left slider moving by courser', function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#slider>span").invoke("attr", "style", "left: 20%").scrollIntoView()
    })


    it.only("Slider Test - Materialui", () => {
        cy.visit("https://material-ui.com/components/slider/");

        cy.get("div.css-r6dqg1>.css-1x9ta00>.MuiBox-root.css-1domaf0>.css-190iylv>span>span")
            .last()
            .invoke("attr", "style", "left : 98%;")
            .invoke("attr", "aria-valuenow", "98");

        cy.get("div.css-r6dqg1>.css-1x9ta00>.MuiBox-root.css-1domaf0>.css-190iylv>span>span")
            .eq(1)
            .invoke("attr", "style", "left:0%;width:50%")

        cy.get("div.css-r6dqg1>.css-1x9ta00>.MuiBox-root.css-1domaf0>.css-190iylv>span>span>input")
            .invoke("attr", "value", "98")
            .should("have.value", "98");
    });




     //   it.only("Slider Test - Built from CSS", () =>{

    //     cy.visit("http://127.0.0.1:5500/Help%20Folder/styledslider.html#slide-5");
    //     cy.get("div#slide-2").click({ force: true });
    //     cy.get("div#slide-3").click({ force: true });
    //     cy.get('a[href="#slide-1"]').click();
    //     cy.url().should("include", "#slide-1");
    // })





})