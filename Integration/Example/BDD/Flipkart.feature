Feature: End To End Flipkart Validation

   Application Regression

   Background:Login Flipkart page
      Given User lands on Flipkart Dashboard page
      When User clicks the Login on Header page
      Then User enter Email or PhoneNumber and password
         | PhoneNumber | password   |
         | 9959886495  | Srik@nth99 |
      And User clicks on the Login in popup window

   @car
   Scenario:Cart page
      Given User lands on Flipkart Dashboard page
      When User click on carticon
      And watching the cart items
      Then print price of the added item in cart
      Then print the Total product price
      And Go Back to the Home page

   @Mobile
   Scenario:mobile page
      Given User lands on Flipkart Dashboard page
      When user search for a product on search filed
      Then user click on Search button
      Then user search for a brand in brand filed
      And click on related brand check box
      Then user click on internal storage dropdown
      And select the check box of 6GB RAM
      When User selecte product By text and click on Add to compare

   @Wishlist
   Scenario:Wish list page
      Given User lands on Flipkart Dashboard page
      When user landed on the home page
      Then user mouse over on the Flipkary dropdown
      Then visibility of the dropdown details
      Then click on wishlish text in flipkartdropdown
      And verify the wishlist page
      Then select the product by text and click on the product

   @Add
   Scenario:add to cart
      Given User lands on Flipkart Dashboard page
      When user search for a product on search filed
      Then user click on Search button
      Then user type 'mobiles' in search filed
      And  click on 'in mobiles' dropdown below the search filed
      Then click on more text in Brand dropdown
      And  type vivo in search Brand filed
      Then click on the vivo checkbox
      And click on the apply filter button
      And Print All Mobile Name
      Then select a product with text  and remove the target attribute and click
      Then enter the pincode
      And click on check button
      Then click on ADDTOCART Button

   @logout
   Scenario:Logout
      Given User lands on Flipkart Dashboard page
      When user mouseover on flipkartdropdown
      Then click on loggout text


