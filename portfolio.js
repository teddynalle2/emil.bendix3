const overlay = document.getElementById('overlay');
const panels = Array.from({ length: 7 }, (_, i) =>
  document.getElementById(`panel${i + 1}`)
);

function openPanel(panelNumber) {
  closeAllPanels(); // Ensure no other panel is open
  overlay.classList.add('active');
  panels[panelNumber - 1].classList.add('active');
}

function closeAllPanels() {
  overlay.classList.remove('active');
  panels.forEach(panel => panel.classList.remove('active'));
}
// AUDIO
let audio = new Audio();
let isPlaying = false;

const nowPlaying = document.getElementById('nowPlaying');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volume');

// Load and play a specific sound
function playSpecificSound(filename) {
  audio.src = filename;
  audio.play();
  isPlaying = true;
  nowPlaying.textContent = 'Now Playing: ' + filename;
  playPauseBtn.textContent = 'Pause';
}

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
  if (!audio.src) return;

  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  } else {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
});

// Volume control
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});



// show hide 

function toggleMultipleDivs(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
    }
  });
}

//smooth scroll

document.getElementById('scrollButton').addEventListener('click', function () {
document.getElementById('div1').scrollIntoView({
behavior: 'smooth'
});
});