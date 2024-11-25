let randomNumber = 0;
let Lives = 0;

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomInt = getRandomInteger(5, 10); // Generates a random integer between 5 and 10 (inclusive)
console.log(randomInt);


document.querySelector('#getrange-btn').addEventListener('click', () => {
    const start = document.querySelector('#start-value').value;
    const end = document.querySelector('#end-value').value;

    if (!isNaN(start) && !isNaN(end) && start.trim() !== '' && end.trim() !== '') {
        console.log(start, end);
        document.querySelector('.rangetext').innerHTML = `We have it now! Oh its raaaaaange`;
        document.querySelector('#play-text').innerHTML = `What do you think it is?`;

        let totalNumbers = end - start;
        let totalMoves = Math.ceil(totalNumbers / 3);

        document.querySelector('#total-life').innerHTML = `${totalMoves}`;
        Lives = totalMoves;

        let random = getRandomInteger(Number(start), Number(end));
        randomNumber = random;
        console.log(randomNumber, random);
    } else {
        alert("Please enter valid range bruh!");
    }
});



document.querySelector('#submit').addEventListener('click', () => {
    const userinput = document.querySelector('#user-input').value;

    if (!isNaN(userinput) && userinput.trim() !== '') {
        if (Number(userinput) === randomNumber) {
            alert('Winner !');
            reset();
        } else {
            Lives--;
            alert('Looser');
            document.querySelector('#total-life').innerHTML = `${Lives}`;
            if(Number(Lives) === 0){
                reset();
            }
        }
    } else {
        alert("Enter start and end point first!");
    }
});

function reset() {
    document.querySelector('#start-value').value = ``;
    document.querySelector('#end-value').value = ``;
    document.querySelector('#user-input').value = ``;
    document.querySelector('.rangetext').innerHTML = ``;
    document.querySelector('#play-text').innerHTML = ``;
    randomNumber = 0;
    Lives = 0;
}