/// <reference types="Cypress" />
import HomePage from '../../support/PageObjects/HomePage'
import  ProductPage from '../../support/PageObjects/ProductPage'
 //frame work and building
 describe('My Ningth Test Suite', function() 
 {
    before(function()
    {
    
      cy.fixture('example').then(function(data)
      {
        this.data=data
      })
    })
  
       it('My FirstTest case',function() 
       {
       const homepage=new HomePage()
       const productpage=new ProductPage()
       cy.visit('https://rahulshettyacademy.com/angularpractice/')
       //cy.visit(cypress.env('url')+"/angularpractice/")
       //enter the name in filed
       homepage.getEditBox().type(this.data.name)
       //select the male drop down
       homepage.getGender().select(this.data.gender)
       //validate name in two way binding
       homepage.getTwoWayDataBinding().should('have.value',this.data.name)
       //validate attribute
       homepage.getEditBox().should('have.attr','minlength','2')
       //validate the radio button is disable
       homepage.getEntrepreneur().should('be.disabled')
       //click shop
       //cy.pause()//this is the pause code and verify the code here 
       //debug---->it deguging the code
       //cypress.defineConfig('defaultCommandTimeout',8000)
       homepage.getShop().click()
       //we can add any product here with implemented custom method
       //this.data.productName
       //this.data.productName.forEach(element => cy.selectproduct(element));
       this.data.productName.forEach(function(element)
       {
       cy.selectproduct(element)
      });

      productpage.checkOutButton().click()
         var sum=0
       cy.get('tr td:nth-child(4)  strong').each(($e1, index, $list) => {
           
      const amount=$e1.text()
       var res=amount.split(" ")
       res=res[1].trim()
       sum=Number(sum)+Number(res)
      
      }).then(function()
      {
         cy.log(sum)

      })
      cy.get('h3 > strong').then(function(element)
      {
        const amount=element.text()
        var res=amount.split(" ")
        var total=res[1].trim()
        expect(Number(total)).to.equal(sum)
      })
      //click the check button 2
      cy.contains('Checkout').click()
      cy.get('#country').type('India')
      cy.wait(6000)
      //cypress.defineConfig(defaultCommandTimeout,8000)
    
      cy.get('.suggestions > ul > li > a').click()
     // cy.wait(10000)
      cy.get('#checkbox2').check({force: true})
      cy.get('.ng-untouched > .btn').click()
      //cy.wait(6000)
     // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
     cy.get('.alert').then(function(element)
     {
      const actualtext=element.text()
      expect(actualtext.includes("Success")).to.be.true
     })

    })
 })
