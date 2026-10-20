/**
 * AI Story Creation Workflow — Neon Pipeline
 */
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".workflow-section");
  const nodes = document.querySelectorAll(".wf-node");
  const progressFill = document.querySelector(".wf-progress-fill");
  const currentNum = document.querySelector(".wf-current-num");
  const totalSteps = nodes.length;
  let activeIndex = 0;
  let cycleTimer = null;

  function padStep(n) {
    return String(n).padStart(2, "0");
  }

  function setActiveStep(index) {
    activeIndex = index;
    nodes.forEach((node, i) => {
      node.classList.toggle("wf-active", i === index);
    });
    if (progressFill) {
      progressFill.style.width = `${((index + 1) / totalSteps) * 100}%`;
    }
    if (currentNum) {
      currentNum.textContent = padStep(index + 1);
    }
  }

  function startCycle() {
    if (cycleTimer) clearInterval(cycleTimer);
    cycleTimer = setInterval(() => {
      setActiveStep((activeIndex + 1) % totalSteps);
    }, 3500);
  }

  function stopCycle() {
    if (cycleTimer) {
      clearInterval(cycleTimer);
      cycleTimer = null;
    }
  }

  /* Scroll reveal */
  if (section && nodes.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nodes.forEach((node) => node.classList.add("wf-visible"));
            setActiveStep(0);
            startCycle();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
  }

  /* Click / hover interaction on desktop nodes */
  nodes.forEach((node, i) => {
    node.addEventListener("mouseenter", () => {
      stopCycle();
      setActiveStep(i);
    });
    node.addEventListener("click", () => {
      stopCycle();
      setActiveStep(i);
    });
  });

  const pipeline = document.querySelector(".workflow-pipeline");
  if (pipeline) {
    pipeline.addEventListener("mouseleave", () => {
      startCycle();
    });
  }

  /* Mobile swiper */
  const swiperEl = document.querySelector(".workflow-swiper");
  if (swiperEl && typeof Swiper !== "undefined") {
    new Swiper(".workflow-swiper", {
      slidesPerView: 1.15,
      centeredSlides: true,
      spaceBetween: 16,
      loop: true,
      speed: 500,
      grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".workflow-pagination",
        clickable: true,
      },
      breakpoints: {
        480: { slidesPerView: 1.3, spaceBetween: 18 },
        576: { slidesPerView: 1.5, spaceBetween: 20 },
      },
    });
  }
});
