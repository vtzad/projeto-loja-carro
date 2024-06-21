// scripts.js

function toggleLoginForm() {
    const loginDropdown = document.getElementById('loginDropdown');
    loginDropdown.style.display = loginDropdown.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginFormElement').addEventListener('submit', login);
});

function login(event) {
    event.preventDefault();
    const loginInput = document.getElementById('login');
    const senhaInput = document.getElementById('senha');
    const message = document.getElementById('message');
    
    const username = loginInput.value;
    const password = senhaInput.value;

    console.log('Login attempt:', username, password);  

    // Simulação de validação de login
    if (username === 'vitorr' && password === 'vitorvtr') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('userName').innerText = username;
        document.getElementById('welcomeMessage').style.display = 'block';
        console.log('Login successful');  
    } else {
        message.innerText = 'Usuário ou senha inválidos!';
        console.log('Login failed');  
    }
}
