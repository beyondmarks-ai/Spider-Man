// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '0.8rem 0';
        header.style.background = 'rgba(5, 5, 5, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        header.style.padding = '1.2rem 0';
        header.style.background = 'rgba(5, 5, 5, 0.6)';
        header.style.boxShadow = 'none';
    }
});

// Cast Card Pop Animation
const castCards = document.querySelectorAll('.cast-card');
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Staggered delay
            revealOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

castCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.2, 0, 0.2, 1)';
    revealOnScroll.observe(card);
});

// Story Details Modal Logic (Toggle & Close)
const modal = document.getElementById('story-modal');
const openBtn = document.getElementById('open-story');
const closeBtn = document.querySelector('.close-modal');

if (openBtn) {
    openBtn.addEventListener('click', () => {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
