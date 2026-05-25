// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.remove('active');
        
        // Update active link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Portfolio filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter portfolio items
        const filter = this.getAttribute('data-filter');
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, main');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === './' + current + '.html') {
            link.classList.add('active');
        }
    });
});

// Fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature, .team-member, .testimonial-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Add animations to stat cards when they come into view
document.querySelectorAll('.stat-card').forEach(card => {
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Increment stat numbers on scroll
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize stat animations
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const number = parseInt(entry.target.textContent);
            animateValue(entry.target, 0, number, 2000);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card h3').forEach(el => {
    statsObserver.observe(el);
});

// Form validation
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && this.value.trim() === '') {
            this.style.borderColor = '#ff4444';
        } else if (this.type === 'email' && this.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderColor = '#ff4444';
            } else {
                this.style.borderColor = '';
            }
        } else {
            this.style.borderColor = '';
        }
    });
});

// Prevent form submission if invalid
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    let isValid = true;
    
    this.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
        if (field.value.trim() === '') {
            isValid = false;
            field.style.borderColor = '#ff4444';
        }
    });
    
    if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
    }
});

// Add scroll class to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// Lazy load images (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.backgroundImage = entry.target.dataset.bg;
                imageObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('[data-bg]').forEach(img => imageObserver.observe(img));
}

// Add print styles
const style = document.createElement('style');
style.innerHTML = `
    @media print {
        .navbar, .footer { display: none; }
        body { color: #000; background: #fff; }
    }
`;
document.head.appendChild(style);

console.log('NJ Construction website loaded successfully!');
