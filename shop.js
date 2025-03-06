document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalHargaElement = document.getElementById('totalharga');
    const totalPaymentContainer = document.getElementById('totalPaymentContainer');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCartItems() {
        cartItemsContainer.innerHTML = ''; // Kosongkan kontainer

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalPaymentContainer.classList.add('hidden'); // Sembunyikan Total Payment
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

            // Hitung total harga dan tampilkan Total Payment
            const totalHarga = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalHargaElement.textContent = totalHarga.toLocaleString();
            totalPaymentContainer.classList.remove('hidden'); // Tampilkan Total Payment

            // Tambahkan event listener untuk tombol Remove
            const removeButtons = document.querySelectorAll('.removeButton');
            removeButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const indexToRemove = parseInt(this.getAttribute('data-index'));
                    cart.splice(indexToRemove, 1); // Hapus item dari array
                    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
                    renderCartItems(); // Render ulang
                });
            });
        }
    }

    renderCartItems(); // Panggil pertama kali saat halaman dimuat
});