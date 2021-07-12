const generateLetter = document.getElementById('carta-gerada');
const buttonLetter = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');

function createLetter() {
  generateLetter.innerText = '';
  const letterText = inputText.value;
  const letterWords = letterText.split(' ');
  if (letterWords[0] === ' ' || letterWords.value === '') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta';
  } else {
    for (let index = 0; index < letterWords.length; index += 1) {
      const spanWord = document.createElement('span');
      const space = ' ';
      spanWord.innerText = letterWords[index] + space;
      generateLetter.appendChild(spanWord);
  }
}

buttonLetter.addEventListener('click', createLetter);