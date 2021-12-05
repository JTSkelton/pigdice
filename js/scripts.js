//Business Logic
function Player(playerNum) {
  this.playerNumber = playerNum;
  this.score = 0;
}

function Rolldice(){
  let diceRoll = Math.floor((Math.random() * 6) + 1);
  return diceRoll;
}
//Could call playerWon from here and factor that in to return
function turnOver(diceRoll, player) {
  let whosTurn = "";
  playerId = player.playerNumber;
  if (diceRoll === 1 && playerId === 1) {
    let whosTurn = "Player 2's turn";
    disableTurn(whosTurn);
    return whosTurn;
    }
  else if (diceRoll === 1 && playerId === 2) {
    let whosTurn = "Player 1's turn";
    disableTurn(whosTurn);
    return whosTurn;
    }
  else if (diceRoll !== 1 && playerId === 1) {
    let whosTurn = "Still player " + playerId + "'s turn";
    return whosTurn;
  }
  else if (diceRoll !== 1 && playerId === 2) {
    let whosTurn = "Still player " + playerId + "'s turn";
    return whosTurn;
  }
  return 0;
}

function calculateScore(diceRoll, player) {
    if (diceRoll === 1){
    }
    else if (diceRoll !== 1){ 
      player.score +=diceRoll; 
    }
    return player.score;
  }
  
function playerWon(score, player) {
  let playerScore = score;
  let whoWon = "";
  if (playerScore >= 100) {
    whoWon = "Player " + player.playerNumber + " won! Game over";
    return whoWon;
  }
  //else if (playerScore <100) {
 // }
}

//User Interface
let player1;
let player2;

function disableTurn(turnOver) {
  if (turnOver === "Player 2's turn") {
    $("#player2").toggle();
    $("#player1").toggle();
    }
  else if (turnOver === "Player 1's turn") {
    $("#player2").toggle();
    $("#player1").toggle();
    }
  else if (turnOver === "Player 1 holds. Player 2's turn") {
    $("#player2").toggle();
    $("#player1").toggle();
  }
  else if (turnOver === "Player 2 holds. Player 1's turn") {
    $("#player2").toggle();
    $("#player1").toggle();
  }
  return 0;
}

$(document).ready(function() {
  $("#startGame").click(function(event){
  event.preventDefault();
  $("#game").show();
  player1 = new Player(1);
  player2 = new Player(2);
  });
});

$(document).ready(function() {
  $(".btn-roll1").click(function(event){
  event.preventDefault();
  dice = Rolldice();
  var turnOver1 = turnOver(dice, player1); 
  score = calculateScore(dice, player1);
  winner = playerWon(score, player1);
  $(".playerTurn").text(turnOver1);
  $(".winner").text(winner);
  $(".player1-score").text(score);
  $(".player1-roll").text(dice);
  });
});

$(document).ready(function() {
  $(".btn-roll2").click(function(event){
  event.preventDefault();
  dice = Rolldice();
  var turnOver2 = turnOver(dice, player2);
  score = calculateScore(dice, player2);
  winner = playerWon(score, player2);
 $(".playerTurn").text(turnOver2);
 $(".winner").text(winner);
 $(".player2-score").text(score);
 $(".player2-roll").text(dice);
  });
});

$(document).ready(function() {
  $(".btn-hold1").click(function(event){
  event.preventDefault();
  var player1Hold = "Player 1 holds. Player 2's turn";
  $(".playerTurn").text(player1Hold);
  disableTurn(player1Hold);
  });
});

$(document).ready(function() {
  $(".btn-hold2").click(function(event){
  event.preventDefault();
  var player2Hold = "Player 2 holds. Player 1's turn";
  $(".playerTurn").text(player2Hold);
  disableTurn(player2Hold);
  });
});