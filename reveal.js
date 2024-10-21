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

window.addEventListener("scroll", scrollReveal);

// Fungsi untuk memutar audio
const playAudio = () => {
  const audio = document.getElementById("myAudio");
  
  // Mengatur waktu mulai audio ke detik ke-85
  audio.currentTime = 85;

  // Memainkan audio
  audio.play().catch(error => {
    console.error("Error playing audio:", error);
  });
};

// Menunggu interaksi pengguna sebelum memutar audio
let audioPlayed = false;

document.addEventListener("click", () => {
  if (!audioPlayed) {
    playAudio();
    audioPlayed = true; // Tandai bahwa audio telah diputar
  }
});

document.addEventListener("scroll", () => {
  if (!audioPlayed) {
    playAudio();
    audioPlayed = true; // Tandai bahwa audio telah diputar
  }
});
