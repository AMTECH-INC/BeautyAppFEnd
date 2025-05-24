// themeCustomizer.js
window.addEventListener('DOMContentLoaded', () => {
  // Create toggle button
  const toggleButton = document.createElement('button');
  toggleButton.innerHTML = '⚙️';
  toggleButton.className = 'btn btn-secondary position-fixed top-0 end-0 m-3';
  toggleButton.id = 'themeToggleBtn';

  // Create sidebar panel
  const sidebar = document.createElement('div');
  sidebar.id = 'themeCustomizer';
  sidebar.className = 'position-fixed top-0 end-0 bg-dark text-white p-4 shadow';
  sidebar.style.width = '300px';
  sidebar.style.height = '100vh';
  sidebar.style.display = 'none';
  sidebar.style.zIndex = '1050';
  sidebar.innerHTML = `
    <h5>🎨 Theme Customizer</h5>
    <hr class="text-secondary">
    <p>Color Scheme:</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="themeMode" id="lightMode" value="light">
      <label class="form-check-label" for="lightMode">Light</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="themeMode" id="darkMode" value="dark" checked>
      <label class="form-check-label" for="darkMode">Dark</label>
    </div>
    <hr class="text-secondary">
    <button class="btn btn-sm btn-light mt-2" id="resetTheme">Reset to Default</button>
  `;

  document.body.appendChild(toggleButton);
  document.body.appendChild(sidebar);

  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent click from bubbling to document
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
  });

  // Hide panel if clicking outside of it
  document.addEventListener('click', (e) => {
    const isClickInside = sidebar.contains(e.target) || toggleButton.contains(e.target);
    if (!isClickInside) {
      sidebar.style.display = 'none';
    }
  });

  // Theme logic
  document.body.addEventListener('change', (e) => {
    if (e.target.name === 'themeMode') {
      if (e.target.value === 'dark') {
        document.body.classList.add('bg-dark', 'text-white');
      } else {
        document.body.classList.remove('bg-dark', 'text-white');
      }
    }
  });

  document.getElementById('resetTheme').addEventListener('click', () => {
    document.body.classList.remove('bg-dark', 'text-white');
    document.getElementById("lightMode").checked = true;
  });
});
