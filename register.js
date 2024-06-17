function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var sexo = document.getElementById('sexo').value;
    var nomeMaterno = document.getElementById('nomeMaterno').value;
    var cpf = document.getElementById('cpf').value;
    var celular = document.getElementById('celular').value;
    var fixo = document.getElementById('fixo').value;
    var endereco = document.getElementById('endereco').value;
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;
    var message = document.getElementById('message');
    var success = document.getElementById('success');

    message.style.display = 'none';
    success.style.display = 'none';

    if (!nome || !dataNascimento || !sexo || !nomeMaterno || !cpf || !celular || !fixo || !endereco || !login || !senha || !confirmaSenha) {
        message.innerText = "Todos os campos são obrigatórios.";
        message.style.display = 'block';
        return false;
    }

    if (nome.length < 15 || nome.length > 60 || !/^[a-zA-Z\s]+$/.test(nome)) {
        message.innerText = "O nome deve ter entre 15 e 60 caracteres alfabéticos.";
        message.style.display = 'block';
        return false;
    }

    
    var telefoneRegex = /^\(\+55\)\d{2}-\d{8,9}$/;
    if (!telefoneRegex.test(celular) || !telefoneRegex.test(fixo)) {
        message.innerText = "Os telefones devem estar no formato (+55)XX-XXXXXXXX.";
        message.style.display = 'block';
        return false;
    }

    
    if (login.length !== 6 || !/^[a-zA-Z]+$/.test(login)) {
        message.innerText = "O login deve ter exatamente 6 caracteres alfabéticos.";
        message.style.display = 'block';
        return false;
    }

    
    if (senha.length !== 8 || !/^[a-zA-Z]+$/.test(senha)) {
        message.innerText = "A senha deve ter exatamente 8 caracteres alfabéticos.";
        message.style.display = 'block';
        return false;
    }

    if (senha !== confirmaSenha) {
        message.innerText = "As senhas não coincidem.";
        message.style.display = 'block';
        return false;
    }

    localStorage.setItem('login', login);
    localStorage.setItem('senha', senha);

    success.style.display = 'block';
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 2000);

    return false;
}

document.getElementById('cadastroForm').onsubmit = validarFormulario;