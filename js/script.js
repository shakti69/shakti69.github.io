/**
 * 
 * SHAKTIxDARKLORD - Cyber Portfolio JS
 * Interactive Cyber-Dark Theme scripts
 * 
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. CUSTOM CURSOR
    // ==========================================
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-menu");
    const navbar = document.querySelector(".navbar");
    const typingElement = document.querySelector(".typing");
    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");
    const projectCards = document.querySelectorAll(".project-card");
    const projectModal = document.getElementById("projectModal");
    const projectModalTitle = document.getElementById("projectModalTitle");
    const projectModalSummary = document.getElementById("projectModalSummary");
    const projectModalDescription = document.getElementById("projectModalDescription");
    const projectModalStack = document.getElementById("projectModalStack");
    const projectModalImpact = document.getElementById("projectModalImpact");
    const projectModalClosers = document.querySelectorAll("[data-modal-close]");

    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    // Add hover states to links and buttons
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .project-card, .skill-card, .cyber-card");
    interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("hover-effect"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("hover-effect"));
    });


    // ==========================================
    // 2. SMOOTH SCROLLING & NAV
    // ==========================================
    window.addEventListener("scroll", () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                if (navMenu && mobileMenuBtn) {
                    navMenu.classList.remove("active");
                    mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
                }

                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            if (navMenu.classList.contains("active")) {
                mobileMenuBtn.innerHTML = '<i class="ph ph-x"></i>';
            } else {
                mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
            }
        });
    }


    // ==========================================
    // 3. TYPING EFFECT
    // ==========================================
    const typingText = "B.Sc CS Student  | Cybersecurity Enthusiast | E-Sports Caster";
    let typeIndex = 0;

    function typeEffect() {
        if (!typingElement) return;

        if (typeIndex < typingText.length) {
            typingElement.innerHTML += typingText.charAt(typeIndex);
            typeIndex++;
            setTimeout(typeEffect, 60); // Speed
        } else {
            // Optional: Loop typing or keep it static
            // setTimeout(() => { typingElement.innerHTML = ""; typeIndex = 0; typeEffect(); }, 5000);
        }
    }

    // Start typing after a short delay
    setTimeout(typeEffect, 1000);


    // ==========================================
    // 4. PROJECT DETAILS POPUP
    // ==========================================
    if (
        projectCards.length &&
        projectModal &&
        projectModalTitle &&
        projectModalSummary &&
        projectModalDescription &&
        projectModalStack &&
        projectModalImpact
    ) {
        const openProjectModal = (card) => {
            projectModalTitle.textContent = card.dataset.projectTitle || "";
            projectModalSummary.textContent = card.dataset.projectSummary || "";
            projectModalDescription.textContent = card.dataset.projectDescription || "";
            projectModalStack.textContent = card.dataset.projectStack || "";
            projectModalImpact.textContent = card.dataset.projectImpact || "";

            projectModal.classList.add("open");
            projectModal.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
        };

        const closeProjectModal = () => {
            projectModal.classList.remove("open");
            projectModal.setAttribute("aria-hidden", "true");
            document.body.classList.remove("modal-open");
        };

        projectCards.forEach((card) => {
            card.addEventListener("click", () => openProjectModal(card));
        });

        projectModalClosers.forEach((item) => {
            item.addEventListener("click", closeProjectModal);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && projectModal.classList.contains("open")) {
                closeProjectModal();
            }
        });
    }


    // ==========================================
    // 5. INTERSECTION OBSERVER (Scroll Revealer)
    // ==========================================
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");

                // Trigger circular progress if it's a skill card
                if (entry.target.classList.contains('skill-card')) {
                    const progress = entry.target.querySelector('.progress-circle');
                    const percentText = entry.target.querySelector('.circular-progress').getAttribute('data-percent');

                    if (progress) {
                        // Math for circumference: 2 * Math.PI * 50 (radius) = 314
                        const circumference = 314;
                        const offset = circumference - (percentText / 100) * circumference;
                        // Added small delay to match staggering
                        setTimeout(() => {
                            progress.style.strokeDashoffset = offset;
                        }, 500);
                    }
                }

                observer.unobserve(entry.target); // Optional: animate only once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el) => revealObserver.observe(el));


    // ==========================================
    // 6. FORM SUBMISSION
    // ==========================================
    if (contactForm && formSuccess) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload

            const btn = contactForm.querySelector('button[type="submit"]');
            if (!btn) return;
            const originalText = btn.innerHTML;

            // Simulating transmitting
            btn.innerHTML = '<span>Encrypting Payload...</span> <i class="ph ph-spinner-gap ph-spin"></i>';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.style.opacity = '1';

                // Show success msg
                formSuccess.classList.remove("tooltip-hidden");

                setTimeout(() => {
                    formSuccess.classList.add("tooltip-hidden");
                }, 4000);

            }, 1500);
        });
    }


    // ==========================================
    // 7. CYBERPUNK PARTICLE NETWORK (Canvas)
    // ==========================================
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 80) * (canvas.width / 80)
    };

    window.addEventListener("mousemove", (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // Interactive mouse repel (subtle)
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) { this.x += 5; }
                if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 5; }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) { this.y += 5; }
                if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 5; }
            }

            this.x += this.directionX;
            this.y += this.directionY;

            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 12000;

        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 0.5;
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 1) - 0.5;
            let directionY = (Math.random() * 1) - 0.5;
            let color = 'rgba(0, 229, 255, 0.4)'; // Cyber cyan

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // Connect particles with network lines
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                    ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = 'rgba(0, 229, 255,' + opacityValue * 0.2 + ')'; // faint connections
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = (canvas.height / 80) * (canvas.width / 80);
        initParticles();
    });

    window.addEventListener("mouseout", () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    initParticles();
    animateParticles();

});
