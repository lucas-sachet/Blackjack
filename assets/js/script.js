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