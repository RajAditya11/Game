const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");

const WinningRule = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let playerX = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return; // Prevent multiple clicks on the same box

    if (playerX) {
      box.innerText = "X";
      playerX = false;
      box.style.backgroundColor = "black";
      box.style.color = "white";
    } else {
      box.innerText = "O";
      playerX = true;
      box.style.backgroundColor = "black";
      box.style.color = "white";
    }

    checkWinner();
  });
});

const checkWinner = () => {
  for (let rule of WinningRule) {
    let idx1 = boxes[rule[0]].innerText;
    let idx2 = boxes[rule[1]].innerText;
    let idx3 = boxes[rule[2]].innerText;

    if (idx1 !== "" && idx2 !== "" && idx3 !== "") {
      if (idx1 === idx2 && idx2 === idx3) {
        // Highlight the winning boxes
        rule.forEach((index) => {
          boxes[index].style.transition = "all 0.5s";
          boxes[index].style.backgroundColor = "green";
          boxes[index].style.color = "white";
        });

        console.log(`Winner: ${idx1}`);
        disableAllBoxes(); // Disable all boxes after a win


        setTimeout(() => {
          resetGame();
        } , 1500);  
        break;
      }
    }
  }
};


const disableAllBoxes = () => {
  boxes.forEach((box) => (box.style.pointerEvents = "none"));
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
    box.style.color = "";
    box.style.pointerEvents = "auto"; // Re-enable clicking
  });
  playerX = true;
};

reset.addEventListener("click", resetGame);
  