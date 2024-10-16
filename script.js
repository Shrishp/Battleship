let clickNo = 0;
let box1Click = 0; // Tracks the number of ships found

function game(box) {
  if (box.classList.contains('usedBox')) {
    return; // Prevent clicking the same box twice
  }

  if (clickNo >= 9) {
    alert("YOU LOST");
    resetGame();
    return;
  }

  let randomNumber = Math.floor(Math.random() * 2); // Randomly determine if a ship or water is revealed
  clickNo++;

  if (randomNumber === 1) {
    // Use the correct path to the ship image
    box.style.backgroundImage = 'url("ship.png")'; // Set this path correctly
    box1Click++;
  } else {
    // Use the correct path to the water image
    box.style.backgroundImage = 'url("wave.png")'; // Set this path correctly
  }

  box.classList.add('usedBox'); // Mark box as clicked

  if (box1Click === 5) {
    alert("You win the game!");
    resetGame();
  }
}

// Attach click event listeners to all boxes
let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  box.addEventListener('click', function() {
    game(box);
  });
});

// Reset game function
function resetGame() {
  clickNo = 0;
  box1Click = 0;
  boxes.forEach(box => {
    box.classList.remove('usedBox');
    box.style.backgroundImage = ''; // Clear box image
  });
}

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGame);
