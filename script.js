const pointer = document.getElementById("pointer");
const result = document.getElementById("result");

let angle = 0;
let active = false;
let interval;

function startGame() {

  clearInterval(interval);

  angle = 0;
  active = true;

  result.innerText = "GO!";

  interval = setInterval(() => {

    angle += 5;

    pointer.style.transform =
      `rotate(${angle}deg)`;

    if (angle >= 360) {

      clearInterval(interval);

      active = false;

      result.innerText = "MISS!";
    }

  }, 16);
}

document.addEventListener("keydown", (e) => {

  if (e.code === "Space" && active) {

    clearInterval(interval);

    active = false;

    const hit = angle % 360;

    if (hit >= 350 || hit <= 10) {

      result.innerText =
        "GREAT SKILL CHECK!";

    } else if (hit >= 340 || hit <= 20) {

      result.innerText =
        "GOOD SKILL CHECK!";

    } else {

      result.innerText =
        "MISS!";
    }
  }
});
