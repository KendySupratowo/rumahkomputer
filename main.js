document.addEventListener('DOMContentLoaded', function () {
  // Ambil elemen-elemen yang dibutuhkan
  const promoLink = document.getElementById('promoLink');
  const promoModal = document.getElementById('promoModal');
  const closePromo = document.getElementById('closePromo');
  const allCategoriesButton = document.getElementById('allCategoriesButton');
  const categoryList = document.getElementById('categoryList');
  const navLinks = document.querySelectorAll('.bg-indigo-600 nav a');
  const newestPcTitle = document.querySelector('main h2');
  const keranjangButton = document.querySelector('main a.inline-block');
  const productImages = document.querySelectorAll('main .grid img');
  const addToCartButtons = document.querySelectorAll('.addToCartButton');
  const username = localStorage.getItem('username');
  const loginRegisterLink = document.getElementById('loginRegisterLink');
  const logoutButton = document.getElementById('logoutButton');
  const usernameDisplay = document.getElementById('usernameDisplay');
  const cartCount = document.getElementById('cartCount');

  // Fungsi untuk memperbarui jumlah item di cart
  function updateCartCount() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      if (totalItems > 0) {
          cartCount.textContent = totalItems;
          cartCount.classList.remove('hidden');
          cartCount.classList.remove('scale-0');
      } else {
          cartCount.classList.add('scale-0');
          setTimeout(() => cartCount.classList.add('hidden'), 300);
      }
  }

  // Login/Logout logic dan tampilkan username
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

  // Promo Modal logic
  if (promoLink && promoModal) {
      promoLink.addEventListener('click', function (e) {
          e.preventDefault();
          promoModal.classList.remove('hidden');
      });
  }

  if (closePromo && promoModal) {
      closePromo.addEventListener('click', function () {
          promoModal.classList.add('hidden');
      });
  }

  if (promoModal) {
      promoModal.addEventListener('click', function (e) {
          if (e.target === promoModal) {
              promoModal.classList.add('hidden');
          }
      });
  }

  // Manipulasi teks
  if (promoLink) promoLink.textContent = 'Lihat Promo Spesial!';
  if (newestPcTitle) newestPcTitle.textContent = 'PC Terbaru dan Terbaik!';

  // Manipulasi atribut gambar
  if (productImages) {
      productImages.forEach(img => img.alt = 'Gambar Produk');
  }

  // Event listener untuk navigasi link
  if (navLinks) {
      navLinks.forEach(link => {
          link.addEventListener('click', function (event) {
              console.log('Link diklik: ' + link.textContent);
          });
      });
  }

  // Event listener untuk tombol keranjang utama
  if (keranjangButton) {
      keranjangButton.addEventListener('click', function (event) {
          event.preventDefault();
          alert("Produk telah ditambahkan ke keranjang");
      });
  }

  // Add to Cart logic
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function (event) {
          event.preventDefault(); // Cegah perilaku default dari <a href="#">

          const productId = this.getAttribute('data-product-id');
          const productName = this.getAttribute('data-product-name');
          const productPrice = this.getAttribute('data-product-price');
          const productImage = this.getAttribute('data-product-image');
          const qtyElement = document.getElementById(`qty-${productId}`);
          let currentQty = parseInt(qtyElement.textContent);

          if (currentQty <= 0) {
              alert('Stok habis!');
              return;
          }

          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          const existingItem = cart.find(item => item.id === productId);

          if (existingItem) {
              existingItem.quantity += 1;
          } else {
              cart.push({
                  id: productId,
                  name: productName,
                  price: productPrice,
                  image: productImage,
                  quantity: 1
              });
          }

          // Kurangi stok di halaman
          currentQty -= 1;
          qtyElement.textContent = currentQty;

          // Nonaktifkan tombol jika stok habis
          if (currentQty === 0) {
              button.disabled = true;
              button.textContent = 'Stok Habis';
              button.classList.remove('bg-indigo-600');
              button.classList.add('bg-gray-400', 'cursor-not-allowed');
          }

          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
      });
  });
  
  // Panggil updateCartCount saat halaman dimuat
  updateCartCount();
});