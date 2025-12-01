  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let index = 0;
    let timer;

    function showSlide(i) {
      if (i >= slides.length) index = 0;
      else if (i < 0) index = slides.length - 1;
      else index = i;

      slides.forEach(s => s.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));

      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }

    function autoSlide() {
      timer = setInterval(() => {
        showSlide(index + 1);
      }, 4000);
    }

    function resetTimer() {
      clearInterval(timer);
      autoSlide();
    }

    prev.addEventListener("click", () => {
      showSlide(index - 1);
      resetTimer();
    });

    next.addEventListener("click", () => {
      showSlide(index + 1);
      resetTimer();
    });

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        showSlide(parseInt(dot.dataset.slide));
        resetTimer();
      });
    });

    showSlide(index);
    autoSlide();
  });
