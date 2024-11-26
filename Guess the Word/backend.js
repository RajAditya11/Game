const WordMap = {
    1: "begin",
    2: "apple",
    3: "lavender",
    4: "emerald",
    5: "sky",
    6: "indigo",
    7: "beginning",
    8: "cherry",
    9: "plum",
    10: "mint",
    11: "ocean",
    12: "magenta",
    13: "aspiration",
    14: "destination",
    15: "metropolis",
    16: "territory",
    17: "progress",
    18: "kin",
    19: "initiate",
    20: "berry",
    21: "violet",
    22: "forest",
    23: "aqua",
    24: "rosewood",
    25: "innovator",
    26: "developer",
    27: "curiosity",
    28: "challenge",
    29: "frontend",
    30: "apex"
};


function computerChoiceIs( mapValue){
    const keyArray = Object.keys(mapValue);
    const randomKey = keyArray[Math.floor(Math.random()* keyArray.length)];
    return parseInt(randomKey);
};

function chooseOne(id) {
    let computerChoice = computerChoiceIs(WordMap);
    let wordbe = WordMap[computerChoice];
    console.log(wordbe);

    if( id === computerChoice){
        console.log("inside");
        document.querySelector('#computer-choose').innerHTML = `The random choice is ${wordbe}.`;
        document.querySelector('#output-text').innerHTML = `Winner`;
    } else {
        document.querySelector('#computer-choose').innerHTML = `The random choice is ${wordbe}.`;
        document.querySelector('#output-text').innerHTML = `Try Again!`;
    }
};