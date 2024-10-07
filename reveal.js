const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementsOnScreen =
      revealElements[i].getBoundingClientRect().top < window.innerHeight;

    if (isElementsOnScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.onload = function () {
  const audio = document.getElementById("myAudio");
  audio.currentTime = 85; 
  audio.play();
};

window.addEventListener("scroll", scrollReveal);

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("myAudio");
  audio.play().catch(error => {
      console.error("Error playing audio:", error);
  });
});
