/* =================================================================
   BIRTHDAY WEBSITE — SCRIPT.JS
   ================================================================= */

/* =================================================================
   ⭐ CUSTOMIZE EVERYTHING IN THIS SECTION ⭐
   ================================================================= */

// Her name — shown in the reveal and final sections
const herName = "Tooba"; // e.g. "Sarah"

// Secret code for the locked section
const secretCode = "janeman";

// The personal message revealed after the correct code is entered.
// Use \n\n for paragraph breaks.
const secretMessage =
  "My dearest,\n\n" +
  "I wanted today to feel like more than just another day — because you are so much more than just another person in my life.\n\n" +
  "Every little thing about you makes my world brighter, and I hope this small surprise made you smile even a little.\n\n" +
  "Happy birthday. I love you more than words on a screen could ever say.";

// Memory gallery photos.
// Replace `image` with your own file paths, e.g. "images/photo1.jpg"
// Captions are optional — leave as "" if you don't want one.
const memories = [
  { image: "images/photo1.jpeg", caption: "That look... and somehow you still manage to look effortlessly beautiful. ❤️" },

  { image: "images/photo2.jpg", caption: "Elegance looks a little different when it's you. ✨❤️" },

  { image: "images/photo3.jpeg", caption: "That little flower suits you almost as much as your smile does. 🌸❤️" },

  { image: "images/photo4.jpg", caption: "You really do have a way of looking beautiful without even trying. ❤️" },

  { image: "images/photo5.jpg", caption: "Those eyes... I could honestly keep looking at them forever. 👀❤️" },

  { image: "images/photo6.jpg", caption: "Traditional, beautiful, and completely you. ❤️✨" },

  { image: "images/photo7.jpg", caption: "There’s just something about your smile that makes every picture better. 🌸❤️" },

  { image: "images/photo8.jpg", caption: "Even those glasses can't hide how pretty you are. 🤍❤️" },

  { image: "images/photo9.jpg", caption: "You look beautiful in every style, but this one has my heart. ❤️✨" },

  { image: "images/photo10.jpg", caption: "One picture, a thousand reasons to admire you. ❤️" },
];

// Timeline of moments — edit freely, add/remove as many as you like
const timelineData = [
  { date: "Day One", title: "When We First Met", text: "Jab maine tujhe dekha, mujhe tujh se mohabbat ho gayi." },
  { date: "Week 1", title: "Falling Fast", text: "It didn't take long for me to know you were different from everyone else." },
  { date: "The Proposal", title: "You Said Yes ❤️", text: "One of the best moments of my life — the day you agreed to be mine forever." },
  { date: "These 2 Months", title: "Short Time, Deep Love", text: "It's only been two months, but it feels like I've known you my whole life." },
  { date: "Always", title: "What Comes Next...", text: "Engaged now, married soon, and forever after that — with you." },
];

// "Why you are special" cards
const reasonsData = [
  { icon: "😊", title: "Your smile", text: "It has a way of fixing my entire day." },
  { icon: "✨", title: "Your personality", text: "There's genuinely no one else like you." },
  { icon: "💬", title: "The way you talk", text: "I could listen to you for hours." },
  { icon: "🌸", title: "Your little habits", text: "Even the small things about you are my favorite." },
  { icon: "🔥", title: "Your confidence", text: "You carry yourself in a way that inspires me." },
  { icon: "🎈", title: "The little things", text: "You make ordinary moments feel special." },
];

// Final section photo (optional) — leave empty string "" to hide it
const finalPhoto = "images/final.png"; // e.g. "images/final.jpg"

// Path to your background music file
const musicPath = "audio/birthday-song.mp3";

/* =================================================================
   END OF CUSTOMIZATION SECTION
   ================================================================= */


document.addEventListener("DOMContentLoaded", () => {
  fillNames();
  buildIntroStars();
  runIntroTyping();
  setupOpenSurprise();
  setupProgressBar();
  setupNav();
  setupMusic();
  buildPetals();
  setupCake();
  buildGallery();
  setupLightbox();
  buildTimeline();
  buildReasons();
  setupRevealReasonsBtn();
  setupInteractiveHeart();
  runTerminal();
  setupSecret();
  setupFinalPhoto();
  setupScrollReveal();
  buildAmbientSparkles();
  setupCursorTrail();
  setupButtonRipples();
  setupPolaroidTilt();
  setupParallax();
});

/* ---------------- Helpers ---------------- */

function fillNames() {
  document.querySelectorAll(".her-name").forEach((el) => (el.textContent = herName));
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

/* ---------------- Intro screen ---------------- */

function buildIntroStars() {
  const container = document.getElementById("introStars");
  const count = window.innerWidth < 600 ? 40 : 80;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(star);
  }
}

function typeText(el, text, speed = 45) {
  return new Promise((resolve) => {
    let i = 0;
    el.textContent = "";
    el.classList.remove("done");
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        el.classList.add("done");
        resolve();
      }
    }, speed);
  });
}

async function runIntroTyping() {
  const typingEl = document.getElementById("introTyping");
  const subEl = document.getElementById("introSub");
  const btn = document.getElementById("openSurpriseBtn");

  await typeText(typingEl, "Hey... I made something for you ❤️", 45);
  await new Promise((r) => setTimeout(r, 400));

  subEl.textContent = "Before you continue...";
  subEl.classList.add("show");
  await new Promise((r) => setTimeout(r, 500));

  btn.classList.add("show");
}

function setupOpenSurprise() {
  const btn = document.getElementById("openSurpriseBtn");
  const introScreen = document.getElementById("introScreen");
  const experience = document.getElementById("experience");
  const floatingNav = document.getElementById("floatingNav");
  const musicBtn = document.getElementById("musicBtn");

  btn.addEventListener("click", () => {
    burstHearts(30);
    burstConfetti(40);
    introScreen.classList.add("hidden");
    musicBtn.style.display = "flex";

    setTimeout(() => {
      experience.classList.add("visible");
      floatingNav.classList.add("visible");
      document.body.style.overflow = "auto";
    }, 500);
  });

  // Lock scrolling until surprise opened
  document.body.style.overflow = "hidden";
}

function burstHearts(count) {
  const container = document.getElementById("heartBurst");
  const hearts = ["❤️", "💕", "💖", "✨"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = "0";
    heart.style.setProperty("--drift", `${randomBetween(-80, 80)}px`);
    heart.style.animationDuration = `${randomBetween(2.5, 4.5)}s`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

function burstConfetti(count) {
  const container = document.getElementById("heartBurst");
  const colors = ["#E8A0B4", "#D9B475", "#FFF8F2", "#6E1E32"];
  for (let i = 0; i < count; i++) {
    const c = document.createElement("div");
    c.className = "confetto";
    c.style.left = `${Math.random() * 100}%`;
    c.style.top = "-10px";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = `${randomBetween(2, 3.5)}s`;
    container.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ---------------- Progress bar ---------------- */

function setupProgressBar() {
  const bar = document.getElementById("progressBar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${pct}%`;
  });
}

/* ---------------- Navigation ---------------- */

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

/* ---------------- Music ---------------- */

function setupMusic() {
  const btn = document.getElementById("musicBtn");
  const label = document.getElementById("musicLabel");
  const audio = document.getElementById("bgMusic");
  audio.querySelector("source").src = musicPath;
  audio.load();

  let playing = false;

  btn.addEventListener("click", () => {
    if (!playing) {
      audio.play().catch(() => {
        label.textContent = "Add music file";
      });
      playing = true;
      btn.classList.add("playing");
      label.textContent = "Music On";
    } else {
      audio.pause();
      playing = false;
      btn.classList.remove("playing");
      label.textContent = "Music Off";
    }
  });
}

/* ---------------- Falling petals (home section) ---------------- */

function buildPetals() {
  const container = document.getElementById("petalsHome");
  const petals = ["🌸", "💮", "🌷"];
  const count = window.innerWidth < 600 ? 8 : 14;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = `${Math.random() * 100}%`;
    p.style.setProperty("--drift", `${randomBetween(-60, 60)}px`);
    p.style.animationDuration = `${randomBetween(10, 18)}s`;
    p.style.animationDelay = `${randomBetween(0, 12)}s`;
    p.style.fontSize = `${randomBetween(0.8, 1.3)}rem`;
    container.appendChild(p);
  }
}

/* ---------------- Cake / Make a wish ---------------- */

function setupCake() {
  const btn = document.getElementById("wishBtn");
  const message = document.getElementById("wishMessage");
  const flames = document.querySelectorAll(".flame");

  btn.addEventListener("click", () => {
    flames.forEach((f) => f.classList.add("out"));
    message.classList.add("show");
    burstHeartsAt(btn, 16);
    flames.forEach((f) => spawnSmoke(f));
  });
}

function spawnSmoke(flameEl) {
  const rect = flameEl.getBoundingClientRect();
  for (let i = 0; i < 4; i++) {
    const s = document.createElement("div");
    s.className = "smoke";
    s.style.position = "fixed";
    s.style.left = `${rect.left + rect.width / 2}px`;
    s.style.top = `${rect.top + window.scrollY}px`;
    s.style.setProperty("--sx", `${randomBetween(-14, 14)}px`);
    s.style.animationDelay = `${i * 0.12}s`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 2200);
  }
}

function burstHeartsAt(el, count) {
  const rect = el.getBoundingClientRect();
  const container = document.getElementById("heartBurst");
  const hearts = ["❤️", "💕", "✨"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${rect.left + rect.width / 2 + randomBetween(-40, 40)}px`;
    heart.style.top = `${rect.top + window.scrollY}px`;
    heart.style.bottom = "auto";
    heart.style.position = "absolute";
    heart.style.setProperty("--drift", `${randomBetween(-60, 60)}px`);
    heart.style.animationDuration = `${randomBetween(2, 3.5)}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

/* ---------------- Gallery ---------------- */

function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  renderGallery(grid, memories);
}

function renderGallery(grid, items) {
  grid.innerHTML = "";
  items.forEach((item, index) => {
    const fig = document.createElement("figure");
    fig.className = "polaroid";
    fig.style.setProperty("--rot", `${randomBetween(-6, 6)}deg`);
    fig.dataset.index = index;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.caption || "Memory";
    img.loading = "lazy";
    // Hide gracefully if a placeholder image path doesn't exist yet
    img.addEventListener("error", () => {
      fig.style.display = "none";
    });

    fig.appendChild(img);

    if (item.caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = item.caption;
      fig.appendChild(caption);
    }

    fig.addEventListener("click", () => openLightbox(index));
    grid.appendChild(fig);
  });
  observeRevealTargets();
}

/* Photo upload — works entirely client-side, no backend needed */
document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("photoUpload");
  uploadInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        memories.push({ image: ev.target.result, caption: "" });
        renderGallery(document.getElementById("galleryGrid"), memories);
      };
      reader.readAsDataURL(file);
    });
  });
});

/* ---------------- Lightbox ---------------- */

let currentLightboxIndex = 0;

function setupLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => shiftLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => shiftLightbox(1));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") shiftLightbox(-1);
    if (e.key === "ArrowRight") shiftLightbox(1);
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxImage();
  document.getElementById("lightbox").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

function shiftLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + memories.length) % memories.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const item = memories[currentLightboxIndex];
  const img = document.getElementById("lightboxImg");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = item.image;
    img.style.opacity = 1;
  }, 150);
  document.getElementById("lightboxCaption").textContent = item.caption || "";
}

/* ---------------- Timeline ---------------- */

function buildTimeline() {
  const container = document.getElementById("timelineList");
  timelineData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `
      <span class="timeline-date">${item.date}</span>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-text">${item.text}</p>
    `;
    container.appendChild(div);
  });
  observeRevealTargets();
}

/* ---------------- Reasons ---------------- */

function buildReasons() {
  const grid = document.getElementById("reasonsGrid");
  reasonsData.forEach((r) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.innerHTML = `
      <div class="reason-icon">${r.icon}</div>
      <h3 class="reason-title">${r.title}</h3>
      <p class="reason-text">${r.text}</p>
    `;
    grid.appendChild(card);
  });
}

function setupRevealReasonsBtn() {
  const btn = document.getElementById("reasonsBtn");
  const intro = document.getElementById("reasonsIntro");
  const cards = document.querySelectorAll(".reason-card");

  btn.addEventListener("click", () => {
    intro.style.display = "none";
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add("show"), i * 150);
    });
  });
}

/* ---------------- Interactive heart ---------------- */

function setupInteractiveHeart() {
  const heart = document.getElementById("bigHeart");
  const countEl = document.getElementById("heartCount");
  const label = document.getElementById("heartLabel");
  const finalMsg = document.getElementById("heartFinalMessage");
  const particlesContainer = document.getElementById("heartParticles");
  let count = 0;

  heart.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    const scale = Math.min(1 + count * 0.03, 1.6);
    heart.style.transform = `scale(${scale})`;
    heart.style.filter = `drop-shadow(0 0 ${Math.min(count * 2, 40)}px rgba(217,180,117,0.8))`;

    for (let i = 0; i < 6; i++) {
      const mini = document.createElement("div");
      mini.className = "mini-heart";
      mini.textContent = "❤️";
      mini.style.left = "50%";
      mini.style.top = "50%";
      mini.style.setProperty("--mx", `${randomBetween(-70, 70)}px`);
      mini.style.setProperty("--my", `${randomBetween(-90, -30)}px`);
      particlesContainer.appendChild(mini);
      setTimeout(() => mini.remove(), 900);
    }

    if (count === 5) {
      label.textContent = "Keep going...";
    }
    if (count === 15) {
      label.textContent = "You really like tapping this, huh?";
    }
    if (count === 25) {
      finalMsg.classList.add("show");
    }
  });
}

/* ---------------- Terminal easter egg ---------------- */

async function runTerminal() {
  const body = document.getElementById("terminalBody");
  const lines = [
    "Initializing birthday.exe...",
    "",
    "Loading memories [██████████] 100%",
    "",
    "Smile.exe        RUNNING",
    "Beautiful.exe    TRUE",
    "Love.exe         RUNNING",
    "Forever.exe      ENABLED ❤️",
  ];

  // Only run once it's scrolled into view
  const section = document.querySelector(".terminal-section");
  const observer = new IntersectionObserver(
    async (entries, obs) => {
      if (entries[0].isIntersecting) {
        obs.disconnect();
        for (const line of lines) {
          const div = document.createElement("div");
          if (line.includes("RUNNING") || line.includes("TRUE") || line.includes("ENABLED")) {
            div.innerHTML = line.replace(
              /(RUNNING|TRUE|ENABLED ❤️)/,
              '<span class="ok">$1</span>'
            );
          } else {
            div.textContent = line || "\u00A0";
          }
          body.appendChild(div);
          await new Promise((r) => setTimeout(r, 350));
        }
        const cursorLine = document.createElement("div");
        cursorLine.className = "cursor";
        body.appendChild(cursorLine);
      }
    },
    { threshold: 0.4 }
  );
  observer.observe(section);
}

/* ---------------- Secret message ---------------- */

function setupSecret() {
  const form = document.getElementById("secretForm");
  const input = document.getElementById("secretInput");
  const error = document.getElementById("secretError");
  const lock = document.getElementById("secretLock");
  const letter = document.getElementById("secretLetter");
  const letterText = document.getElementById("letterText");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === secretCode) {
      error.classList.remove("show");
      lock.classList.add("hidden");
      letter.classList.add("show");
      burstConfettiGold();
      typeText(letterText, secretMessage, 25);
    } else {
      error.classList.add("show");
      input.value = "";
    }
  });
}

function burstConfettiGold() {
  const container = document.getElementById("heartBurst");
  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.className = "confetto";
    c.style.position = "fixed";
    c.style.left = `${Math.random() * 100}%`;
    c.style.top = "-10px";
    c.style.background = ["#D9B475", "#EAD3A3", "#E8A0B4"][Math.floor(Math.random() * 3)];
    c.style.animationDuration = `${randomBetween(2, 3.5)}s`;
    container.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ---------------- Final section photo ---------------- */

function setupFinalPhoto() {
  const el = document.getElementById("finalPhoto");
  if (finalPhoto) {
    el.style.backgroundImage = `url('${finalPhoto}')`;
  } else {
    el.style.display = "none";
  }
}

/* ---------------- Scroll reveal (IntersectionObserver) ---------------- */

let revealObserver;

function setupScrollReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15 }
  );
  observeRevealTargets();
}

function observeRevealTargets() {
  if (!revealObserver) return;
  document
    .querySelectorAll(".polaroid:not(.in-view), .timeline-item:not(.in-view)")
    .forEach((el) => revealObserver.observe(el));
}

/* ---------------- Ambient sparkle layer (whole page) ---------------- */

function buildAmbientSparkles() {
  const layer = document.createElement("div");
  layer.className = "ambient-layer";
  document.body.appendChild(layer);

  const count = window.innerWidth < 600 ? 12 : 22;
  for (let i = 0; i < count; i++) {
    const spark = document.createElement("div");
    spark.className = "ambient-spark";
    const size = randomBetween(3, 7);
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 100}%`;
    spark.style.animationDuration = `${randomBetween(9, 18)}s`;
    spark.style.animationDelay = `${randomBetween(0, 14)}s`;
    layer.appendChild(spark);
  }
}

/* ---------------- Cursor heart trail ---------------- */

function setupCursorTrail() {
  // Only on devices with a real mouse (skip on touch-only phones to save battery)
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let lastSpawn = 0;
  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - lastSpawn < 120) return; // throttle
    lastSpawn = now;

    const heart = document.createElement("div");
    heart.className = "cursor-heart";
    heart.textContent = Math.random() > 0.5 ? "❤️" : "✨";
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  });
}

/* ---------------- Button ripple effect ---------------- */

function setupButtonRipples() {
  document.querySelectorAll(".btn-glow, .btn-outline").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
}

/* ---------------- Polaroid 3D tilt on mouse move ---------------- */

function setupPolaroidTilt() {
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest && e.target.closest(".polaroid");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y / rect.height) - 0.5) * -14;
    const rotY = ((x / rect.width) - 0.5) * 14;
    card.style.transform = `rotate(0deg) scale(1.04) translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  document.addEventListener(
    "mouseout",
    (e) => {
      const card = e.target.closest && e.target.closest(".polaroid");
      if (!card) return;
      card.style.transform = `rotate(var(--rot, 0deg))`;
    },
    true
  );
}

/* ---------------- Subtle parallax on headings ---------------- */

function setupParallax() {
  const targets = document.querySelectorAll(".reveal-title, .final-title");
  if (!targets.length) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const offset = rect.top + scrollY;
      const distance = scrollY - offset;
      el.style.transform = `translateY(${distance * 0.06}px)`;
    });
  });
}