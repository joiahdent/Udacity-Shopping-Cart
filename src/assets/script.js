/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = Array();

function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}

/* Create 3 or more product objects using object literal notation
Each product should include five properties
- name: name of product (string)
- price: price of product (number)
- quantity: quantity in cart should start at zero (number)
- productId: unique id for the product (number)
- image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
- cherry.jpg by Mae Mu
- orange.jpg by Mae Mu
- strawberry.jpg by Allec Gomes
- watermelon.png by Allec Gomes
*/

const C = {
  name: "cherry",
  price: 5,
  quantity: 0,
   productId: 1,
   image: "images/cherry.jpg"
}

const o = {
  name: "orange",
  price: 30,
  quantity: 0,
   productId: 2,
   image: "images/orange.jpg"
}

const  s =  {
  name: "strawberry",
  price: 24,
  quantity: 0,
   productId: 3,
   image: "images/strawberry.jpg"
}
products.push(C);
products.push(o);
products.push(s);


const cart= Array();

/* Create a function named addProductToCart that takes in the product productId as an argument
- addProductToCart should get the correct product based on the productId
- addProductToCart should then increase the product's quantity
- if the product is not already in the cart, add it to the cart
*/


function addProductToCart(productId){

  let item = getProductByIdFromList(productId, cart)
  let item2  = getProductByIdFromList(productId, products)
    
    if(productId ===  item2.productId && item === item2){
     item.quantity++;
    }
    else if(productId ===  item2.productId){
      item2.quantity ++;
      cart.push(item2);
    }


}

/* Create a function named increaseQuantity that takes in the productId as an argument
- increaseQuantity should get the correct product based on the productId
- increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  let item = getProductByIdFromList(productId, cart)
    item.quantity ++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
- decreaseQuantity should get the correct product based on the productId
- decreaseQuantity should decrease the quantity of the product
- if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){

  let item = getProductByIdFromList(productId, cart)
  if(item.quantity === 1){
    removeProductFromCart(productId)

  } else {
  item.quantity --;}

}

/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  let item = getProductByIdFromList(productId, cart)
 
    item.quantity =0;
    cart.splice(cart.indexOf(item), 1);
}

// remove Product from Cart - productId
// remove Product from cart - update product quantity to 0
// remove Product from Cart - remove product from cart

/* Create a function named cartTotal that has no parameters
- cartTotal should iterate through the cart to get the total of all products
- cartTotal should return the sum of the products in the cart
*/

function cartTotal(){
  let total = 0;
  for( let i = 0; i<cart.length ; i++){
    total = total + cart[i].price * cart[i].quantity;
  }
  return total;
 }

/* Create a function called emptyCart that removes all of the products from the cart */

function emptyCart(){

for( let i = 0; i<cart.length ; i = i + 1){
  cart.pop();
}

/* Create a function named pay that takes in an amount as an argument
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
*/

}

let totalPaid = 0;
function pay (amount){
 
  totalPaid += amount;
  let cash_returned = totalPaid - cartTotal();
  if (cash_returned >= 0) {
     totalPaid = 0;
}
return cash_returned;
}

/* The following is for running unit tests.
npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,



   
}
