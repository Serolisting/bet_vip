document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    if (username === 'vipuser' && password === 'senha123') {
      localStorage.setItem('loggedIn', true);  // Armazena o estado de login no localStorage
      window.location.href = 'apostas.html';   // Redireciona para a página de apostas
    } else {
      errorMessage.textContent = 'Usuário ou senha inválidos!';
    }
  });
  