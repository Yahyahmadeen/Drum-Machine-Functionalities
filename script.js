const display = document.getElementById('display');
const powerToggle = document.getElementById('powerToggle');
const bankToggle = document.getElementById('bankToggle');
const volumeControl = document.getElementById('volume');
const pads = document.querySelectorAll('.drum-pad');

const bankOne = {
  Q: { name: 'Kick', src: 'sounds/kick.wav' },
  W: { name: 'Snare', src: 'sounds/snare.wav' },
  E: { name: 'HiHat', src: 'sounds/hihat.wav' },
  A: { name: 'Clap', src: 'sounds/clap.wav' },
  S: { name: 'Tom', src: 'sounds/tom.wav' },
  D: { name: 'Shaker', src: 'sounds/shaker.wav' },
  Z: { name: 'OpenHat', src: 'sounds/openhat.wav' },
  X: { name: 'Perc', src: 'sounds/perc.wav' },
  C: { name: 'Crash', src: 'sounds/crash.wav' },
};

const bankTwo = {
  Q: { name: 'Chord1', src: 'sounds/chord1.wav' },
  W: { name: 'Chord2', src: 'sounds/chord2.wav' },
  E: { name: 'Chord3', src: 'sounds/chord3.wav' },
  A: { name: 'Shimmer', src: 'sounds/shimmer.wav' },
  S: { name: 'Bass', src: 'sounds/bass.wav' },
  D: { name: 'Zap', src: 'sounds/zap.wav' },
  Z: { name: 'Kick2', src: 'sounds/kick2.wav' },
  X: { name: 'Tom2', src: 'sounds/tom2.wav' },
  C: { name: 'Snare2', src: 'sounds/snare2.wav' },
};

function getCurrentBank() {
  return bankToggle.checked ? bankTwo : bankOne;
}

function playSound(key) {
  if (!powerToggle.checked) return;

  const bank = getCurrentBank();
  const sound = bank[key];

  if (sound) {
    const audio = new Audio(sound.src);
    audio.volume = volumeControl.value;
    audio.play();
    display.innerText = sound.name;
  }
}

pads.forEach(pad => {
  pad.addEventListener('click', () => playSound(pad.dataset.key));
});

document.addEventListener('keydown', (e) => {
  playSound(e.key.toUpperCase());
});
