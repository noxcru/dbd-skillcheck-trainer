const pointer = document.getElementById("pointer");
const goodZone = document.getElementById("goodZone");
const greatZone = document.getElementById("greatZone");
const popup = document.getElementById("popup");
const streakText = document.getElementById("streak");
const bestText = document.getElementById("best");
const modeText = document.getElementById("modeText");
const startBtn = document.getElementById("startBtn");

let angle = 0;
let interval;
let active = false;

let streak = 0;
let best = 0;

let zoneAngle = 0;

let speed = 6;
let goodRange = 16;
let greatRange = 6;

function setMode(mode) {

  if (mode === "easy") {
    speed = 4;
    goodRange = 24;
    greatRange = 10;
    modeText.innerText = "Easy";
  }

  if (mode === "normal") {
    speed = 6;
    goodRange = 16;
    greatRange = 6;
    modeText.innerText = "Normal";
});
