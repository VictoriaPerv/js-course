function greetUser() {
    // Читаем имя пользователя из input
    const user = document.getElementById('username').value;
    
    // Выводим приветствие с помощью alert
    alert(`Привет, ${user}!`);
    
    // Выводим приветствие в тег p
    document.getElementById('greeting').innerText = `Привет, ${user}!`;
}
