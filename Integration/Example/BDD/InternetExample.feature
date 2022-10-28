Feature: End To End Welcome internet Validation

  Application regration
  Background: HerokuApp Search functionality steps

    Given user lands on Dashboard of  the application

  # Scenario:Landed on the Application page

  #   Given user lands on Dashboard of  the application

  Scenario: AB Testing functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on AB Testing button
    And User validate data on the page
  Scenario:Add Removing Elements functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on the Add Removing Element Text
    And User validate data on the page

    Scenario:Challening downelment functionality steps
    When user click on the Challeningdown element text
    Then user counting the now of rows in table
    And user verify the colums length
    Then user print the data of particular columns inside rows at  table
    And print the single row data from table

  Scenario: Drag and drop Testing functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on Drag and drop Testing button
    And Drag and drop box A on the box B and validate text

  Scenario: DropDown Testing functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on DropDown Testing button
    And User will able to select on the option in Dropdown list

  Scenario: Checkboxes Testing functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on Checkboxes Testing button
    And User click on the checkbox 1 and validate

  Scenario: Context Menu Testing functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on Context Menu Testing button
    And User Right click on the box

  Scenario: Form Authentication Testing functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on Form Authentication Testing button
    And User click on the username and enter the username
    And User click on the password and enter the password
    Then User click on the Login button
    And User validates login successfully or not

  Scenario: JQueryUI Menu Testing functionality steps
    #Given User lands on InternetHerokuApp Dashboard page
    When User Click on JQueryUI Menu Testing button
    # And User clicks on the JQuery link
    # And user clicks on the Selectors in Jquery UI menu

    Scenario:Javascript Alerts functionality steps
    When user click on Javascript Alert Element
    Then user validate the page details
    And user click on Js Alert button
    And user verify the text after alert popup cancle 
    Then user click on the Js Confrom button
    And user click on ok button in Alertpopup
    And user verify the text after alert popup Confrom


