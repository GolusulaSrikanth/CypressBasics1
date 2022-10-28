/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
Given('user lands on Dashboard of  the application', () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.url().should('include', 'herokuapp.com')


})

// Given('User lands on InternetHerokuApp Dashboard page',function (){
//   cy.visit("https://the-internet.herokuapp.com/")
//   //asserstion
//   cy.url().should('include', 'herokuapp.com')
// })




When('User Click on AB Testing button', function () {

  cy.get('.heading').should('have.text', 'Welcome to the-internet')
  cy.get('.heading').should('include.text', 'the-internet')
  cy.get('.heading')
    .invoke('text')
    .should('match', /^Welcome/)

  cy.get('ul > :nth-child(1)').click('left')


})

And('User validate data on the page', function () {

  cy.get('#content>div>h3').should('include.text', 'A/B Test Control')
  var dta1 = cy.get('#content>div>h3').invoke('show')
  console.log(dta1.textContent)
  cy.get('.example>h3').should('have.text', 'A/B Test Control')


  // cy.get('.large-4 > div > a').invoke('removeAttr', 'target').click('center')

  // cy.get('h2.subheader').should('have.text', 'A free, once-weekly e-mail on how to use Selenium like a Pro')
  // cy.go('back').go('back')
  // cy.wait(1000)
  // //cy.location('pathname').should('not.include', 'navigation')
})

When('User Click on Drag and drop Testing button', function () {

  cy.get("a[href='/drag_and_drop']").click()


})

And('Drag and drop box A on the box B and validate text', function () {

  const dataTransfer = new DataTransfer();
  cy.get('#column-a').trigger('dragstart', {
    dataTransfer
  });

  cy.get('#column-b').trigger('drop', {
    dataTransfer

  });
  cy.get('#column-b').should('have.text', 'A')

  cy.get('#column-b').trigger('dragstart', {
    dataTransfer
  });

  cy.get('#column-a').trigger('drop', {
    dataTransfer
  });
  cy.get('#column-a').should('have.text', 'A')

})

When('User Click on the Add Removing Element Text', function () {
  //cy.contains('Add/Remove Elements').click()//.should('be.visible')
  cy.get("a[href='/add_remove_elements/']").click()
})
And('User validate Add/removing data text on the page', function () {
  cy.get('#content>h3').should('have.text', 'Add/Remove Elements')
})

When('User Click on DropDown Testing button', function () {

  cy.get("a[href='/dropdown']").click()

})

And('User will able to select on the option in Dropdown list', function () {
  cy.get('#dropdown').select(1).invoke("val").should("eq", "1")//
  cy.get('#dropdown').select('Option 2').invoke("val").should("eq", "2")

})

When('User Click on Checkboxes Testing button', function () {

  cy.get('ul > :nth-child(6)').click('left')

})

And('User click on the checkbox 1 and validate', function () {

  cy.get('#checkboxes > :nth-child(1)').click()
  cy.get('#checkboxes > :nth-child(1)').uncheck().should('not.be.checked').and('have.value', 'on')
  cy.get('#checkboxes > :nth-child(3)').click({ force: true })
  cy.get('#checkboxes > :nth-child(3)').check().should('be.checked').and('have.value', 'on')

})

When('User Click on Context Menu Testing button', function () {

  cy.get('ul > :nth-child(7)').click('left')

})

And('User Right click on the box', function () {

  cy.get('.example > :nth-child(2)').should('have.text', 'Context menu items are custom additions that appear in the right-click menu.')
  cy.get('#hot-spot').rightclick('bottomRight')
  cy.on('window:alert', (txt) => {
    //Mocha assertions
    expect(txt).to.contains('You selected a context menu')
  })
})

When('User Click on Form Authentication Testing button', function () {

  cy.get("a[href='/login']").click()

})

And('User click on the username and enter the username', function () {

  cy.get('#username').type('tomsmith')

})

And('User click on the password and enter the password', function () {

  cy.get('#password').type('SuperSecretPassword!')

})

Then('User click on the Login button', function () {
  cy.get('.radius').click()

})

And('User validates login successfully or not', function () {
  cy.get('#flash').should('include.text', 'You logged into a secure area')
  cy.get('.button').click()

})


//Jquery ui
When('User Click on JQueryUI Menu Testing button', function () {
  cy.get('a[href="/jqueryui/menu"]').click()

})

// And('User clicks on the JQuery link', function () {

//   cy.get('a[href="http://api.jqueryui.com/menu/"]').click()
// })

// And('user clicks on the Selectors in Jquery UI menu', function () {
//   cy.wait(1000)
//   cy.get("a[href='//api.jqueryui.com/category/selectors/']").click()
//   cy.get("a[title='Permalink to :data() Selector']").should('have.text', ":data() Selector")

// })


//challengingdom elements
When('user click on the Challeningdown element text', function () {
  cy.get(':nth-child(5) > a').click()
})
Then('user counting the now of rows in table', function () {
  cy.get("div[class='large-10 columns'] table").contains('td', 'Phaedrum1').then((row) => {
    cy.log(row.text())
  })
})
And('user verify the colums length', function () {
  cy.get('tbody tr:eq(0)>td').should('have.length', 7)
})
Then('user print the data of particular columns inside rows at  table', function () {
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
And('print the single row data from table', function () {
  cy.get("div[class='large-10 columns']>table>tbody>tr").first()
    .within(function () {
      cy.get('td').eq(4).should('contain.text', 'Consequuntur0')
    })
})

//JavaScript Alert
When('user click on Javascript Alert Element', function () {
  cy.contains('JavaScript Alerts').click()
})
Then('user validate the page details', function () {
  cy.on('window:confirm', function (confirmText) {
    expect(confirmText).eq('I am a JS Confirm')
    return false
  })
})
And('user click on Js Alert button', function () {
  cy.contains('Click for JS Confirm').click()
})
And('user verify the text after alert popup cancle', function () {
  cy.get('#result').should('have.text', 'You clicked: Cancel')
})
Then('user click on the Js Confrom button',function(){
  cy.contains('JavaScript Alerts').click()
        cy.on('window:confirm', function (confirmText) {
            expect(confirmText).eq('I am a JS Confirm')
            return true
        })

})
And('user click on ok button in Alertpopup',function()
{ 
  cy.contains('Click for JS Confirm').click()
})
And('user verify the text after alert popup Confrom',function(){
  cy.get('#result').should('have.text', 'You clicked: Ok')
})
