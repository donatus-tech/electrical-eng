

// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission (simple simulation)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-status').textContent = "✅ Message sent successfully!";
    this.reset();
});

// Fade-in effect on scroll
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            el.style.animationPlayState = 'running';
        }
    });
});
// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission (simple simulation)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-status').textContent = "✅ Message sent successfully!";
    this.reset();
});

// Fade-in effect on scroll
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            el.style.animationPlayState = 'running';
        }
    });
});

// Lightbox
function openLightbox(image) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = image.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
// Toggle menu on mobile
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
}

// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = document.getElementById('dark-mode-toggle');
    icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});