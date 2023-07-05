document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores de usuário e senha do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aqui você pode fazer a lógica de autenticação e verificar as credenciais no lado do cliente

    // Exemplo simples: verifica se o usuário é "admin" e a senha é "admin"
    if (username === "admin" && password === "admin") {
              window.location.href = "admin.html";
    } 
    else {
      document.getElementById("errorMessage").textContent = "Usuário ou senha incorretos.";
    }
  });