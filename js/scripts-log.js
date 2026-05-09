const logForm = document.getElementById('log-form')
logForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch("./data/users.json")
        .then(response => response.json())
        .then(data => login(data))
        .catch(err => console.error("Ошибка загрузки данных:", err))
});

function login(data) {
    const logName = document.getElementById('username-log')
    const logPassword = document.getElementById('password-log')
    const nameValue = logName.value.trim()
    const passwordValue = logPassword.value

    const user = data.find(u => u.username === nameValue && u.password === passwordValue)

    if (user) {
        alert(`Добро пожаловать, ${user.username}!`)
        window.location.href = 'profile.html'
        localStorage.setItem('isLoggedIn', 'true')
        sessionStorage.setItem('currentUser', JSON.stringify(user))
    } else {
        console.log(nameValue,passwordValue)
        alert("Неверное имя пользователя или пароль")
    }
}