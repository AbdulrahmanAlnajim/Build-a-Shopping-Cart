function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}
/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: "strawberry",
    price: 3,
    quantity: 0,
    productId: 1,
    image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRSCyLOFzHz0UGyp_j-wRFrwiD1yqqnn50faj9FvG9KYqRRZW2LVDM4LhzOK8_8YDNbK_QIanlJYV2pZc"
  },
  {
    name: "cherry",
    price: 4,
    quantity: 0,
    productId: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cherry_season_%2848216568227%29.jpg/640px-Cherry_season_%2848216568227%29.jpg"  
  },
  {
    name: "orange",
    price: 5,
    quantity: 0,
    productId: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1024px-Oranges_-_whole-halved-segment.jpg" 
  }
];
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
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let product = getProductByIdFromList(productId, products);
      product.quantity += 1;
      if (cart.includes(product)) {
        
      } else {
        cart.push(product)
      }
    }


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let product = getProductByIdFromList(productId, products);
      product.quantity += 1;
    }

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let product = getProductByIdFromList(productId, products);
      product.quantity -= 1;
      if (product.quantity === 0) {
        const index = cart.indexOf(product);
        if (index > -1) { 
            cart.splice(index, 1); // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
            }
      }
    }

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let product = getProductByIdFromList(productId, cart);
      product.quantity = 0;
      const index = cart.indexOf(product);
      if (index > -1) { 
          cart.splice(index, 1); // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
          }
    }

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let sumProducts = 0;
  products.forEach(function(product){
    sumProducts += product.quantity * product.price;
  });
  return sumProducts;
  };
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
  };
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
function pay(amount) {
  totalPaid += amount;
  let sumPayment = totalPaid - cartTotal();
  return sumPayment;
  };
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
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
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
