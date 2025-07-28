const gameStart = function () {
  const stats = {
    wins: 0,
    ties: 0,
    losses: 0,
    count: {
      rock: 0,
      paper: 0,
      scissors: 0,
    },
  };

  const options = ['R', 'P', 'S'];

  let continuePlaying = true;

  while (continuePlaying) {
    let playerChoice = window.prompt('Choose R, P or S...');

    if (!playerChoice) {
      return;
    }
    playerChoice = playerChoice.toLocaleUpperCase();

    if (!options.includes(playerChoice)) {
      window.alert('Enter a valid choice..')
    } else {
      if (playerChoice === 'R') {
        stats.count.rock++;
      } else if (playerChoice === 'P') {
        stats.count.paper++;
      } else {
        stats.count.scissors++;
      }

      const cpuMath = Math.floor(Math.random() * options.length);
      const cpuChoice = options[cpuMath];

      window.alert(`CPU choses ${cpuChoice}`);

      if (playerChoice === cpuChoice) {
        stats.ties++;
        window.alert("It's a tie!")
      } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
      ) {
        stats.wins++;
        window.alert('Player wins!');
      } else {
        stats.losses++;
        window.alert('CPU wins!');
      }
      continuePlaying = window.confirm('Would you like to play again?');
    }
  }

  window.alert(`Final Stats:
  Wins: ${stats.wins}
  Losses: ${stats.losses}
  Ties: ${stats.ties}
  
  Player Choices:
  Rock: ${stats.rock}
  Paper: ${stats.paper}
  Scissors: ${stats.scissors}`);

};

gameStart();