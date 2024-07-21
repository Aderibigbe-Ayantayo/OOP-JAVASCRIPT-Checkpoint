// Step 1: Create the Product Class

class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

//   Step 2: Create the ShoppingCartItem Class

  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
//   Step 3: Create the ShoppingCart Class
class ShoppingCart {
    constructor() {
      this.cartItems = [];
    }
  
    // Method to get total number of items in the cart
    getTotalItems() {
      let totalItems = 0;
      this.cartItems.forEach(item => {
        totalItems += item.quantity;
      });
      return totalItems;
    }
  
    // Method to add items to the cart
    addItem(cartItem) {
      this.cartItems.push(cartItem);
    }
  
    // Method to remove an item from the cart based on productId
    removeItem(productId) {
      this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    }
  
    // Method to display cart items
    displayCart() {
      this.cartItems.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity}`);
      });
    }
  }

//   Step 4: Testing the Classes
// Creating some products
let product1 = new Product(1, 'Laptop', 1000);
let product2 = new Product(2, 'Mouse', 20);
let product3 = new Product(3, 'Keyboard', 50);

// Creating a shopping cart
let cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(new ShoppingCartItem(product1, 2)); // Adding 2 laptops
cart.addItem(new ShoppingCartItem(product2, 3)); // Adding 3 mice

// Displaying the cart
console.log("Cart items:");
cart.displayCart(); // Output: Laptop - Quantity: 2, Mouse - Quantity: 3

// Getting total number of items in the cart
console.log(`Total items in cart: ${cart.getTotalItems()}`); // Output: Total items in cart: 5

// Removing an item (example: removing the mouse)
cart.removeItem(2); // Remove product with id 2 (Mouse)

// Displaying the updated cart
console.log("Updated Cart items:");
cart.displayCart(); // Output: Laptop - Quantity: 2

// Getting total number of items again
console.log(`Total items in cart: ${cart.getTotalItems()}`); // Output: Total items in cart: 2

