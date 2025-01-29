        // Variables del carrito
        const cart = [];
        const cartCount = document.getElementById("cart-count");
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        const cartSection = document.getElementById("carrito");
    
        // Actualizar el carrito
        function updateCart() {
            cartItems.innerHTML = "";
            let total = 0;
    
            cart.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = ${item.name} - $${item.price.toFixed(2)} x ${item.quantity};
                cartItems.appendChild(li);
                total += item.price * item.quantity;
            });
    
            cartTotal.textContent = total.toFixed(2);
            cartCount.textContent = cart.length;
        }
    
        // Agregar producto al carrito
        document.querySelectorAll(".add-to-cart").forEach((button) => {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-id");
                const name = button.getAttribute("data-name");
                const price = parseFloat(button.getAttribute("data-price"));
    
                // Buscar si el producto ya está en el carrito
                const existingItem = cart.find((item) => item.id === id);
    
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({ id, name, price, quantity: 1 });
                }
    
                updateCart();
            });
        });
    
        // Mostrar/Ocultar el carrito
        document.getElementById("cart-button").addEventListener("click", (e) => {
            e.preventDefault();
            cartSection.classList.toggle("hidden");
        });
    
        // Finalizar compra
        document.getElementById("checkout").addEventListener("click", () => {
            if (cart.length > 0) {
                alert("¡Gracias por tu compra!");
                cart.length = 0; // Vaciar el carrito
                updateCart();
            } else {
                alert("Tu carrito está vacío.");
            }
        });