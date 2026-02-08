// ============================================
// Valentine's Day Interactive Page - Script
// ============================================

// Get DOM elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let musicPlaying = false;

// ============================================
// Music Control
// ============================================
musicToggle.addEventListener("click", () => {
  if (musicPlaying) {
    // Pause music
    bgMusic.pause();
    musicToggle.textContent = "🔇";
    musicPlaying = false;
  } else {
    // Play music with error handling
    bgMusic.play().then(() => {
      musicToggle.textContent = "🔊";
      musicPlaying = true;
    }).catch((error) => {
      console.log("Audio play failed:", error);
      alert("Click the button again to play music!");
    });
  }
});

// ============================================
// Floating Hearts Animation
// ============================================
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.querySelector(".hearts-container").appendChild(heart);
  // Remove heart after animation completes
  setTimeout(() => heart.remove(), 5000);
}

// Create a new heart every 800ms
setInterval(createHeart, 800);

// Preload audio
bgMusic.load();

// ============================================
// Yes Button - Show Thank You Message
// ============================================
yesBtn.addEventListener("click", () => {
  response.textContent = "Thank you, baby. You mean everything to me. I love you so much 💖🌹";
  // Reset animation
  response.style.animation = "none";
  setTimeout(() => {
    response.style.animation = "bounceIn 0.6s ease";
  }, 10);
  
  // Create confetti effect with hearts
  for (let i = 0; i < 50; i++) {
    setTimeout(() => createHeart(), i * 50);
  }
});

// ============================================
// No Button - Move Away on Hover
// ============================================
noBtn.addEventListener("mouseover", () => {
  // Generate random position
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
