const ShoppingCart = require('./relishTest')

describe("Add Item", () => {
    test('id: "apple", price: 1, quantity: 1 => Added', () => {
      expect(ShoppingCart.addItem({ id: "apple", price: 1, quantity: 1 })).toBe('Added');
    });

    test('id: "orange", price: 1, quantity: 2 => Added', () => {
      expect(ShoppingCart.addItem({ id: "orange", price: 1, quantity: 2 })).toBe('Added');
    });

    test('id: "apple", price: 1, quantity: 0 => Not Added', () => {
      expect(ShoppingCart.addItem({ id: "apple", price: 1, quantity: 0 })).toBe('Not Added');
    });

    test('id: "apple", price: -1, quantity: 1 => Not Added', () => {
      expect(ShoppingCart.addItem({ id: "apple", price: -1, quantity: 1 })).toBe('Not Added');
    });
});

describe("Remove Item", () => {
  test('"apple" => Removed', () => {
    expect(ShoppingCart.removeItem("apple")).toBe('Removed');
  });

  test('"lemon" => Not Removed', () => {
    expect(ShoppingCart.removeItem("apple")).toBe('Not Removed');
  });
});

describe("Update Item Quantity", () => {
  test('"orange, 3" => Updated', () => {
    expect(ShoppingCart.updateItemQuantity("orange", 3)).toBe('Updated');
  });

  test('"lemon", 3" => Updated', () => {
    expect(ShoppingCart.updateItemQuantity("lemon", 3)).toBe('Not Updated');
  });

  test('"apple", 3.6" => Updated', () => {
    expect(ShoppingCart.updateItemQuantity("grape", 3.6)).toBe('Not Updated');
  });
});

describe("Apply Coupon", () => {
  test('"JKL => Valid Coupon', () => {
    expect(ShoppingCart.applyCoupon("JKL")).toBe('Valid Coupon');
  });

  test('"JKLM => Invalid Coupon', () => {
    expect(ShoppingCart.applyCoupon("JKLM")).toBe('Invalid Coupon');
  });
});