const againBtn = document.querySelector(".no_way");
const heartsContainer = document.querySelector(".falling-brokenhearts");

againBtn.addEventListener("click", () => {
  window.location.href = "../index.html"; // go back to home
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  heart.style.width = heart.style.height = 20 + Math.random() * 20 + "px";
  heartsContainer.appendChild(heart);


  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
