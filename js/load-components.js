document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector('header.navbar').innerHTML = data;

      // Add scroll behavior for navbar
      const navbar = document.querySelector('.navbar');
      const hero = document.querySelector('.hero');
      window.addEventListener('scroll', () => {
        const triggerPoint = hero.offsetHeight - 150;
        if (window.scrollY >= triggerPoint) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    });

  // Load Footer
  fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    });

  // Activate scroll scenes when in view
  const initSceneObserver = () => {
    const scenes = document.querySelectorAll('.scroll-scene');
    if (!scenes.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: [0, 0.5, 1] });

    scenes.forEach(s => obs.observe(s));
  };

  // Run after components are injected (small delay to ensure DOM insertion)
  setTimeout(initSceneObserver, 100);
});
