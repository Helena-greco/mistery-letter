const generateLetter = document.getElementById('carta-gerada');
const buttonLetter = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');

function createLetter() {
  generateLetter.innerText = '';
  const letterText = inputText.value;
  const letterWords = letterText.split(' ');
  if (letterWords[0] === '') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    generateLetter.style.fontWeight = '900';
  } else {
    for (let index = 0; index < letterWords.length; index += 1) {
      const spanWord = document.createElement('span');
      spanWord.innerText = letterWords[index];
      generateLetter.appendChild(spanWord);
    }
  }
}

buttonLetter.addEventListener('click', createLetter);

function generateClass() {
  const span = document.querySelectorAll('span');
  const estilo = ['newspaper', 'magazine1', 'magazine2'];
  const tamanho = ['medium', 'big', 'reallybig'];
  const rotacao = ['rotateleft', 'rotateright'];
  const inclinacao = ['skewleft', 'skewright'];
  for (let index = 0; index < span.length; index += 1) {
    span[index].classList.add(estilo[Math.floor(Math.random() * 3)]);
    span[index].classList.add(tamanho[Math.floor(Math.random() * 3)]);
    span[index].classList.add(rotacao[Math.floor(Math.random() * 2)]);
    span[index].classList.add(inclinacao[Math.floor(Math.random() * 2)]);
  }
  console.log(estilo[Math.floor(Math.random() * 3)]);
}

generateClass();

buttonLetter.addEventListener('click', generateClass);
