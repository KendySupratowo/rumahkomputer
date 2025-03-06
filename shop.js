document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalHargaElement = document.getElementById('totalharga');
    const totalPaymentContainer = document.getElementById('totalPaymentContainer');
    const qrisImage = document.getElementById('qrisImage');
    const cartCount = document.getElementById('cartCount');
    const username = localStorage.getItem('username');
    const loginRegisterLink = document.getElementById('loginRegisterLink');
    const logoutButton = document.getElementById('logoutButton');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const donePaymentButton = document.getElementById('donePayment');
    const paymentPopup = document.getElementById('paymentPopup');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Fungsi untuk memperbarui jumlah item di cart
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0 && cartCount) {
            cartCount.textContent = totalItems;
            cartCount.classList.remove('hidden');
            cartCount.classList.remove('scale-0');
        } else if (cartCount) {
            cartCount.classList.add('scale-0');
            setTimeout(() => cartCount.classList.add('hidden'), 300);
        }
    }

    // Login/Logout logic
    if (username) {
        loginRegisterLink.classList.add('hidden');
        logoutButton.classList.remove('hidden');
        usernameDisplay.classList.remove('hidden');
        usernameDisplay.textContent = `Hi, ${username}`;
    }

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('username');
        window.location.href = 'login21.html';
    });

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty. <a href="index.html" class="text-indigo-600 underline">Kembali berbelanja</a></p>';
            totalPaymentContainer.classList.add('hidden');
            qrisImage.classList.add('hidden');
        } else {
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('flex', 'items-center', 'border-b', 'py-4');
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover mr-4">
                    <div>
                        <h3 class="font-semibold">${item.name}</h3>
                        <p>Price: Rp ${parseInt(item.price).toLocaleString()}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <button class="removeButton bg-red-500 text-white py-1 px-2 rounded-md mt-2" data-index="${index}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });

            const totalHarga = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalHargaElement.textContent = totalHarga.toLocaleString();
            totalPaymentContainer.classList.remove('hidden');
            qrisImage.classList.remove('hidden'); // Tampilkan QRIS dummy

            const removeButtons = document.querySelectorAll('.removeButton');
            removeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const indexToRemove = parseInt(this.getAttribute('data-index'));
                    cart.splice(indexToRemove, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCartItems();
                });
            });
        }
        updateCartCount();
    }

    // Event listener untuk tombol Done Payment
    donePaymentButton.addEventListener('click', function () {
        if (cart.length > 0) {
            localStorage.removeItem('cart');
            cart = []; // Kosongkan array cart
            renderCartItems(); // Render ulang halaman
            paymentPopup.classList.remove('hidden'); // Tampilkan popup
        } else {
            alert('Keranjang kosong, tidak ada yang perlu dibayar.');
        }
    });

    // Tutup popup saat klik di luar
    paymentPopup.addEventListener('click', function (e) {
        if (e.target === paymentPopup) {
            paymentPopup.classList.add('hidden');
        }
    });

    renderCartItems();
});