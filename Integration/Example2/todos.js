import 'cypress-if';
//Adds a todo item
//const addItem = (text: String) =>
cy.get('.new-todo').type('${text}{enter}');
beforeEach(() =>{
cy.visit('/');
cy.get('#app').should('have.class' , 'loaded');
cy.get('li.todo .destroy' , {timeout: 0})
.if()
.click({ force: true, multiple: true })
.else()
.log('** nothing to clean up **');
cy.get('li.todo'). should('have.Length', 0);
});
it('adds two items starting with zero' , () =>{
// this test does not clean up after itself
// leaving two items for the other test
addItem('first item');
addItem('second item');
cy.get('li.todo').should('have.length' , 2);
});


import "cypress-if"
cy.get('.mybox')
  .if('not.checked').click()

  cy.get('li.todo .destroy', { timeout: 0 })
  .if()
  .click({ force: true, multiple: true })
  .else()
  .log('**nothing to clean up**');