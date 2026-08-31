
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark');
    }

    const updateToggle = () => {
      if (document.body.classList.contains('dark')) {
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
      } else {
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      }
    };

    if (themeToggle) {
      updateToggle();
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateToggle();
      });
    }

    const screenshotFigures = document.querySelectorAll('.project-screenshots figure');

    screenshotFigures.forEach((figure) => {
      figure.addEventListener('click', () => {
        figure.classList.toggle('expanded');
      });
    });