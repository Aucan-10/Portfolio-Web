/* ========================================
   DATOS DE EXPERIENCIAS (ORIGINAL)
   ======================================== */
const experiences = [
  {
    title: "El Comienzo",
    period: "2023",
    description:
      "Todo comenzó con curiosidad. Al ver lo interesante que era el mundo de la programación (en general), decidí que sería mi carrera profesional.",
    skills: [],
  },
  {
    title: "Primeros Proyectos",
    period: "Inicios 2024",
    description:
      "Desarrollé mis primeros proyectos personales: Con dificultad, adaptarse a la lógica de programación fue un camino difícil, pero con la práctica logré programas muy básicos.",
    skills: ["Python Básico", "Gobstones"],
  },
  {
    title: "Carrera Profesional",
    period: "2024",
    description:
      "Fui avanzando en el 'arte' de programar, creando programas que exigían más comprensión y horas de dedicación.",
    skills: ["Python", "Gobstones", "Arduino"],
  },
  {
    title: "Proyectos Colaborativos",
    period: "2024 - 2025",
    description:
      "Tener que realizar proyectos con compañeros me parecía una idea interesante. Ahí logré aprender metodologías ágiles y el correcto trabajo en equipo.",
    skills: [
      "Java",
      "Python",
      "Gobstones",
      "HTML",
      "CSS",
      "Godot Básico",
      "Arduino",
    ],
  },
  {
    title: "Profundización",
    period: "2026",
    description:
      "Con las bases establecidas en años anteriores, empece a rofundizar mis conocimientos en la programación, poniendolas en practica en proyectos personales",
    skills: [
      "Java",
      "Python",
      "Gobstones",
      "HTML",
      "CSS",
      "Godot Básico",
      "Arduino y Electronica General",
      "JS",
    ],
  },
];

/* ========================================
     FUNCIONES DE EXPERIENCIAS (ORIGINAL)
     ======================================== */
function createExperienceElement(experience, index) {
  const experienceDiv = document.createElement("div");
  experienceDiv.className = "experience-item fade-in";
  experienceDiv.style.animationDelay = `${index * 200}ms`;

  experienceDiv.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="experience-content">
        <div class="experience-header">
          <h3 class="experience-title">${experience.title}</h3>
          <span class="experience-period">${experience.period}</span>
        </div>
        <p class="experience-description">${experience.description}</p>
        <div class="skills-container">
          ${experience.skills
            .map((skill) => `<span class="skill-tag">${skill}</span>`)
            .join("")}
        </div>
      </div>
    `;
  return experienceDiv;
}

function renderExperiences() {
  const container = document.getElementById("experiences-container");
  experiences.forEach((experience, index) => {
    const experienceElement = createExperienceElement(experience, index);
    container.appendChild(experienceElement);
  });
}

/* ========================================
     🆕 ANIMACIONES PARA PROJECT CARDS (NUEVO)
     ======================================== */
function initProjectCardsAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
  });
}

/* ========================================
     ANIMACIONES DE SCROLL (ORIGINAL + MEJORADO)
     ======================================== */
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll(
    ".section-header, .experience-item, .cta-section, .project-card"
  );
  elementsToAnimate.forEach((el) => observer.observe(el));
}

/* ========================================
     SMOOTH SCROLL (ORIGINAL)
     ======================================== */
function addSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ========================================
     EFECTO RIPPLE EN BOTONES (ORIGINAL)
     ======================================== */
function addButtonHandlers() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple 0.6s linear;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          pointer-events: none;
        `;

      button.style.position = "relative";
      button.style.overflow = "hidden";
      button.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* ========================================
     INICIALIZACIÓN
     ======================================== */
function init() {
  renderExperiences();
  addScrollAnimations();
  initProjectCardsAnimation(); // 🆕 Nueva función para las cards
  addSmoothScroll();
  addButtonHandlers();
  console.log("🚀 Portafolio de Aucan Russo cargado correctamente");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/* ========================================
     ESTILOS DINÁMICOS (RIPPLE)
     ======================================== */
const style = document.createElement("style");
style.textContent = `
    @keyframes ripple {
      to { transform: scale(4); opacity: 0; }
    }
  `;
document.head.appendChild(style);
