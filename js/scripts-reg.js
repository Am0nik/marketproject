const regForm = document.getElementById('reg')

regForm.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch("./data/users.json")
        .then(response => {
            return response.text().then(text => text ? JSON.parse(text) : [])
        })
        .then(data => {
            const validData = Array.isArray(data) ? data : [];
            register(validData);
        })
        .catch(err => {
            console.error("Ошибка:", err)
            register([])
    })
})

function register(data) {
    const regName = document.getElementById('username-reg')
    const regPassword = document.getElementById('password-reg')
    const nameValue = regName.value.trim()
    const passwordValue = regPassword.value
    const exists = data.some(user => user.username === nameValue)

    if (!exists) {
        const newUser = { name: nameValue, password: passwordValue }
        data.push(newUser)
        alert("Успех")
    } else {
        alert("Такой пользователь уже существует");
    }
}


