function playGame(playerInput){
clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }if(argMoveId == 2){
      return 'papier';
    }if(argMoveId == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

/* if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';}

printMessage('Mój ruch to: ' + computerMove);
*/

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  */
  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

/* if (playerInput == '1') {
  playerMove = 'kamień';
} else if(playerInput == '2') {
  playerMove = 'papier';
} else if(playerInput == '3') {
  playerMove = 'nożyce';}

printMessage('Twój ruch to: ' + playerMove);
*/


  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
      }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == argPlayerMove){
      printMessage('Mamy remis!');
    }
    else if( argPlayerMove != 'papier' && argPlayerMove != 'nożyce' && argPlayerMove != 'kamień'){
      printMessage('Błąd. Spróbuj jeszcze raz. Wpisz 1, 2 lub 3!');
    }
    else {
      printMessage('Tym razem przegrywasz :(');
    }
  }

  displayResult(computerMove, playerMove);

/*
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
} else if ( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty przegrywasz!');
} else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ty przegrywasz!');
} else if ( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
} else if ( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
} else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
} else if ( computerMove == 'papier' && playerMove == 'nieznany ruch'){
  printMessage('Spróbuj jeszcze raz. Wpisz 1, 2 lub 3!');
} else if ( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Spróbuj jeszcze raz. Wpisz 1, 2 lub 3!');
} else if ( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
  printMessage('Spróbuj jeszcze raz. Wpisz 1, 2 lub 3!');
}
*/

}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
