// ========================================
// EFECTO DE PARTÍCULAS - SISTEMA GALÁCTICO
// ========================================

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;
        this.color = ['rgba(6, 182, 212', 'rgba(168, 85, 247', 'rgba(168, 198, 247'][Math.floor(Math.random() * 3)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.opacity = (this.life / this.maxLife) * 0.8;
    }

    draw(ctx) {
        ctx.fillStyle = this.color + ', ' + this.opacity + ')';
        ctx.fillRect(this.x, this.y, this.size, this.size);
        
        // Efecto glow
        ctx.shadowColor = this.color + ', ' + (this.opacity * 0.5) + ')';
        ctx.shadowBlur = 10;
    }
}

// Canvas para partículas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '2';
document.body.appendChild(canvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let particles = [];

// Crear partículas al mover el mouse
document.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
    }
});

// Crear partículas aleatorias
setInterval(() => {
    for (let i = 0; i < 1; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particles.push(new Particle(x, y));
    }
}, 100);

// Animar partículas
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';
    ctx.shadowBlur = 8;

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].life <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animateParticles);
}
animateParticles();

// ========================================
// FUNCIONALIDAD DE MODO OSCURO/CLARO
// ========================================

const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Verificar si hay un tema guardado
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);
updateThemeButton();

// Cambiar tema al hacer click
themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    updateThemeButton();
});

function updateThemeButton() {
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }
}

// ========================================
// EFECTO SCROLL - ANIMAR ELEMENTOS
// ========================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeIn 0.6s ease-out forwards`;
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.game-card, .news-card, .category-card').forEach(el => {
    observer.observe(el);
});

// ========================================
// MENÚ ACTIVO
// ========================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ========================================
// BOTONES CON EFECTOS ESPACIALES
// ========================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        // Crear partículas al pasar sobre botón
        for (let i = 0; i < 5; i++) {
            const rect = this.getBoundingClientRect();
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * rect.height;
            particles.push(new Particle(x, y));
        }
    });

    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// ========================================
// EFECTOS DE HOVER EN TARJETAS
// ========================================

document.querySelectorAll('.game-card, .news-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// SMOOTH SCROLL PARA LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = Array.from(carouselTrack.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
let currentIndex = 0;

function updateCarousel(index) {
    const slideWidth = carouselSlides[0].getBoundingClientRect().width;
    carouselTrack.style.transform = `translateX(-${slideWidth * index}px)`;
    carouselSlides.forEach((slide, i) => {
        slide.classList.toggle('current-slide', i === index);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
    updateCarousel(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    updateCarousel(currentIndex);
}, 5000);

console.log('✨ Sistema galáctico activado - Bienvenido a GamingHub Space Edition');

