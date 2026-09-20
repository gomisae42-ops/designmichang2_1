const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .contact').forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(24px)';
  section.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(section);
});

const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
