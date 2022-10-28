class FlipkartHomepage
{
  clickonsearchFlied(){
  return cy.get("input[placeholder='Search for products, brands and more']")
  }
  TypeProductonSearchFlied(){
  return cy.get("input[placeholder='Search for products, brands and more']")
  }
  clicksearchbutton()
  {
   return  cy.get('button.L0Z3Pu')
  }
 getcategorypage(){
    return cy.get("img[alt='Fashion']")
 }






}
  export default FlipkartHomepage;