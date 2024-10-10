function initMenu() {
  console.log('initMenu function called');
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Schließe das Menü, wenn ein Link geklickt wird
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) { // 768px ist der Breakpoint für md in Tailwind
          menu.classList.add('hidden');
        }
      });
    });

    // Schließe das Menü, wenn außerhalb geklickt wird
    document.addEventListener('click', (event) => {
      const target = event.target;
      const isClickInsideMenu = menu.contains(target);
      const isClickOnMenuToggle = menuToggle.contains(target);
      if (!isClickInsideMenu && !isClickOnMenuToggle && window.innerWidth < 768) {
        menu.classList.add('hidden');
      }
    });

    // Zeige das Menü wieder an, wenn der Bildschirm vergrößert wird
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        menu.classList.remove('hidden');
      }
    });
  }
}

// Führe den Code nur aus, wenn das Dokument geladen ist
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initMenu);
}

initMenu();
