const body = document.body;
const modeToggleBtn = document.getElementById('modeToggleBtn');

function updateModeButton() {
    const isDark = body.classList.contains('dark-mode');
    modeToggleBtn.textContent = isDark ? '☀️' : '🌑';
}

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateModeButton();
});

updateModeButton();