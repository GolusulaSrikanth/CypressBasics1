class Addtocart
{

selectinmobiletext()
{
 return   cy.contains("in Mobiles")
}
clickmoredropdown()
{
   return cy.contains('MORE')
}
typebrandname()
{
   return cy.get('._3IxutE')
}
selectcheckbox()
{
   return cy.get(':nth-child(2) > ._4921Z > ._1Y4Vhm > ._2iDkf8')
}
clickApplyfilter()
{
   return cy.get('.THxusM')
}

printAllMobiles()
{
   return cy.spy(console, 'log')
}
clickonmobilewithtext()
{
   return cy.contains('vivo T1X (Space Blue, 64 GB)')
}
Typepincode()
{
   return cy.get('._36yFo0')
}
checkbutton()
 {
      return  cy.get('._2P_LDn')
 }

}
export default Addtocart;