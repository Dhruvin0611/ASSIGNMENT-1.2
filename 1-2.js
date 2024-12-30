let cart = [];

function addProduct(productName, price, quantity) {
    cart.push({ productName, price: parseFloat(price), quantity: parseInt(quantity, 10) });
    renderCart();
}

function calculateTotal() {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

const removeProduct = (productName) => {
    cart = cart.filter(product => product.productName !== productName);
    renderCart();
};

function renderCart() {
    const cartList = document.getElementById("cartList");
    const totalCost = document.getElementById("totalCost");

    cartList.innerHTML = "";

    cart.forEach(({ productName, price, quantity }) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>Product: ${productName}, Price: $${price}, Quantity: ${quantity}</span>
            <button onclick="removeProduct('${productName}')">Remove</button>
        `;
        cartList.appendChild(li);
    });

    totalCost.textContent = `Total Cost: $${calculateTotal().toFixed(2)}`;
}

document.getElementById("productForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    addProduct(productName, price, quantity);
    e.target.reset();
});
