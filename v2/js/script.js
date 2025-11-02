tailwind.config = {
    darkMode: 'class',
    theme: {
    extend: {
        colors: {
        primary: 'var(--primary-color)', // accent color
        darkBg: 'var(--body-bg)',
        lightBg: 'var(--body-bg)',
        },
    },
    },
};

// Theme Toggle Script 
// const html = document.documentElement;
// const themeToggle = document.getElementById('themeToggle');

// themeToggle.addEventListener('click', () => {
//     html.classList.toggle('dark');
//     localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
// });

// // Load saved theme on startup
// if (localStorage.getItem('theme') === 'light') {
//     html.classList.remove('dark');
// }

document.documentElement.classList.add('dark');