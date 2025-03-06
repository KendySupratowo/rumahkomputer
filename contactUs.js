document.addEventListener('DOMContentLoaded', function () {
    // Elemen Navbar
    const cartCount = document.getElementById('cartCount');
    const loginRegisterLink = document.getElementById('loginRegisterLink');
    const logoutButton = document.getElementById('logoutButton');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const username = localStorage.getItem('username');

    // Elemen Form dan Popup
    const contactForm = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');
    const closePopup = document.getElementById('closePopup');

    // Fungsi untuk memperbarui jumlah item di cart (sama seperti di main.js)
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
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

    // Login/Logout logic (sama seperti di main.js)
    if (username) {
        loginRegisterLink.classList.add('hidden');
        logoutButton.classList.remove('hidden');
        usernameDisplay.classList.remove('hidden');
        usernameDisplay.textContent = `Hi, ${username}`;
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.removeItem('username');
            window.location.href = 'login21.html';
        });
    }

    // Form submission logic
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Mencegah reload halaman

            // Ambil nilai dari input
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validasi sederhana
            if (!name || !email || !message) {
                alert('Harap isi semua kolom!');
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                alert('Email tidak valid!');
                return;
            }

            // Simpan pesan ke localStorage (opsional, untuk simulasi)
            const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            messages.push({ name, email, message, date: new Date().toISOString() });
            localStorage.setItem('contactMessages', JSON.stringify(messages));

            // Reset form
            contactForm.reset();

            // Tampilkan popup sukses
            successPopup.classList.remove('hidden');
        });
    }

    // Tutup popup
    if (closePopup) {
        closePopup.addEventListener('click', function () {
            successPopup.classList.add('hidden');
        });
    }

    if (successPopup) {
        successPopup.addEventListener('click', function (e) {
            if (e.target === successPopup) {
                successPopup.classList.add('hidden');
            }
        });
    }

    // Panggil updateCartCount saat halaman dimuat
    updateCartCount();
});