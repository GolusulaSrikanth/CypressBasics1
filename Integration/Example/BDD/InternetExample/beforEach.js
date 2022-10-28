beforeEach(()=>
{

    cy.fixture('InternetExample').then(function(data)
    {
      this.data=data
    })


})