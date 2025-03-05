document.addEventListener('DOMContentLoaded', function() {
    const allCategoriesButton = document.getElementById('allCategoriesButton');
    const categoryList = document.getElementById('categoryList');
  
    allCategoriesButton.addEventListener('click', function() {
      categoryList.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function(event) {
      if (!allCategoriesButton.contains(event.target)) {
        categoryList.classList.add('hidden');
      }
    });
  
    // Tambahkan event listener untuk formulir kontak
    const contactForm = document.querySelector('form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        alert('Pesan Anda telah terkirim!');
        // Tambahkan kode untuk mengirim data formulir ke server di sini
      });
    }
  });