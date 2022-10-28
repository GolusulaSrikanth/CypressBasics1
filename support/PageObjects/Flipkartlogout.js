class Flipkartlogout
{
    mouseoveronflipkartDropdown()
    {
       return  cy.contains("div", "Flipkart")
    }

       clicklogut()
       {
        return cy.contains("Logout")
       }

}
export default Flipkartlogout;