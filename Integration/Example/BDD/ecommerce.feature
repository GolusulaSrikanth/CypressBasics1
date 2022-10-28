Feature: End to end Ecommerce validation


    application Regression
    @Regression
    Scenario: Ecommerc products delivery
    Given I open Ecommerce page
   # When I add items to cart
    When User clicks the Login on Header page
    And Validate the total prices 
    Then Select the country Submit  and  verify  Thankyou

    
    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name | gender |
    | bobz|  Male |
    Then validate the forms behaviour 
    And select the Shop page 
