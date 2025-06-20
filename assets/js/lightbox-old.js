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
    const src = slides[currentIndex];
console.log(src)
    // Detect if it's a Highcharts chart (based on filename/id)
    const isChart = src.endsWith(".svg") === false;

    // clear container first
    lightboxContent.innerHTML = "";

    if (isChart) {
      const chartId = src;
      const chartContainerId = `container-${chartId}`;
      const containerDiv = document.createElement("div");
      containerDiv.id = chartContainerId;
      containerDiv.className = "highcharts-wrapper";
      containerDiv.setAttribute("indikator-id-data", chartId);
      lightboxContent.appendChild(containerDiv);

      // Call chart render function
      lazyRenderChartById(chartId, undefined, window.view);
    } else {
      // fallback: render image
      const img = document.createElement("img");
      img.src = src;
      img.className = "max-w-full max-h-[90vh] mx-auto";
      lightboxContent.appendChild(img);
    }

    // Update indicator dot states
    Array.from(indicators.children).forEach((dot, i) => {
      dot.classList.toggle("bg-white", i === currentIndex);
      dot.classList.toggle("bg-gray-500", i !== currentIndex);
    });

    // Update text count like "3 / 10"
    if (indicators.firstChild) {
      indicators.firstChild.textContent = `${currentIndex + 1} / ${slides.length}`;
    }
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  function waitForElements(selector, callback) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements);
    } else {
      setTimeout(() => waitForElements(selector, callback), 100);
    }
  }

  waitForElements(".lightbox-trigger", (elements) => {
    console.log("Lightbox elements found:", elements);

    console.log(elements[0].dataset)
    slides = [...elements].map((el) => el.dataset.src);

    elements.forEach((item, index) => {
      item.addEventListener("click", () => {
        openLightbox(index);
      });

      if (index === 0) {
        const label = document.createElement("div");
        label.className = "text-sm text-white";
        label.textContent = `1 / ${elements.length}`;
        indicators.appendChild(label);
      } else {
        const dot = document.createElement("div");
        dot.className = "w-3 h-3 rounded-full bg-gray-500 cursor-pointer";
        dot.addEventListener("click", () => openLightbox(index));
        indicators.appendChild(dot);
      }
    });
  });
});
