var userCart = [];
function addToCart(cart, order) {
    // if there's already an item by this order's name in the cart,
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var item = cart_1[_i];
        if (item.name === order.name) {
            // add the quantity from our new order to that item's quantity
            item.quantity += order.quantity;
            return;
        }
    }
    // else (if there's no item by that name), just push it into the cart
    cart.push(order);
}
function createOrder(name, price, quantity, weight) {
    var newOrder = {
        name: name,
        price: price,
        quantity: quantity,
        timestamp: new Date(),
    };
    if (weight) {
        newOrder.weight = weight;
    }
    return newOrder;
}
var price = 21;
var order1 = createOrder('t-shirt', price, 2);
var order2 = createOrder('book', 10, 5);
var order3 = createOrder('t-shirt', price, 1);
var order4 = createOrder('board game', 60, 1, 10);
addToCart(userCart, order1); //> [{name: 't-shirt', 2}]
addToCart(userCart, order2);
//> [{name: 't-shirt', quantity: 2}, {name: 'book', quantity: 5}]
addToCart(userCart, order3);
//> [{name: 't-shirt', quantity: 3}, {name: 'book', quantity: 5}]
addToCart(userCart, order4);
console.log(userCart);
//# sourceMappingURL=index.js.map