window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const leftBtn = document.querySelector('.nav-btn.left');
  const rightBtn = document.querySelector('.nav-btn.right');
  let currentIndex = 0;

  if (!slides.length || !dots.length || !leftBtn || !rightBtn) {
    console.error("One or more required elements for the slider are missing.");
    return;
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Initialize first slide
  showSlide(currentIndex);
});
// for skills part 
const bars = document.querySelectorAll('.bar');

  const animateBars = () => {
    bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = percent;
    });
  };

  const skillsSection = document.querySelector('.skills-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars();
        observer.unobserve(skillsSection); // run only once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillsSection);

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top when clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });





//   const header = document.getElementById("mainHeader");
//   let lastScrollTop = 0;

//   window.addEventListener("scroll", () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Shrink header when scrolling down
//     if (scrollTop > 100) {
//       header.classList.add("shrink");
//     } else {
//       header.classList.remove("shrink");
//     }

//     // Show header when scrolling up
//     if (scrollTop < lastScrollTop) {
//       header.classList.add("visible");
//     } else {
//       header.classList.remove("visible");
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//   });