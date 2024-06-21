document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var storedLogin = localStorage.getItem('login');
    var storedSenha = localStorage.getItem('senha');
    var message = document.getElementById('message');

    message.style.display = 'none';

    if (login === storedLogin && senha === storedSenha) {
        message.innerText = "Login bem-sucedido!";
        message.className = "success-message";
        message.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        
    } else {
        message.innerText = "Login ou senha incorretos.";
        message.className = "error-message";
        message.style.display = 'block';
    }
};