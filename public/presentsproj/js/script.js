const heartsContainer = document.querySelector('.falling-hearts');
const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');

function createHeart() {
const heart = document.createElement('div');
heart.classList.add('heart');
heart.style.left = Math.random() * 100 + 'vw';
heart.style.animationDuration = 6 + Math.random() * 4 + 's';
heart.style.width = heart.style.height = 20 + Math.random() * 20 + 'px';
heartsContainer.appendChild(heart);

  // remove heart after animation ends
setTimeout(() => {
    heart.remove();
  }, 6000);
}
// create hearts infinitely
setInterval(createHeart, 500);

noButton.addEventListener('click', () => {
  window.location.href = 'html/no.html'; 
});

yesButton.addEventListener('click', () => {
  window.location.href = 'html/yes.html'; 
});
