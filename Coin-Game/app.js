function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");
const score = document.querySelector(".score");
let newScore = parseInt(score.innerText);

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" || e.key === "Down") {
    moveVertical(player, 50);
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveVertical(player, -50);
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveHorizontal(player, -50);
    player.style.transform = "scale(-1, 1)";
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    moveHorizontal(player, 50);
    player.style.transform = "scale(1, 1)";
  }
  if (isTouching(player, coin)) {
    this.document.body.style.backgroundColor = "blue";
    newScore += 10;
    score.innerText = newScore;
    score.classList.add("active");
    if (newScore >= 20 && newScore <= 40) {
      this.document.body.style.backgroundColor = "red";
    } else if (newScore > 40 && newScore < 60) {
      this.document.body.style.backgroundColor = "black";
      const h3 = this.document.querySelector("h3");
      h3.style.color = "white";
    } else if (newScore > 60 && newScore < 100) {
      this.document.body.backgroundColor = "blue";
    } else if (newScore >= 100 && newScore < 110) {
      this.document.body.style.backgroundColor = "purple";
      const playerSize = this.document.querySelector("#player");
      playerSize.classList.add("getBigger");
    }

    moveCoin();
  }
});

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};
const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

const moveCoin = () => {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${height}px`;
  coin.style.left = `${width}px`;
};

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

moveCoin();
