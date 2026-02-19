// Kadraj Rotam - Consolidated JavaScript
// Page router based on location.pathname

(function() {
  'use strict';

  // Page detection helper
  function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('premium-routes') || path.includes('premium-routes.html')) {
      return 'premium-routes';
    }
    if (path.includes('the-way-of-seeing') || path.includes('the-way-of-seeing.html')) {
      return 'the-way-of-seeing';
    }
    if (path.includes('editorial-archive') || path.includes('editorial-archive.html')) {
      return 'editorial-archive';
    }
    // Default to index/home page
    return 'index';
  }

  // Wait for DOM to be ready
  function init() {
    const page = getCurrentPage();
    
    switch(page) {
      case 'index':
        initIndexPage();
        break;
      case 'premium-routes':
        initPremiumRoutesPage();
        break;
      case 'the-way-of-seeing':
        initTheWayOfSeeingPage();
        break;
      case 'editorial-archive':
        initEditorialArchivePage();
        break;
    }
  }

  // ============================================
  // INDEX PAGE - 3D Globe
  // ============================================
  function initIndexPage() {
    const container = document.getElementById('globeContainer');
    if (!container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, -0.4);
    pointLight.position.set(10, 5, 10);
    scene.add(pointLight);

    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 1
    });

    const loader = new THREE.TextureLoader();
    loader.load('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Solarsystemscope_texture_2k_earth_daymap.jpg/2560px-Solarsystemscope_texture_2k_earth_daymap.jpg',
      (texture) => {
        material.map = texture;
        material.needsUpdate = true;
      });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    let isDragging = false;
    
    function animate() {
      requestAnimationFrame(animate);
      if (!isDragging) globe.rotation.y += 0.0018;
      renderer.render(scene, camera);
    }

    container.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        globe.rotation.y += e.movementX * 0.005;
        globe.rotation.x += e.movementY * 0.005;
      }
    });

    window.addEventListener('resize', () => {
      const size = container.clientWidth;
      renderer.setSize(size, size);
      camera.updateProjectionMatrix();
    });

    animate();
  }

  // ============================================
  // PREMIUM ROUTES PAGE
  // ============================================
  function initPremiumRoutesPage() {
    const routes = [
      {
        id: 1,
        name: "WHISPERING PEAKS",
        location: "Himalayas",
        season: "Spring",
        year: "2022",
        status: "ARCHIVED",
        mainImage: "assets/img/whispespering1.jpg",
        caption: "Where the sky touches the soul.",
        description: "On the roof of the world, every turn reveals a new horizon. Thin air, deep silence, pure light. Prayer flags and stone trails make the journey feel timeless. This is as much inner travel as it is physical.",
        galleryImages: [
          "assets/img/whispespering1.jpg",
          "assets/img/whispespering2.jpg",
          "assets/img/whispespering3.jpg",
          "assets/img/whispespering4.jpg",
          "assets/img/whispespering5.jpg",
          "assets/img/whispespering6.jpg",
          "assets/img/whispespering7.jpg"
        ]
      },
      {
        id: 2,
        name: "EMERALD BREATH",
        location: "Amazon Rainforest",
        season: "Summer",
        year: "2023",
        status: "AVAILABLE",
        mainImage: "assets/img/emerald1.jpg",
        caption: "The forest remembers everything.",
        description: "A living labyrinth of water, roots, and breath. The Amazon is not silent—it listens. Every step is answered by leaves, rivers, and unseen life. Time dissolves here, replaced by rhythm and pulse.",
        galleryImages: [
          "assets/img/emerald1.jpg",
          "assets/img/emerald2.jpg",
          "assets/img/emerald3.jpg",
          "assets/img/emerald4.jpg",
          "assets/img/emerald5.jpg",
          "assets/img/emerald6.jpg"
        ]
      },
      {
        id: 3,
        name: "ETERNAL DUNES",
        location: "Pyramids of Giza",
        season: "Winter",
        year: "2023",
        status: "AVAILABLE",
        mainImage: "assets/img/eternal1.jpg",
        caption: "Time stood still in the desert heat.",
        description: "Walking under the shadow of millennia-old stones, you feel the weight of history. At sunrise, the pyramids turn gold while the desert swallows every sound. Sand beneath your feet seems to whisper stories of vanished civilizations. By late afternoon, their massive shadows stretch across the dunes and remind you how short a lifetime is. This route is the stone-shaped form of humanity's search for immortality.",
        galleryImages: [
          "assets/img/eternal1.jpg",
          "assets/img/eternal2.jpg",
          "assets/img/eternal3.jpg",
          "assets/img/eternal4.jpg"
        ]
      },
      {
        id: 4,
        name: "ALTAI ECHOES",
        location: "Altai Mountains",
        season: "Summer",
        year: "2023",
        status: "AVAILABLE",
        mainImage: "assets/img/altai1.jpg",
        caption: "The mountains remember what we forget.",
        description: "Between glacial lakes reflecting sharp peaks, you follow ancient nomadic trails. Each valley brings a different ecosystem, each pass a different story. Shamanic traditions still feel woven into the land's spirit. Wild horses graze in the distance as eagles complete the circle overhead. Walking in Altai feels like touching a part of the world that remains unbroken.",
        galleryImages: [
          "assets/img/altai1.jpg",
          "assets/img/altai2.jpg",
          "assets/img/altai3.jpg",
          "assets/img/altai4.jpg",
          "assets/img/altai5.jpg"
        ]
      },
      {
        id: 5,
        name: "ANCIENT WALL",
        location: "Great Wall of China",
        season: "Autumn",
        year: "2022",
        status: "ARCHIVED",
        mainImage: "assets/img/ancient1.jpg",
        caption: "Walking through centuries of silence.",
        description: "As you walk along this colossal structure following the mountain ridges, you can almost hear history breathing. Every stone carries the trace of a life and a labor. Autumn leaves falling onto ancient masonry remind you of time's cycle. The wall fading into the horizon symbolizes human will challenging nature. This is not only a geographical journey, but a journey through centuries.",
        galleryImages: [
          "assets/img/ancient1.jpg"
        ]
      },
      {
        id: 6,
        name: "JADE RIVERS",
        location: "Huangshan",
        season: "Spring",
        year: "2023",
        status: "AVAILABLE",
        mainImage: "assets/img/jade1.jpg",
        caption: "Mist that paints the mountains.",
        description: "Granite peaks rise through mist like a living ink painting. Narrow wooden bridges over cliffs blend adrenaline with calm. At dawn, watching the sun break above a sea of clouds is unforgettable. Ancient pines whisper stories in the wind. Huangshan proves nature itself can be a masterpiece.",
        galleryImages: [
          "assets/img/jade1.jpg"
        ]
      },
      {
        id: 7,
        name: "SILENT COAST",
        location: "Gökçeada",
        season: "Autumn",
        year: "2023",
        status: "available",
        mainImage: "assets/img/silent1.jpg",
        caption: "The wind sounded louder than footsteps.",
        description: "On the calmest island of the Aegean, time slows down. Olive-lined paths carry traces of the past. Sea-blue and sky-blue melt into one. When late afternoon light hits the rocks, everything turns into golden silence.",
        galleryImages: [
          "assets/img/silent1.jpg",
          "assets/img/silent2.jpg",
          "assets/img/silent3.jpg",
          "assets/img/silent4.jpg"
        ]
      }
    ];

    const grid = document.getElementById("kr-grid");
    const list = document.getElementById("kr-list");
    const detail = document.getElementById("kr-detail");
    const heroImg = document.getElementById("kr-hero-img");
    const cap = document.getElementById("kr-cap");
    const title = document.getElementById("kr-title");
    const meta = document.getElementById("kr-meta");
    const long = document.getElementById("kr-long");
    const gallery = document.getElementById("kr-gallery");
    const backBtn = document.getElementById("kr-back");

    if (!grid || !list || !detail) return;

    let scrollY = 0;

    function renderCards() {
      grid.innerHTML = "";
      routes.forEach(r => {
        const card = document.createElement("div");
        const stClass = r.status === "available" ? "ok" : "ar";
        const stText = r.status === "available" ? "AVAILABLE" : "ARCHIVED";

        card.className = "card";
        card.innerHTML = `
          <img class="img" src="${r.mainImage}" alt="${r.name}">
          <div class="content">
            <h3 class="name">${r.name}</h3>
            <p class="loc">${r.location}</p>
            <div class="chip">Season: ${r.season} · ${r.year}</div>
            <p class="desc">${r.description}</p>
            <span class="status ${stClass}">${stText}</span>
            <div class="view">VIEW ROUTE →</div>
          </div>
        `;
        card.addEventListener("click", () => openDetail(r.id));
        grid.appendChild(card);
      });
    }

    function openDetail(id) {
      const r = routes.find(x => x.id === id);
      if (!r) return;

      scrollY = window.scrollY;

      if (heroImg) heroImg.src = r.mainImage;
      if (heroImg) heroImg.alt = r.name;
      if (cap) cap.textContent = r.caption;
      if (title) title.textContent = r.name;
      if (meta) meta.textContent = `${r.location} · ${r.season} · ${r.year} · ${r.status.toUpperCase()}`;
      if (long) long.textContent = r.description;

      if (gallery) {
        gallery.innerHTML = "";
        r.galleryImages.forEach(src => {
          const img = document.createElement("img");
          img.className = "gimg";
          img.src = src;
          img.alt = r.name;
          gallery.appendChild(img);
        });
      }

      if (list) list.style.display = "none";
      if (detail) detail.style.display = "block";
      window.scrollTo(0, 0);
    }

    function back() {
      if (detail) detail.style.display = "none";
      if (list) list.style.display = "block";
      window.scrollTo(0, scrollY);
    }

    if (backBtn) {
      backBtn.addEventListener("click", back);
    }
    renderCards();
  }

  // ============================================
  // THE WAY OF SEEING PAGE
  // ============================================
  function initTheWayOfSeeingPage() {
    const progressBar = document.getElementById('progressBar');
    
    if (progressBar) {
      window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
      });
    }

    // Section hover enhancement
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateX(8px)';
      });
      
      section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateX(0)';
      });
    });

    // Smooth reveal on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }

  // ============================================
  // EDITORIAL ARCHIVE PAGE
  // ============================================
  function initEditorialArchivePage() {
    const photos = [
      { src: "assets/img/mk1.jpg", caption: "A wild plant standing against the last light of the day, turning an ordinary sunset into a quiet silhouette." },
      { src: "assets/img/mk2.jpg", caption: "Layers of clouds catching the final colors of the sun, stretching light across the horizon." },
      { src: "assets/img/mk3.jpg", caption: "Waves breaking against the shore, freezing motion where water meets resistance." },
      { src: "assets/img/mk4.jpg", caption: "A faded rose growing beside a worn stone wall, where time and fragility meet." },
      { src: "assets/img/mk5.jpg", caption: "A small boat resting at the edge of land, suspended between sky and sea." },
      { src: "assets/img/mk6.jpg", caption: "A curved dirt road cutting through trees, leading forward without revealing its end." }
    ];

    const grid = document.getElementById("grid");
    const lightbox = document.getElementById("lightbox");
    const lbImg = document.getElementById("lbImg");
    const lbCap = document.getElementById("lbCap");
    const lbClose = document.getElementById("lbClose");

    if (!grid) return;

    photos.forEach((p, i) => {
      const card = document.createElement("article");
      card.className = "card";

      const thumb = document.createElement("div");
      thumb.className = "thumb";

      const img = document.createElement("img");
      img.src = p.src;
      img.loading = "lazy";
      thumb.appendChild(img);

      const cap = document.createElement("div");
      cap.className = "caption";
      cap.setAttribute("data-index", `Frame Selection — 0${i + 1}`);
      cap.textContent = p.caption;

      thumb.addEventListener("click", () => {
        if (lbImg) lbImg.src = p.src;
        if (lbCap) lbCap.textContent = p.caption;
        if (lightbox) lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });

      card.appendChild(thumb);
      card.appendChild(cap);
      grid.appendChild(card);
    });

    if (lbClose && lightbox) {
      lbClose.addEventListener("click", () => {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
