class WishlistFlipkart
{


 mouseoveronflipkarticon()
 {
    return  cy.contains("div", "Flipkart")
 }
 clickwishlist()
{
 return  cy.contains('Wishlist')
}
flipkartdropdownvisibility()
{
   return cy.contains("div", "Flipkart")
}
Numberofitemsonwishlistpage()
{

}














}

export default WishlistFlipkart;