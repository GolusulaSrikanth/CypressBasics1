class FlipkartMobilePage
 {
   searchforbrand()
  {
   return cy.get("input[placeholder='Search Brand']")
  }
   Clickonbrandcheckbox()
  {
    return  cy.get('[title="realme"] > ._1Y4Vhm > ._2iDkf8')
  }
  Internaldropdown()
  {
   return cy.contains('Internal Storage')
  }
  Internalcheckbox()
  {
   return cy.get("div[title='64 - 127.9 GB']")
  }
  Selecttext()
  {
    return cy.get('._4rR01T')
  }

   Addtocomaprecheckbox()
   {
    return cy.get('[data-id="MOBGDGZFXYZ4NFYM"] > ._2kHMtA > ._1fQZEK > .MIXNux > ._3wLduG > ._3PzNI-')
   }
   Addtocomparepopup()
    {
      return cy.get('._3hShhO > span')
    }
  choosebrand()
  {
    return cy.contains('Choose Brand')
  }
  selectmobile()
  {
    return   cy.get('._1z5ndO')
  }
  selectbrand()
    {
     return  cy.get('div._3mL9c2 >:nth-child(2)')
    }
  
    chooseproduct()
    {
      
      return cy.contains('Choose a Product')
    }
    selectdropdownofchooseproduct()
    {
      return cy.get('div[data-value="MOBGAHD8TKZGPYJW"]')
    }

}

export default FlipkartMobilePage