const text = document.querySelector('.h-message');
const letters = text.textContent.split('');
text.textContent = '';
letters.forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.setProperty('--i', i);
  text.appendChild(span);
});