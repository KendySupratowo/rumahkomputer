function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Ganti validasi sederhana dengan logika otentikasi yang sesuai
    if (username === 'user' && password === 'password') {
      // Arahkan ke halaman utama
      window.location.href = 'index.html';
    } else {
      alert('Login gagal!');
    }
  }
  
  function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    // Lakukan validasi dan proses pendaftaran di sini
    // Contoh sederhana:
    alert('Pendaftaran berhasil! Username: ' + username);
    showLoginForm();
  }
  
  function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
  }
  
  function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    window.location.href = 'index.html';
  }