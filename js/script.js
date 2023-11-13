// VARIABLES AND CONSTANTS USED
const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');
const cells = document.querySelectorAll(".cell")
let play = "x";
const waitingTime = 1000;

// PLACE
let valuePointerX = 0;
let valuePointerO = 0;

const pointerX = document.querySelector(".valueX")

const pointerO = document.querySelector(".valueO");

pointerX.textContent = valuePointerX;
pointerO.textContent = valuePointerO;

// THIS FUNCTION RESTART GAME
const restartGame = () => {
    if(valuePointerX == valuePointerO){
        alert("Fim do JOGO! EMPATE");
    }else if(valuePointerX > valuePointerO){
        alert("Fim do jogo! X VENCEU")
    }else if(valuePointerX < valuePointerO){
        alert("Fim do jogo! BOLA VENCEU")
    }
    location.reload()
}

// THIS FUNCTION CLEAN CELLS AFTER A VICTORY
const cleanCells = () =>{
    for(let index = 0; index <= cells.length; index++){
        // Desable click in cells
        cells[index].style.pointerEvents = "none";
        setTimeout(() => {
            cells[index].classList.remove("x");
            cells[index].classList.remove("circle");
            // Enable click in cells
            cells[index].style.pointerEvents = "auto";
        }, waitingTime)
        play = "x";
    }
}

// THIS FUNCTION UPDATE PLACE IN THE GAME
const updatePlace = (typeWinner) =>{
    if(typeWinner == "x"){
        valuePointerX += 1;
        pointerX.textContent = valuePointerX;
    }else{
        valuePointerO += 1
        pointerO.textContent = valuePointerO;
    }
}

// THIS FUNCTION CHECKS IF THERE IS A WIN
const winner = (winner) => {
    // HORIZONTAL WINS
    if(cell1.classList.contains("x") && cell2.classList.contains("x") && cell3.classList.contains("x") ||cell1.classList.contains("circle") && cell2.classList.contains("circle") && cell3.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

    else if(cell4.classList.contains("x") && cell5.classList.contains("x") && cell6.classList.contains("x") ||cell4.classList.contains("circle") && cell5.classList.contains("circle") && cell6.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

    else if(cell7.classList.contains("x") && cell8.classList.contains("x") && cell9.classList.contains("x") ||cell7.classList.contains("circle") && cell8.classList.contains("circle") && cell9.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

    // VERTICAL WINS
    else if(cell1.classList.contains("x") && cell4.classList.contains("x") && cell7.classList.contains("x") ||cell1.classList.contains("circle") && cell4.classList.contains("circle") && cell7.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

    else if(cell2.classList.contains("x") && cell5.classList.contains("x") && cell8.classList.contains("x") ||cell2.classList.contains("circle") && cell5.classList.contains("circle") && cell8.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

    else if(cell3.classList.contains("x") && cell6.classList.contains("x") && cell9.classList.contains("x") ||cell3.classList.contains("circle") && cell6.classList.contains("circle") && cell9.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

    // DIAGONAL WINS
    else if(cell1.classList.contains("x") && cell5.classList.contains("x") && cell9.classList.contains("x") ||cell1.classList.contains("circle") && cell5.classList.contains("circle") && cell9.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

    else if(cell3.classList.contains("x") && cell5.classList.contains("x") && cell7.classList.contains("x") ||cell3.classList.contains("circle") && cell5.classList.contains("circle") && cell7.classList.contains("circle")){
        updatePlace(winner);
        cleanCells();
    }

}

// THIS SCRIPT ADD A VALUE IN CELLS 
for(let index = 0; index <= cells.length; index++){
    cells[index].addEventListener("click", function(){
        
        if(this.classList.contains("x") || this.classList.contains("x")){
            return
        }else{
            if(play == "x"){
                this.classList.remove("circle");
                this.classList.add(play);
                winner("x");
                play = "circle";
                
            }else{
                this.classList.remove("x");
                this.classList.add(play);
                winner("circle");
                play = "x";
            }
            
        }
    })
}


