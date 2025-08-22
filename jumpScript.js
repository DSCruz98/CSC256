// Jump Game stuff
const dude = document.getElementById("dude");
const cactus = document.getElementById("obstacle");
const score = document.getElementById("score");
const jumpStart = document.getElementById("jumpStart");

// adding player animations at specific times
function jump() {
  dude.classList.add("jump-animation");
  setTimeout(() => dude.classList.remove("jump-animation"), 500);
}

jumpStart.addEventListener("click", (event) => {
  if (!dude.classList.contains("jump-animation")) {
    jump();
  }
});

// starting obstacle animation
function obstacle() {
  cactus.classList.add("obstacle-animation");
}

jumpStart.addEventListener("click", () => {
  if (!cactus.classList.contains("obstacle-animation")) {
    obstacle();
  }
});

// score increases whenever you jump
jumpStart.addEventListener("click", () => {
  score.innerText++;
});

setInterval(() => {
  const dudeTop = parseInt(
    window.getComputedStyle(dude).getPropertyValue("top")
  );
  const cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // hides cactus when off game screen
  if (cactusLeft < 0) {
    cactus.style.display = "none";
  } else {
    cactus.style.display = "";
  }

  // game over when you touch a cactus
  if (cactusLeft < 50 && cactusLeft > 0 && dudeTop > 150) {
    alert("You got a score of: " + score.innerText + "\n\nPlay again?");
    location.reload();
  }
}, 50);
