class FlipkartLogin
{

  getLoginpage()
  {
   return  cy.contains('Login')
  }
  getMobileNumber()
  {
  return  cy.get(':nth-child(1) > ._2IX_2-')
  }
  getPassword()
  {
   return cy.get("input[type='password']")

  }
  Clickloginbutton()
    {
      return cy.get("._1D1L_j>button[type='submit']")
    }
  


}
export default FlipkartLogin;