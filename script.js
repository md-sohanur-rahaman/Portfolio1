// Function to scroll to a specific section smoothly
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Simple Form Validation/Feedback
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo, but your message was "captured".');
    contactForm.reset();
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
});