document.addEventListener('DOMContentLoaded', function () {
  // Ambil elemen-elemen yang dibutuhkan
  const promoLink = document.getElementById('promoLink');
  const promoModal = document.getElementById('promoModal');
  const closePromo = document.getElementById('closePromo');
  const allCategoriesButton = document.getElementById('allCategoriesButton');
  const categoryList = document.getElementById('categoryList');
  const navLinks = document.querySelectorAll('.bg-indigo-600 nav a');
  const newestPcTitle = document.querySelector('main h2');
  const newestPcDesc = document.querySelector('main p');
  const keranjangButton = document.querySelector('main a.inline-block');
  const productImages = document.querySelectorAll('main .grid img');
  const addToCartButtons = document.querySelectorAll('.addToCartButton');
  const username = localStorage.getItem('username');
  const loginRegisterLink = document.getElementById('loginRegisterLink');
  const logoutButton = document.getElementById('logoutButton');
  const usernameDisplay = document.getElementById('usernameDisplay');

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
          e.preventDefault(); // Mencegah link melakukan navigasi
          promoModal.classList.remove('hidden'); // Tampilkan modal
      });
  }

  if (closePromo && promoModal) {
      closePromo.addEventListener('click', function () {
          promoModal.classList.add('hidden'); // Sembunyikan modal
      });
  }

  // Klik di luar modal untuk menutup
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
  if (newestPcDesc) newestPcDesc.textContent = 'Temukan PC impianmu dengan performa tinggi dan harga terjangkau. Kami menyediakan berbagai pilihan untuk kebutuhan gaming, desain, dan pekerjaanmu.';
  if (keranjangButton) keranjangButton.textContent = 'Add to Cart';

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
      button.addEventListener('click', function () {
          const productId = this.getAttribute('data-product-id');
          const productName = this.getAttribute('data-product-name');
          const productPrice = this.getAttribute('data-product-price');
          const productImage = this.getAttribute('data-product-image');

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

          localStorage.setItem('cart', JSON.stringify(cart));
          window.location.href = 'shop.html';
      });
  });

  // Event listener untuk tombol kategori
  if (allCategoriesButton && categoryList) {
      allCategoriesButton.addEventListener('click', function () {
          categoryList.classList.toggle('hidden');
      });

      document.addEventListener('click', function (event) {
          if (!allCategoriesButton.contains(event.target)) {
              categoryList.classList.add('hidden');
          }
      });
  }
});