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
    lightboxContent.innerHTML = "";
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
    if (!window.slides.length) return;

    const slide = window.slides[currentIndex];
    lightboxContent.innerHTML = "";

    // Highcharts slide (object with id + kuerzel)
    if (typeof slide === "object" && slide.id) {
      console.log(slide);
      console.log("test");
      renderHighchartInModal(slide.id, slide.kuerzel);
    }

    // SVG image slide (string path)
    if (typeof slide === "string" && slide.endsWith(".svg")) {
      const img = document.createElement("img");
      img.src = slide;
      img.className = "max-w-full max-h-[90vh] mx-auto";
      lightboxContent.appendChild(img);
    }

    // Update dots
    /**Array.from(indicators.children).forEach((dot, i) => {
      dot.classList.toggle("bg-white", i === currentIndex);
      dot.classList.toggle("bg-gray-500", i !== currentIndex);
    });*/

    if (indicators.firstChild) {
      indicators.firstChild.textContent = `${currentIndex + 1} / ${
        slides.length
      }`;
    }
  }

  function renderHighchartInModal(id, kuerzel) {
    const templateHtml = document.getElementById(
      "indikator-template-modal-portal"
    ).innerHTML;
    const compiled = _.template(templateHtml);
    const html = compiled({
      id,
      kuerzel,
      lesehilfe: "",
      erlaeuterungen: "",
      kennzahlenset: null,
      renderLink: null,
      externalLinks: null,
    });

    lightboxContent.innerHTML = html;

    setTimeout(() => {
      if (typeof getChartOptionsById === "function") {
        const options = getChartOptionsById(id);
        Highcharts.chart(`container-${id}`, options);
      } else if (typeof lazyRenderChartById === "function") {
        lazyRenderChartById(id, undefined, window.view);
      } else {
        console.warn(`No chart render function available for ID: ${id}`);
      }
    }, 50);
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

  /**waitForElements(".lightbox-trigger", (elements) => {
    console.log(elements);
    slides = [...elements]
      .map((el) => {
        const id = el.dataset.id;
        const kuerzel = el.dataset.kuerzel;
        const src = el.dataset.src;

        if (id && kuerzel) return { id, kuerzel };
        if (src) return src;
        return null;
      })
      .filter(Boolean);

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
        //const dot = document.createElement("div");
        //dot.className = "w-3 h-3 rounded-full bg-gray-500 cursor-pointer";
        //dot.addEventListener("click", () => openLightbox(index));
        //indicators.appendChild(dot);
      }
    });
  });*/

  window.attachLightboxTriggers = function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");
    const indicators = document.getElementById("carousel-indicators");

    const elements = document.querySelectorAll(".lightbox-trigger");
    if (!elements.length) return;
    window.slides = [...elements]
      .map((el) => {
        const id = el.dataset.id;
        const kuerzel = el.dataset.kuerzel;
        const src = el.dataset.src;

        if (id) return { id, kuerzel };
        if (src) return src;
        return null;
      })
      .filter(Boolean);
    elements.forEach((item, index) => {
      item.addEventListener("click", () => openLightbox(index));
    });

    // Reset indicators
    if (indicators) {
      indicators.innerHTML = "";
      const label = document.createElement("div");
      label.className = "text-sm text-white";
      label.textContent = `1 / ${elements.length}`;
      indicators.appendChild(label);
    }
  };
});
