let randomNumber = 0;
let Lives = 0;
let start = null;
let end = null;

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('#getrange-btn').addEventListener('click', () => {
    const startValue = document.querySelector('#start-value').value;
    const endValue = document.querySelector('#end-value').value;

    start = startValue;
    end = endValue;

    if (!isNaN(startValue) && !isNaN(endValue) && startValue.trim() !== '' && endValue.trim() !== '') {
        console.log(startValue, endValue);
        document.querySelector('.rangetext').innerHTML = `We have it now! Oh its raaaaaange`;
        document.querySelector('#play-text').innerHTML = `Tell the random number?`;

        let totalNumbers = endValue - startValue;
        let totalMoves = Math.ceil(totalNumbers / 3);

        document.querySelector('#total-life').innerHTML = `${totalMoves}`;
        Lives = totalMoves;

        let random = getRandomInteger(Number(startValue), Number(endValue));
        randomNumber = random;
    } else {
        reset();
        alert("Please enter valid range bruh!");
    }
});



document.querySelector('#submit').addEventListener('click', () => {
    const userinput = document.querySelector('#user-input').value;
    if( isNaN(start) || isNaN(end)){
        alert("Range your game.");
    }else if( isNaN(userinput) || userinput.trim() == ''){
        alert("Choose your randome number.");
    }
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