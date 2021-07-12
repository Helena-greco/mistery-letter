const generateLetter = document.getElementById('carta-gerada');
const buttonLetter = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');

function createLetter() {
  const letterText = inputText.value;
  const letterWords = letterText.split(' ');
  for (let index = 0; index < letterWords.length; index += 1) {
    const spanWord = document.createElement('span');
    spanWord.innerHTML = letterWords[index];
    generateLetter.appendChild(spanWord);
  }
}

buttonLetter.addEventListener('click', createLetter);
