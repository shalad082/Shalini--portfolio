// Initialize AOS animations
AOS.init({ duration: 1000, offset: 100, once: true });

// Typing Effect for Roles
const roles = ["Technophile", "AI Enthusiast", "Innovator"];
let typingIndex = 0, charIndex = 0;

function typeEffect() {
    const typingText = document.getElementById('typing-text');
    if (charIndex < roles[typingIndex].length) {
        typingText.textContent += roles[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typingText.textContent = "";
            charIndex = 0;
            typingIndex = (typingIndex + 1) % roles.length;
            typeEffect();
        }, 2000);
    }
}
typeEffect();

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? "Dark Mode" : "Light Mode";
});

// Dynamic Testimonials
const testimonials = [
    { name: "John Doe", feedback: "Working with Shalini has been a pleasure!" },
    { name: "Jane Smith", feedback: "Shalini is incredibly talented and reliable." },
];
const testimonialList = document.getElementById('testimonial-list');

testimonials.forEach(({ name, feedback }) => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'col-md-6';
    testimonialCard.innerHTML = `
        <div class="card shadow-sm p-3">
            <p>"${feedback}"</p>
            <h5 class="text-end">- ${name}</h5>
        </div>`;
    testimonialList.appendChild(testimonialCard);
});

// Download Resume Button
document.getElementById('download-resume').addEventListener('click', () => {
    window.open('path/to/your-resume.pdf', '_blank');
});

// Stats Counter Animation
const statCounters = document.querySelectorAll('.stat-counter');
statCounters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.dataset.count;
        const current = +counter.textContent;
        const increment = Math.ceil(target / 200);

        if (current < target) {
            counter.textContent = current + increment;
            setTimeout(updateCounter, 10);
        } else {
            counter.textContent = target;
        }
    };
    updateCounter();
});
