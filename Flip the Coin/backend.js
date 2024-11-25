//JavaScript Hand Written Code
let playername = prompt('What is Player Name ?');
if (playername === null || playername === "") {
    playername = 'New-Player'
}
console.log(playername)

document.querySelector('.player-name').textContent = `${playername}`;
// document.getElementsByClassName('player-name')[0].textContent = `${playername}`; { Not Appropriate in Modern JavaScript}

const playergrade = undefined;

// Arrow Function  { const functionName = ()=>{}; }
const tossCoin = (code) => {
    let output = undefined;
    const val = Math.random();
    val >= 0.45 ? output = 'Head' : output = 'Tail';

    if (code === `playTime`) {
        return `${output}`;
    } else if (code === `decideTime`) {
        document.querySelector('.output-text').textContent = `${output}`;
    }
    console.log(output);
};

const assignValue = (winCount, lossCount) => {
    document.querySelector('#winningTotal').textContent = `Win : ${winCount}`;
    document.querySelector('#loosingTotal').textContent = `Loss : ${lossCount}`;
};
let winCount = 0;
let lossCount = 0;

const gradeSystem = (winCount, lossCount) => {
    if (winCount > lossCount) {
        document.querySelector('.player-rating').textContent = `Winner`;
    } else {
        document.querySelector('.player-rating').textContent = `Looser`;
    }
};


const playGame = (playerChoice) => {
    let gameChoice = tossCoin(`playTime`);

    console.log(gameChoice);

    if (playerChoice === gameChoice) {
        document.querySelector('#win-loose-text').textContent = `You Win!`
        winCount++;
        gradeSystem(winCount, lossCount);
    } else {
        document.querySelector('#win-loose-text').textContent = `You Loose!`
        lossCount++;
        gradeSystem(winCount, lossCount);
    }

    assignValue(winCount, lossCount);
};



