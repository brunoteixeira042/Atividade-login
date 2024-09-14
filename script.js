// Array para armazenar os usuários em memória
let users = [{
    password:
        "admin123", username: "admin"
}];

// Função para adicionar um novo usuário ao array
function addUser(username, password) {
    users.push({ username, password });
}

// Função para validar o login
function validateLogin(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

// Função para alternar entre as telas
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.style.display = 'none');
    document.getElementById(screenId).style.display = 'block';
}

// Mudar para tela de cadastro
document.getElementById('go-to-register').addEventListener('click', function () {
    showScreen('register-screen');
});

// Mudar para tela de login
document.getElementById('go-to-login').addEventListener('click', function () {
    showScreen('login-screen');
});

// Lógica de cadastro
document.getElementById('register-form').addEventListener('submit', function (e) {
    
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const regex =/^[a-zA-Z]*$/
    if (!regex.test(username)) {
        alert('O campo nome deve conter apenas letras.');
        return
    }    
    // Verifica se o usuário já existe
    if (users.find(user => user.username === username)) {
        alert('Usuário já cadastrado!');
    } else {
        addUser(username, password);
        alert('Cadastro realizado com sucesso!');
        showScreen('login-screen');
    }
});

// Lógica de login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = validateLogin(username, password);
    if (user) {
        document.getElementById('user-welcome').textContent = user.username;
        showScreen('welcome-screen');
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Lógica de logout
document.getElementById('logout').addEventListener('click', function () {
    showScreen('login-screen');
});
