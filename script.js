const pointer = document.getElementById("pointer");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const zone = document.getElementById("zone");
const streakText = document.getElementById("streak");
const bestText = document.getElementById("best");
const modeText = document.getElementById("modeText");

let angle = 0;
let active = false;
let interval;
let streak = 0;
let best = 0;
let zoneAngle = 0;

let mode = "normal";
let speed = 5;
let goodRange = 18;
let greatRange = 8;

function setMode(selectedMode) {

  mode = selectedMode;

  if (mode === "easy") {
    speed = 4;
    goodRange = 25;
    greatRange = 12;
    modeText.innerText = "Easy";
  }

  if (mode === "normal") {
    speed = 6;
    goodRange = 18;
    greatRange = 8;
    modeText.innerText = "Normal";
  }

  if (mode === "hard") {
    speed = 9;
    goodRange = 10;
    greatRange = 4;
    modeText.innerText = "Hard";
  }
}

setMode("normal");

function randomizeZone() {

  zoneAngle = Math.floor(Math.random() * 360);

  zone.style.transform = `rotate(${zoneAngle}deg)`;
}

function startGame() {

  clearInterval(interval);

  angle = 0;
  active = true;

  randomizeZone();

  result.innerText = "GO!";

  interval = setInterval(function () {

    angle += speed;

    pointer.style.transform = `rotate(${angle}deg)`;

    if (angle >= 360) {

      clearInterval(interval);

      active = false;

      streak = 0;
      streakText.innerText = streak;

      result.innerText = "MISSED! STREAK LOST!";
    }

  }, 16);
}

startBtn.addEventListener("click", startGame);

function getDifference(a, b) {

  let diff = Math.abs(a - b) % 360;

  return diff > 180 ? 360 - diff : diff;
}

document.addEventListener("keydown", function (e) {

  if (e.code !== "Space") return;

  if (!active) return;

  clearInterval(interval);

  active = false;

  let hit = angle % 360;

  let difference = getDifference(hit, zoneAngle);

  if (difference <= greatRange) {

    streak++;

    result.innerText = "GREAT SKILL CHECK!";

  } else if (difference <= goodRange) {

    streak++;

    result.innerText = "GOOD SKILL CHECK!";

  } else {

    streak = 0;

    result.innerText = "MISS! STREAK LOST!";
  }

  if (streak > best) {
    best = streak;
  }

  streakText.innerText = streak;
  bestText.innerText = best;

  if (streak === 5) {
    result.innerText += " BONUS SURVIVOR!";
  }

  if (streak === 10) {
    result.innerText += " GENERATOR MASTER!";
  }
});
