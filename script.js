// Countdown Timer
const weddingDate = new Date("December 20, 2025 00:00:00").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "🎉 It's Wedding Time!";
  }
}, 1000);

// Music Control
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.innerText = "Pause Music 🎵";
  } else {
    bgMusic.pause();
    musicToggle.innerText = "Play Music ▶️";
  }
});

// Google Maps Initialization
function initMap() {
  const weddingLocation = { lat: 5.9631, lng: 116.0481 }; // Magellan Sutera KK coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: weddingLocation,
  });
  const marker = new google.maps.Marker({
    position: weddingLocation,
    map: map,
    title: "Wedding Location",
  });
}
