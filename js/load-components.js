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
