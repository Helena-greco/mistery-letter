const generateLetter = document.getElementById('carta-gerada');
const buttonLetter = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');

function createLetter() {
  generateLetter.innerText = '';
  const letterText = inputText.value;
  const letterWords = letterText.split(' ');
  if (letterWords[0] === '') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta';
  } else {
    for (let index = 0; index < letterWords.length; index += 1) {
      const spanWord = document.createElement('span');
      const space = ' ';
      spanWord.innerText = letterWords[index] + space;
      generateLetter.appendChild(spanWord);
      spanWord.classList.add(style[Math.floor(Math.random * 3)]);
      spanWord.classList.add(size[Math.floor(Math.random * 3)]);
      spanWord.classList.add(rotate[Math.floor(Math.random * 2)]);
      spanWord.classList.add(skew[Math.floor(Math.random * 2)]);
    }
  }
}

buttonLetter.addEventListener('click', createLetter);
