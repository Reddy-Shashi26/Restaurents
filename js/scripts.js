

// Initialize an empty cart object and count
let cart = { items: 0, total: 0 };
let cartCount = 0;

// Function to add items to the cart and update item-specific count
function addItem(name, price, countElementId) {
    cart.items += 1;
    cart.total += price;
    cartCount += 1;

    // Update the total cart count and summary
    document.getElementById('cart-count').innerHTML = cartCount;
    document.getElementById('cart-summary').innerHTML = `Items: ${cart.items} | Total: ₹${cart.total}`;

    // Increment the count for the specific item next to the Add to Cart button
    let itemCountElement = document.getElementById(countElementId);
    let currentCount = parseInt(itemCountElement.innerHTML);
    itemCountElement.innerHTML = currentCount + 1;
}

// Function to remove items from the cart and update item-specific count
function removeItem(name, price, countElementId) {
    let itemCountElement = document.getElementById(countElementId);
    let currentCount = parseInt(itemCountElement.innerHTML);

    // Only remove if the count is greater than 0
    if (currentCount > 0) {
        cart.items -= 1;
        cart.total -= price;
        cartCount -= 1;

        // Update the total cart count and summary
        document.getElementById('cart-count').innerHTML = cartCount;
        document.getElementById('cart-summary').innerHTML = `Items: ${cart.items} | Total: ₹${cart.total}`;

        // Decrement the count for the specific item next to the Add to Cart button
        itemCountElement.innerHTML = currentCount - 1;
    }
}

// Function to place an order
function placeOrder() {
    window.location.href = 'checkout.html';
}

// Function to process payment and start the countdown timer
let timerInterval;

function processPayment() {
    document.getElementById('payBtn').classList.add('hidden');
    document.getElementById('animation').classList.remove('hidden');
    
    let timeLeft = 180; // 3 minutes in seconds
    timerInterval = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById('timer').innerHTML = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').innerHTML = "Your order has arrived!";
        }
    }, 1000);
}
