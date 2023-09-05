const ShoppingCart = require('./relishTest')

describe("ShoppingCart", () => {
    test('id: "apple", price: 1, quantity: 1 => Added', () => {
      expect(ShoppingCart.addItem({ id: "apple", price: 1, quantity: 1 })).toBe('Added');
    });

});