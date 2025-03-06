document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginSubmit = document.getElementById('loginSubmit');
  const registerSubmit = document.getElementById('registerSubmit');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  // Debugging: Log elemen untuk memastikan tidak null
  console.log('loginForm:', loginForm);
  console.log('registerForm:', registerForm);
  console.log('loginSubmit:', loginSubmit);
  console.log('registerSubmit:', registerSubmit);
  console.log('showRegister:', showRegister);
  console.log('showLogin:', showLogin);

  // Toggle antara login dan register
  if (showRegister) {
      showRegister.addEventListener('click', function (e) {
          e.preventDefault();
          loginForm.classList.add('hidden');
          registerForm.classList.remove('hidden');
      });
  } else {
      console.error('Element with ID "showRegister" not found');
  }

  if (showLogin) {
      showLogin.addEventListener('click', function (e) {
          e.preventDefault();
          registerForm.classList.add('hidden');
          loginForm.classList.remove('hidden');
      });
  } else {
      console.error('Element with ID "showLogin" not found');
  }

  // Handle register
  if (registerSubmit) {
      registerSubmit.addEventListener('submit', function (e) {
          e.preventDefault();
          const username = document.getElementById('registerUsername').value;
          const password = document.getElementById('registerPassword').value;

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
  } else {
      console.error('Element with ID "registerSubmit" not found');
  }

  // Handle login
  if (loginSubmit) {
      loginSubmit.addEventListener('submit', function (e) {
          e.preventDefault();
          const username = document.getElementById('loginUsername').value;
          const password = document.getElementById('loginPassword').value;

          const users = JSON.parse(localStorage.getItem('users')) || {};
          if (users[username] && users[username] === password) {
              localStorage.setItem('username', username);
              window.location.href = 'index.html';
          } else {
              alert('Username atau password salah!');
          }
      });
  } else {
      console.error('Element with ID "loginSubmit" not found');
  }
});