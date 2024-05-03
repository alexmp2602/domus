document.addEventListener('DOMContentLoaded', () => {
    const headerHeight = document.querySelector('header').offsetHeight;
  
    document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
  
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });