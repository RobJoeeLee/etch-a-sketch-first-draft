let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let buttonPopup = document.querySelector("#pop-up");
    buttonPopup.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberOfDivs = size * size;

    for(let i = 0; i < numberOfDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("What will be the size of the board?")
    let message = document.querySelector("#message");
    if(input === ""){
        message.innerHTML = "Please provide a number";
    } else if( !/^\d+$/.test(input)){
        message.innerHTML = "Please provide a number";
    }
    else {
        let gridSize =Number(input);
        if (gridSize < 1 || gridSize > 100){
            message.innerHTML = "Provide a number between 1 and 100";
        } else {
            message.innerHTML = "Now you can play!";
        }
        return input;
    }
}

function colorDiv(){
    if(color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else{
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}