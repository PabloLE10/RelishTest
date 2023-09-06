class ShoppingCart {
  items = [];
  coupons = [
    {code: "ABC", discount: 5},
    {code: "DEF", discount: 10},
    {code: "GHI", discount: 15},
    {code: "JKL", discount: 20}
  ];
  totalPrice = 0;
  
  getItemIndex = function (itemId){
    return this.items.findIndex (item => {
        return item.id === itemId;
    });
  }
  getCouponIndex = function (code){
    return this.coupons.findIndex (coupon => {
        return coupon.code === code;
    });
  }
  addItem = function (item) {
    if(item.quantity <= 0 || item.price <= 0){
        console.log("The item: " + item.id + " was not added. The quantity or price can't be 0 or lower.");
        return "Not Added";
    }else if(!Number.isInteger(item.quantity)){
        console.log("The item: " + item.id + " was not added. The quantity must be an integer number.");
        return "Not Added";
    }else{
        this.items.push(item);
        console.log("The item: " + item.id + " was added.");
        return "Added";
    }
  }
  removeItem = function (itemId) {
    if(this.getItemIndex(itemId) >= 0){
        this.items.splice(this.getItemIndex(itemId),1);
        console.log("The item: " + itemId + " was removed from cart.");
        return "Removed";
    }else{
        console.log("The item: " + itemId + " was not found. No item was removed from cart.");
        return "Not Removed";
    }
  }
  updateItemQuantity = function (itemId, quantity) {
    if(this.getItemIndex(itemId) < 0){
        console.log("The item: " + itemId + " was not found. No item quantity was updated");
        return "Not Updated";
    }else if(!Number.isInteger(quantity)){
        console.log("The item: " + itemId + " was not updated. The quantity expexted value must be an integer number, the actual quantity was: " + quantity);
        return "Not Updated";
    }else{
        let oldQuantity = this.items[this.getItemIndex(itemId)].quantity
        this.items[this.getItemIndex(itemId)].quantity = quantity; 
        console.log("The quantity of the item: " + itemId + " was updated from " + oldQuantity + " to "+ quantity);
        return "Updated";
    }
  }
  applyCoupon = function (coupon) {
    this.totalPrice = this.calculateTotalPrice();
    if(this.getCouponIndex(coupon) >= 0){
        let couponDiscount = this.coupons[this.getCouponIndex(coupon)].discount;
        console.log("Coupon Discount: " + couponDiscount + "%");
        console.log("Coupon Discount Amount: " + (this.calculateTotalPrice() * (couponDiscount/100)).toFixed(2));
        this.totalPrice -= this.totalPrice * (couponDiscount/100);
        return "Valid Coupon"
    }else{
        console.log("The coupon: " + coupon + " is not valid. No discont was applied.");
        this.totalPrice = this.calculateTotalPrice();
        return "Invalid Coupon"
    }
  }
  calculateTotalPrice = function () {
    let itemCount = 0;
    let totalPrice = 0;
    let discount = 0;
    this.items.forEach((item) => {
      totalPrice += item.price * item.quantity;
      itemCount += item.quantity;
    });
    if (itemCount >= 5 && itemCount < 10) {
      discount = 5;
    } else if (itemCount >= 10 && itemCount < 20) {
      discount = 10;
    } else if (itemCount >= 20) {
      discount = 20;
    }
    return (totalPrice * (1 - discount / 100)).toFixed(2);
  }
}

module.exports = new ShoppingCart();

/*
    Usage example of the ShoppingCart object and its elements
*/

// Create a new ShoppingCart object and add four items to it
let cart = new ShoppingCart();
cart.addItem({ id: "apple", price: 1, quantity: 1 });
cart.addItem({ id: "orange", price: 1, quantity: 1 });
cart.addItem({ id: "banana", price: 1, quantity: 2 });

// Print the ShoppingCart total price to the console
console.log({ totalPrice: cart.calculateTotalPrice() });

// Add the fifth element
cart.addItem({ id: "grape", price: 1, quantity: 1 });

// Print the ShoppingCart total price to the console
console.log({ totalPrice: cart.calculateTotalPrice() });

// Remove item by Id
cart.removeItem("apple");
console.log({ totalPrice: cart.calculateTotalPrice() });

// Update quantity by Id
cart.updateItemQuantity("grape", 3);

// Apply Coupon to new ShoppingCart Total
console.log({ totalPrice: cart.calculateTotalPrice()});
console.log(cart.applyCoupon("JKL"));
console.log({ totalPriceAfterCoupon: cart.totalPrice});