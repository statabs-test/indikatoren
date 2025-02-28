document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const closeBtn = document.getElementById("close-lightbox");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  const indicators = document.getElementById("carousel-indicators");

  let slides = [];
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.remove("hidden");
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateLightbox();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateLightbox();
  }

  function updateLightbox() {
    if (!slides.length) return;

    lightboxContent.innerHTML = `
          <img src="${slides[currentIndex]}" class="max-w-full max-h-[90vh] mx-auto">
        `;

    Array.from(indicators.children).forEach((dot, i) => {
      dot.classList.toggle("bg-white", i === currentIndex);
      dot.classList.toggle("bg-gray-500", i !== currentIndex);
    });
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // ✅ Wait until .lightbox-trigger elements exist
  function waitForElements(selector, callback) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements);
    } else {
      setTimeout(() => waitForElements(selector, callback), 100);
    }
  }

  // Initialize lightbox when elements are ready
  waitForElements(".lightbox-trigger", (elements) => {
    console.log("Lightbox elements found:", elements);

    elements.forEach((item, index) => {
      console.log(item);
      item.addEventListener("click", () => {
        slides = [...document.querySelectorAll(".lightbox-trigger")].map(
          (el) => el.dataset.src
        );
        openLightbox(index);
      });

      // Create navigation dots dynamically
      const dot = document.createElement("div");
      dot.className = "w-3 h-3 rounded-full bg-gray-500 cursor-pointer";
      dot.addEventListener("click", () => openLightbox(index));
      indicators.appendChild(dot);
    });
  });
});
