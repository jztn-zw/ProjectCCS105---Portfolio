const roles = [
    "Computer Science Student",
    "Full-Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");
let isDeleting = false;

function typeEffect() {
    const current = roles[roleIndex];
    const currentText = current.substring(0, charIndex);

    typingElement.textContent = currentText;

    if (!isDeleting && charIndex < current.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (!isDeleting && charIndex === current.length) {
        // pause for 5 seconds before deleting
        isDeleting = true;
        setTimeout(typeEffect, 5000); // 5 seconds delay
    }
    else if (isDeleting && charIndex > 0) {
        // deleting
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else if (isDeleting && charIndex === 0) {
        // move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500); // small pause before typing next
    }
}

typeEffect();
