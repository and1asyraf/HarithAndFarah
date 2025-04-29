// =====================
// Countdown Timer
// =====================
const weddingDate = new Date("December 20, 2025 00:00:00").getTime();

const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "🎉 It's Wedding Time!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElements.days.textContent = formatTimeUnit(days);
  countdownElements.hours.textContent = formatTimeUnit(hours);
  countdownElements.minutes.textContent = formatTimeUnit(minutes);
  countdownElements.seconds.textContent = formatTimeUnit(seconds);
}, 1000);

// =====================
// Background Music Toggle
// =====================
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

bgMusic.volume = 0.5;

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "Pause Music 🎵";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "Play Music ▶️";
  }
});

// =====================
// Modal Logic for Places
// =====================
const modal = document.getElementById('placeModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalMapLink = document.getElementById('modalMapLink');

const closeModal = document.querySelector('.close-btn');
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; }

const places = [
  {
    title: "Nasi Lemak Antarabangsa",
    img: "test.png",
    desc: "Famous for rich coconut rice and spicy sambal. Perfect breakfast choice!",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Yee Fung Laksa",
    img: "test.png",
    desc: "The most beloved laksa in KK! Creamy, spicy, and full of flavor.",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Tanjung Aru Beach",
    img: "test.png",
    desc: "Enjoy stunning sunsets, beach walks, and local street food by the sea.",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Kinabalu Park",
    img: "test.png",
    desc: "A UNESCO Heritage Site and nature heaven. Breathtaking trails and cool air.",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Gaya Street Sunday Market",
    img: "test.png",
    desc: "Local crafts, food, and lively culture every Sunday morning in town.",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Gaya Street Sunday Market",
    img: "test.png",
    desc: "Local crafts, food, and lively culture every Sunday morning in town.",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Gaya Street Sunday Market",
    img: "test.png",
    desc: "Local crafts, food, and lively culture every Sunday morning in town.",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Gaya Street Sunday Market",
    img: "test.png",
    desc: "Local crafts, food, and lively culture every Sunday morning in town.",
    map: "https://goo.gl/maps/xyz"
  },
  {
    title: "Gaya Street Sunday Market",
    img: "test.png",
    desc: "Local crafts, food, and lively culture every Sunday morning in town.",
    map: "https://goo.gl/maps/xyz"
  }
];

document.querySelectorAll('.grid-container .card').forEach((card, index) => {
  card.onclick = () => {
    const place = places[index];
    modalTitle.textContent = place.title;
    modalImage.src = place.img;
    modalImage.alt = place.title;
    modalDescription.textContent = place.desc;
    modalMapLink.href = place.map;
    modal.style.display = 'flex';
  };
});
