
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {

        window.location.href = 'index.html';
    }

    // 2. Получаем данные пользователя
    const userData = sessionStorage.getItem('currentUser');

    if (userData) {
        const user = JSON.parse(userData);
        const nameElement = document.getElementById('name');
        if (nameElement) {
            nameElement.textContent = user.name || user.username || "Гость";
        }
    }
});