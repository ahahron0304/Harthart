function init() {
  document.getElementById("click-me").addEventListener("click", showImagePage);
}

function showImagePage() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("image-page").style.display = "block";
  playAudio();
  document.getElementById("background").classList.add("show");
  positionHearts();
}

function playAudio() {
  const audioElement = document.getElementById("audio");
  audioElement.play();
}

function positionHearts() {
  const scaleFactor = 15;

  const heartShape = document.getElementById("heart-shape");
  let index = 0;

  function addHeart() {
    if (index >= 100) {
      return;
    }

    const i = (index / 100) * 2 * Math.PI;
    const heartEmoji = document.createElement("span");
    heartEmoji.classList.add("heart-emoji");
    heartEmoji.textContent = "❤️";

    const x = 16 * Math.pow(Math.sin(i), 3);
    const y = -(
      13 * Math.cos(i) -
      5 * Math.cos(2 * i) -
      2 * Math.cos(3 * i) -
      Math.cos(4 * i)
    );

    heartEmoji.style.top = `calc(35% - ${-y * scaleFactor}px)`;
    heartEmoji.style.left = `calc(50% + ${x * scaleFactor}px)`;

    heartShape.appendChild(heartEmoji);

    index++;
    setTimeout(addHeart, 770);
  }

  addHeart();
}
