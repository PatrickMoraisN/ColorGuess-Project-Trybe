const rgbColorId = '#rgb-color';
const backgroundPink = 'linear-gradient(rgb(231, 135, 151), rgb(167, 92, 105))'
const backgroundBlue = 'linear-gradient(rgb(67, 78, 223), rgb(22, 30, 141))'
const backgroundBlack = 'linear-gradient(rgb(48, 48, 48), rgb(24, 24, 24))'
const container = document.querySelector('.container')

function generateTextRGB() {
  const random = `(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},`
  + ` ${Math.floor(Math.random() * 255)})`;
  const rgbText = document.querySelector('#rgb-color');
  rgbText.innerText = random;
}

function generateColors() {
  const ballsList = document.querySelectorAll('.ball');
  const indexRandom = Math.floor(Math.random() * 5);
  for (let i = 0; i < ballsList.length; i += 1) {
    if (ballsList[i] !== ballsList[indexRandom]) {
      ballsList[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255},`
        + `${Math.random() * 255})`;
    } else {
      ballsList[indexRandom].style.backgroundColor = `rgb${document.querySelector(rgbColorId)
        .innerText}`;
    }
  }
}

function score() {
  const scoreTextElement = document.getElementById('score');
  let scoreText = parseInt(scoreTextElement.innerText, 10);
  scoreText += 3;
  scoreTextElement.innerText = scoreText;
}

function challenger() {
  const ballsContainer = document.querySelector('.balls');
  const answer = document.getElementById('answer');

  ballsContainer.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === `rgb${document.querySelector(rgbColorId)
      .innerText}`) {
      answer.innerText = 'Acertou!';
      score();
      generateTextRGB();
      generateColors();
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}

function pickAColor() {
  const answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
}

function initGame() {
  const buttonInit = document.querySelector('#reset-game');

  buttonInit.addEventListener('click', () => {
    generateTextRGB();
    generateColors();
    pickAColor();
  });
}

const changePink = () => {
  const pinkBtn = document.getElementById('pink');
  pinkBtn.addEventListener('click', () => {
    document.querySelector('body').style.color = 'black'
    container.style.background = backgroundPink
  })
}

const changeBlue = () => {
  const blueBtn = document.getElementById('blue');
  blueBtn.addEventListener('click', () => {
    document.querySelector('body').style.color = 'black'
    container.style.background = backgroundBlue
  })
}

const changeBlack = () => {
  const blackBtn = document.getElementById('black');
  blackBtn.addEventListener('click', () => {
    document.querySelector('body').style.color = 'white'
    container.style.background = backgroundBlack
  })
}

window.onload = () => {
  initGame();
  generateTextRGB();
  generateColors();
  challenger();
  changePink();
  changeBlue();
  changeBlack();
};
