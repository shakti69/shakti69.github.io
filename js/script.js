// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// ================= FORM VALIDATION =================
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
}


// ================= TYPING EFFECT =================
const text = "B.Sc CS Student | Cybersecurity Enthusiast |  E-Sports Caster";
let index = 0;

function typeEffect() {
    const el = document.querySelector(".typing");
    if (!el) return;

    if (index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const typingEl = document.querySelector(".typing");
    if (typingEl) {
        typingEl.innerHTML = "";
        typeEffect();
    }
});


// ================= SCROLL ANIMATIONS =================
const sections = document.querySelectorAll(".section");
const skills = document.querySelectorAll(".progress div");
const cards = document.querySelectorAll(".about-card");
const timelineItems = document.querySelectorAll(".timeline-item");

function handleScroll() {

    // Sections animation
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });

    // Skills animation
    skills.forEach(bar => {
        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            const skillName = bar.parentElement.previousElementSibling.innerText;

            if (skillName === "HTML") bar.style.width = "90%";
            else if (skillName === "CSS") bar.style.width = "85%";
            else bar.style.width = "75%";
        }
    });

    // About Cards animation
    cards.forEach((card, index) => {
        const pos = card.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 200);
        }
    });

    // Timeline animation
    timelineItems.forEach((item, index) => {
        const pos = item.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            setTimeout(() => {
                item.classList.add("show");
            }, index * 200);
        }
    });
}

// 🔥 Single scroll listener (important)
window.addEventListener("scroll", handleScroll);