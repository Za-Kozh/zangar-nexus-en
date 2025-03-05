const { ipcRenderer } = require('electron');

// Handler for clicking the “Sign in via Google” button
document.getElementById('login').addEventListener('click', () => {
    ipcRenderer.send('login');
});

// Balance update function
async function updateBalance() {
    const balance = await ipcRenderer.invoke('get-balance');
    document.getElementById('balance').innerText = `${balance} NEX`;
}

// Interface initialization
document.addEventListener('DOMContentLoaded', () => {
    updateBalance();
    setInterval(updateBalance, 1800000); // Обновляем баланс каждые 30 минут
});

// Connection status update function
ipcRenderer.on('status', (event, status) => {
    document.getElementById('status').innerText = `Статус: ${status}`;
});