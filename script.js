// ========================================
// THẦY ÂN - LANDING PAGE INTERACTIONS
// ========================================

// === NAVIGATION BAR ===
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-link');

// Mobile menu toggle
navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navbarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navbarToggle.classList.remove('active');
    navbarMenu.classList.remove('active');

    // Immediately set active state on clicked link
    navbarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Active link highlighting based on scroll position
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.2,
  rootMargin: '-80px 0px -60% 0px'
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  navObserver.observe(section);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, null, targetId);
      } else {
        window.location.hash = targetId;
      }
    }
  });
});

// Intersection Observer for scroll animations
const sectionObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, sectionObserverOptions);

// Observe sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// Service cards stagger animation
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// Why items stagger animation
const whyItems = document.querySelectorAll('.why-item');
whyItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, sectionObserverOptions);

  itemObserver.observe(item);
});

// Gallery data and generation
const galleryData = [
  { id: 1, title: 'Lớp Cầu Lông Cơ Bản', category: 'badminton' },
  { id: 2, title: 'Học Viên Luyện Bơi', category: 'swimming' },
  { id: 3, title: 'Thi Đấu Cầu Lông', category: 'badminton' },
  { id: 4, title: 'Kỹ Thuật Bơi Ếch', category: 'swimming' },
  { id: 5, title: 'Huấn Luyện Chiến Thuật', category: 'badminton' },
  { id: 6, title: 'Lớp Bơi Thiếu Nhi', category: 'swimming' }
];

// Populate gallery
const galleryGrid = document.getElementById('gallery-grid');
if (galleryGrid) {
  galleryData.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
      <img src="gallery-${item.id}.jpg" alt="${item.title}" id="gallery-img-${item.id}">
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
      </div>
    `;
    galleryGrid.appendChild(galleryItem);
  });
}

// Parallax effect for floating background
let scrollPos = 0;
window.addEventListener('scroll', () => {
  scrollPos = window.pageYOffset;
  const floatingShapes = document.querySelectorAll('.floating-shape');
  floatingShapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.05;
    shape.style.transform = `translateY(${scrollPos * speed}px)`;
  });
});

// Split screen hover effect
const splitItems = document.querySelectorAll('.split-item');
splitItems.forEach(item => {
  item.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.05)';
  });

  item.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });
});

// Stats counter animation
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + (element.dataset.suffix || '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + (element.dataset.suffix || '');
    }
  }, 16);
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      const statNumbers = entry.target.querySelectorAll('.stat-number');

      statNumbers.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/[0-9]/g, '');
        stat.dataset.suffix = suffix;
        stat.textContent = '0' + suffix;

        setTimeout(() => {
          animateCounter(stat, number);
        }, 200);
      });
    }
  });
}, { threshold: 0.5 });

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
  statsObserver.observe(statsGrid);
}

// Button ripple effect enhancement
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple styles dynamically
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Images will be generated, so we keep the src as is
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
  });
}

// Add scroll progress indicator
const createScrollIndicator = () => {
  const indicator = document.createElement('div');
  indicator.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-golden), var(--color-golden-light));
    z-index: 9999;
    transition: width 0.1s ease;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.5);
  `;
  document.body.appendChild(indicator);

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    indicator.style.width = scrolled + '%';
  });
};

createScrollIndicator();

console.log('🏸 Thầy Ân Landing Page - Loaded Successfully! 🏊');
