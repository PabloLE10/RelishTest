function ShoppingCart() {
  this.items = [];
  this.coupons = [
    {code: "ABC", discount: 5},
    {code: "DEF", discount: 10},
    {code: "GHI", discount: 15},
    {code: "JKL", discount: 20}
  ];
  this.getItemIndex = function (itemId){
    return this.items.findIndex (item => {
        return item.id === itemId;
    });
  };
  this.getCouponIndex = function (code){
    return this.coupons.findIndex (coupon => {
        return coupon.code === code;
    });
  };
  this.addItem = function (item) {
    if(item.quantity <= 0 || item.price <= 0){
        console.log("The item: " + item.id + " was not added. The quantity or price can't be 0 or lower.");
    }else if(!Number.isInteger(item.quantity)){
        console.log("The item: " + item.id + " was not added. The quantity must be an integer number.");
    }else{
        this.items.push(item);
        console.log("The item: " + item.id + " was added.");
    }
  };
  this.removeItem = function (itemId) {
    if(this.getItemIndex(itemId) >= 0){
        this.items.splice(this.getItemIndex(itemId),1);
        console.log("The item: " + itemId + " was removed from cart.");
    }else{
        console.log("The item: " + itemId + " was not found. No item was removed from cart.");
    }
  };
  this.updateItemQuantity = function (itemId, quantity) {
    if(this.getItemIndex(itemId) < 0){
        console.log("The item: " + itemId + " was not found. No item quantity was updated");
    }else if(!Number.isInteger(quantity)){
        console.log("The item: " + itemId + " was not updated. The quantity expexted value must be an integer number, the actual quantity was: " + quantity);
    }else{
        let oldQuantity = this.items[this.getItemIndex(itemId)].quantity
        this.items[this.getItemIndex(itemId)].quantity = quantity; 
        console.log("The quantity of the item: " + itemId + " was updated from " + oldQuantity + " to "+ quantity);
    }
  };
  this.applyCoupon = function (coupon) {
    let totalPrice = this.calculateTotalPrice();
    if(this.getCouponIndex(coupon) >= 0){
        let couponDiscount = this.coupons[this.getCouponIndex(coupon)].discount;
        console.log("Coupon Discount: " + couponDiscount + "%");
        console.log("Coupon Discount Amount: " + (this.calculateTotalPrice() * (couponDiscount/100)).toFixed(2));
        return (totalPrice -= totalPrice * (couponDiscount/100)).toFixed(2);
    }else{
        console.log("The coupon: " + coupon + " is not valid. No discont was applied.");
        return totalPrice = this.calculateTotalPrice();
    }
  };
  this.calculateTotalPrice = function () {
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
  };
}

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
console.log({ totalPriceAfterCoupon: cart.applyCoupon("JKL")});