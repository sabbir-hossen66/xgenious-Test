const typewriterTexts = [
  "Popular Products !",

];

let textIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeCharacter() {

  const currentText = typewriterTexts[textIndex];

  // here set the next character to the typewriter element
  typewriterElement.textContent = currentText.substring(0, charIndex + 1);


  charIndex++;

  if (charIndex < currentText.length) {

    setTimeout(typeCharacter, 200);
  } else {

    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % typewriterTexts.length;
      typeCharacter();
    }, 4000);
  }
}


typeCharacter();

