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

    test('id: "apple", price: 1, quantity: 1.5 => Not Added', () => {
      expect(ShoppingCart.addItem({ id: "apple", price: -1, quantity: 1 })).toBe('Not Added');
    });
});

describe("Get Index", () => {
  test('Item Index - "apple" => Item Found', () => {
    expect(ShoppingCart.getItemIndex("apple")).not.toBe(-1);
  });

  test('Item Index - "grape" => Item Found', () => {
    expect(ShoppingCart.getItemIndex("grape")).toBe(-1);
  });

  test('Coupon Index - "JKL" => Item Found', () => {
    expect(ShoppingCart.getCouponIndex("JKL")).not.toBe(-1);
  });

  test('Coupon Index - "JKLM" => Item Found', () => {
    expect(ShoppingCart.getItemIndex("JKLM")).toBe(-1);
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

  test('"orange", 3.6" => Updated', () => {
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

describe("Calculate Total Price", () => {
  test('"Price for quantity 2 => 3.00', () => {
    expect(ShoppingCart.calculateTotalPrice()).toBe("3.00");
  });

  test('id: "apple", price: 1, quantity: 3 => Added', () => {
    expect(ShoppingCart.addItem({ id: "apple", price: 1, quantity: 3 })).toBe('Added');
  });

  test('"Price for quantity 6 => 5.70', () => {
    expect(ShoppingCart.calculateTotalPrice()).toBe("5.70");
  });

  test('id: "grape", price: 1, quantity: 5 => Added', () => {
    expect(ShoppingCart.addItem({ id: "apple", price: 1, quantity: 5 })).toBe('Added');
  });

  test('"Price for quantity 11 => ', () => {
    expect(ShoppingCart.calculateTotalPrice()).toBe("9.90");
  });

  test('id: "lemon", price: 1, quantity: 10 => Added', () => {
    expect(ShoppingCart.addItem({ id: "lemon", price: 1, quantity: 10 })).toBe('Added');
  });

  test('"Price for quantity 21 => ', () => {
    expect(ShoppingCart.calculateTotalPrice()).toBe("16.80");
  });
});