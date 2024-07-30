const userCart = [];

interface Order {
    name: string,
    weight?: number,
    price: number,
    quantity: number,
    timestamp: Date,
}

function addToCart(cart: Order[], order: Order) {
    // if there's already an item by this order's name in the cart,
    for (const item of cart) {
        if (item.name === order.name) {
            // add the quantity from our new order to that item's quantity
            item.quantity += order.quantity;
        
            return;
        }
    }

    // else (if there's no item by that name), just push it into the cart
    cart.push(order);
}

function createOrder(
    name: string,
    price: number,
    quantity: number,
    weight?: number
): Order {
    const newOrder: Order = {
        name: name,
        price: price,
        quantity: quantity,
        timestamp: new Date(),
    }

    if (weight) {
        newOrder.weight = weight;
    }

    return newOrder;
}


const price = 21;
const order1 = createOrder('t-shirt', price, 2);
const order2 = createOrder('book', 10, 5);
const order3 = createOrder('t-shirt', price, 1);
const order4 = createOrder('board game', 60, 1, 10);
addToCart(userCart, order1); //> [{name: 't-shirt', 2}]
addToCart(userCart, order2);
//> [{name: 't-shirt', quantity: 2}, {name: 'book', quantity: 5}]
addToCart(userCart, order3);
//> [{name: 't-shirt', quantity: 3}, {name: 'book', quantity: 5}]
addToCart(userCart, order4);
console.log(userCart);
