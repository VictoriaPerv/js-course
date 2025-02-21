function greetUser() {
    // Читаем имя пользователя из input
    const userInput = document.getElementById('username') as HTMLInputElement;
    const user = userInput.value;
    
    // Выводим приветствие с помощью alert
    alert(`Привет, ${user}!`);
    
    // Выводим приветствие в тег p
    document.getElementById('greeting').innerText = `Привет, ${user}!`;
}