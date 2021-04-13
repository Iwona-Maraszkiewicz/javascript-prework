{
  const playGame = function(playerInput){
    clearMessages();

    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      }
      if(argMoveId == 2){
        return 'papier';
      }
      if(argMoveId == 3){
        return 'nożyce';
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);

    const playerMove = getMoveName(playerInput);

    const displayResult = function(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove+'.');

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
      else {
        printMessage('Tym razem przegrywasz :(');
      }
    }
    displayResult(computerMove, playerMove);
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
}
