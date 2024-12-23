const boxes =document.querySelectorAll(".box")
const reset = document.querySelector('#reset');

const WinningRule = [
    [ 1 , 2 , 3 ],
    [ 4 , 5 , 6 ],
    [ 7 , 8 , 9 ],
    [ 1 , 4 , 7 ],
    [ 2 , 5 , 8 ],
    [ 3 , 6 , 9 ],
    [ 1 , 5 , 9 ],
    [ 3 , 5 , 7 ]
];

let playerX = true;

boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        if(playerX){
            box.innerText = "X";
            playerX = false;
            box.style.backgroundColor = "black";
            box.style.color = "white";
        }else{
            box.innerText = "O";
            playerX = true;
            box.style.backgroundColor = "black";
            box.style.color = "white";
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () =>{
    for(let rule of WinningRule ){
        let idx1 = boxes[rule[0]].innerText;
        let idx2 = boxes[rule[1]].innerTexr;
        let idx3 = boxes[rule[2]].innerText;

        if( idx1 != "" && idx2 != "" && idx3 != ""){
            if( idx1 == idx2 && idx2 == idx3 ){
                console.log("Winner ,");
            }
        }
    }
}


const resetGame = () => {
    
}
