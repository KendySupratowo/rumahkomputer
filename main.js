document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen yang dibutuhkan
    const promoLink = document.querySelector('.bg-indigo-600 a');
    const allCategoriesButton = document.getElementById('allCategoriesButton');
    const categoryList = document.getElementById('categoryList');
    const navLinks = document.querySelectorAll('.bg-indigo-600 nav a');
    const newestPcTitle = document.querySelector('main h2');
    const newestPcDesc = document.querySelector('main p');
    const keranjangButton = document.querySelector('main a.inline-block');
    const productImages = document.querySelectorAll('main .grid img');
    const productTitles = document.querySelectorAll('main .grid h3');
    const productPrices = document.querySelectorAll('main .grid p');
  
    // Contoh manipulasi teks
    if (promoLink) {
      promoLink.textContent = 'Lihat Promo Spesial!';
    }
    if (newestPcTitle) {
      newestPcTitle.textContent = 'PC Terbaru dan Terbaik!';
    }
    if (newestPcDesc) {
      newestPcDesc.textContent = 'Temukan PC impianmu dengan performa tinggi dan harga terjangkau. Kami menyediakan berbagai pilihan untuk kebutuhan gaming, desain, dan pekerjaanmu.';
    }
    if (keranjangButton) {
      keranjangButton.textContent = 'Tambah ke Keranjang';
    }
  
    // Contoh manipulasi atribut
    if (productImages) {
      productImages.forEach(img => {
        img.alt = 'Gambar Produk';
      });
    }
  
    // Event listener untuk navigasi link
    if (navLinks) {
      navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Mencegah link berpindah halaman (untuk contoh)
          console.log('Link diklik: ' + link.textContent);
        });
      });
    }
  
    // Event listener untuk tombol keranjang
    if (keranjangButton) {
      keranjangButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Produk telah ditambahkan ke keranjang");
      });
    }
  
    // Contoh perubahan data pada item item product
    if (productTitles && productPrices) {
      if (productTitles[0] && productPrices[0]) {
        productTitles[0].textContent = "Laptop Gaming Super Cepat";
        productPrices[0].textContent = "Rp 15.000.000";
      }
      if (productTitles[1] && productPrices[1]) {
        productTitles[1].textContent = "Monitor Lengkung 4K";
        productPrices[1].textContent = "Rp 5.000.000";
      }
      if (productTitles[2] && productPrices[2]) {
        productTitles[2].textContent = "Keyboard Mekanik RGB";
        productPrices[2].textContent = "Rp 1.500.000";
      }
      if (productTitles[3] && productPrices[3]) {
        productTitles[3].textContent = "Mouse Gaming Presisi Tinggi";
        productPrices[3].textContent = "Rp 800.000";
      }
      if (productTitles[4] && productPrices[4]) {
        productTitles[4].textContent = "Headset Gaming Surround";
        productPrices[4].textContent = "Rp 1.200.000";
      }
      if (productTitles[5] && productPrices[5]) {
        productTitles[5].textContent = "SSD NVMe 1TB";
        productPrices[5].textContent = "Rp 1.000.000";
      }
      if (productTitles[6] && productPrices[6]) {
        productTitles[6].textContent = "RAM DDR4 32GB";
        productPrices[6].textContent = "Rp 2.000.000";
      }
    }
  
    // Event listener untuk tombol kategori
    if (allCategoriesButton && categoryList) {
      allCategoriesButton.addEventListener('click', function() {
        categoryList.classList.toggle('hidden');
      });
  
      // Menutup daftar kategori saat mengklik di luar tombol
      document.addEventListener('click', function(event) {
        if (!allCategoriesButton.contains(event.target)) {
          categoryList.classList.add('hidden');
        }
      });
    }
  });