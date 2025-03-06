document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginSubmit = document.getElementById('loginSubmit');
  const registerSubmit = document.getElementById('registerSubmit');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  // Toggle antara login dan register
  showRegister.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
  });

  showLogin.addEventListener('click', function (e) {
      e.preventDefault();
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
  });

  // Handle register
  registerSubmit.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('registerUsername').value;
      const password = document.getElementById('registerPassword').value;

      // Simpan data pengguna ke localStorage (sederhana, tanpa enkripsi untuk contoh)
      const users = JSON.parse(localStorage.getItem('users')) || {};
      if (users[username]) {
          alert('Username sudah terdaftar!');
          return;
      }
      users[username] = password;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registrasi berhasil! Silakan login.');
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
  });

  // Handle login
  loginSubmit.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;

      // Cek kredensial
      const users = JSON.parse(localStorage.getItem('users')) || {};
      if (users[username] && users[username] === password) {
          localStorage.setItem('username', username); // Simpan username sebagai tanda login
          window.location.href = 'index.html'; // Redirect ke index.html
      } else {
          alert('Username atau password salah!');
      }
  });
});