// Dark Mode Toggle Script
const toggleBtn = document.getElementById('toggle-dark');
const currentMode = localStorage.getItem('theme');

if (currentMode === 'light') {
  document.body.classList.add('light-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
