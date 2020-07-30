// Challenge 1: Your Age in Days
function ageInDays() {
  var birthYear = prompt("What year were you born... Good friend?");
  var ageInDays = (2020 - birthYear) * 365;
  var h1 = document.createElement('H1');
  var textAnswer = document.createTextNode('You are ' + ageInDays.toString() + ' days old.');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator
function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
  div.appendChild(image);
}


//Challenge 3: Rock paper scissors


function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  results = decideWinner(humanChoice, botChoice);
  message = finalMessage(results);
  rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
  }

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { 'message': 'You lost!', 'color': 'red' };
  } else if (yourScore === 0.5) {
    return { 'message': 'You tied!', 'color': 'yellow' };
  } else {
    return { 'message': 'You won!', 'color': 'green' };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'/>"
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'/>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

function reset3() {
  document.getElementById('flex-box-rps-div').remove();
  var originalHtml = document.createElement('div');

  originalHtml.id = "flex-box-rps-div";
  originalHtml.className = "flex-box-rps";


  var imgRock = document.createElement('img');
  var imgPaper = document.createElement('img');
  var imgScissors = document.createElement('img');

  imgRock.id = "rock";
  imgRock.src = "http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png";
  imgRock.height = "150";
  imgRock.width = "150";
  imgRock.onclick = function () { rpsGame(this) };
  imgPaper.id = "paper";
  imgPaper.src = "http://images.clipartpanda.com/paper-clip-art-niEBBqMiA.svg";
  imgPaper.height = "150";
  imgPaper.width = "150";
  imgPaper.onclick = function () { rpsGame(this) };
  imgScissors.id = "scissors";
  imgScissors.src = "https://www.uokpl.rs/fpng/f/111-1119881_open-scissors-png.png";
  imgScissors.height = "150";
  imgScissors.width = "150";
  imgScissors.onclick = function () { rpsGame(this) };

  originalHtml.appendChild(imgRock);
  originalHtml.appendChild(imgPaper);
  originalHtml.appendChild(imgScissors);

  var newDiv = document.getElementById('challenge3');
  var resetbtn = document.getElementById('reset3');
  var btnDiv = document.getElementById('btn-reset');
  btnDiv.appendChild(resetbtn)
  newDiv.appendChild(originalHtml)
  newDiv.appendChild(btnDiv)
}


//Challenge 4: Change the Color of All Buttons
var allButtons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1])
}



function buttonColorChange(onChangeButton) {
  if (onChangeButton.value === 'red') {
    buttonsRed();
  } else if (onChangeButton.value === 'green') {
    buttonsGreen();
  } else if (onChangeButton.value === 'reset') {
    buttonColorReset();
  } else if (onChangeButton.value === 'random') {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-danger');
  }
}
function buttonsGreen() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add('btn-success');
  }
}

function buttonColorReset() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i])
  }
}

function randomColors() {
  let choices = ['btn-danger', 'btn-warning', 'btn-success', 'btn-primary'];

  for (let i = 0; i < allButtons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
}

// Challenge 5: Blackjack
let blackjackGame = {
  'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
  'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] },
  'wins':0,
  'losses':0,
  'draw':0,
  'isStand': false,
  'turnsOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('assets/sounds/swish.m4a');
const winSound = new Audio('assets/sounds/cash.mp3');
const lossSound = new Audio('assets/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
  if(blackjackGame['isStand'] ===false){
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}
  
  

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
  if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `assets/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

function blackjackDeal() {
  if(blackjackGame['turnsOver'] === true) {

    blackjackGame['isStand'] = false;
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();

    }
    for (j = 0; j < dealerImages.length; j++) {
      dealerImages[j].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').style.color = 'white';
    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'black';

    blackjackGame['turnsOver'] === true;
  }
}

function updateScore(card, activePlayer) {
  if (card === 'A') {
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;

  while(DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    
    await sleep(1000) 
  }

  blackjackGame['turnsOver'] = true;
  showResult(computeWinner()); 
}

function computeWinner() {
  let winner;

  if (YOU['score'] <= 21) {
    //contidion: higher score than dealer or when dealer busts but you're not over 21
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
      blackjackGame['wins']++;
      winner = YOU;
    } else if (YOU['score'] < DEALER['score']) {
      blackjackGame['losses']++;
      winner = DEALER;
    } else if (YOU['score'] === DEALER['score']) {
      blackjackGame['draw']++;
    }

    //contidion: when user busts but dealer doesn't  
  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    blackjackGame['losses']++;
    winner = DEALER;

    // condition: when you AND the dealer busts  
  } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
    blackjackGame['draw']++;
  }

  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if(blackjackGame['turnsOver'] === true) {

    if (winner === YOU) {
      document.querySelector('#wins').textContent = blackjackGame['wins'];
      message = 'You won!';
      messageColor = 'green';
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message = 'You lost!';
      messageColor = 'red';
      lossSound.play();
    } else {
      document.querySelector('#draws').textContent = blackjackGame['draw'];
      message = 'You drew!';
      messageColor = 'black';
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
  }
}

