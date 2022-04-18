function createRandomMove(){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) return 'rock';
    else if(randomNumber === 2) return 'scissors';
    else if(randomNumber === 3) return 'paper';
}

function displayMoves(playersMove, computersMove) {
    const playersMoveDiv = document.querySelector("#players-move");
    const computersMoveDiv = document.querySelector("#computers-move");
    playersMoveDiv.innerHTML = `<div id="players-move" class="container_versus_${playersMove}"></div>`;
    computersMoveDiv.innerHTML = `<div id="computers-move" class="container_versus_${computersMove}"></div>`;
}

function displayResult(playersMove, computersMove) {
    const resultDiv = document.querySelector("#container_result");

    if(playersMove === computersMove) {
        resultDiv.style.color = "inherit"
        resultDiv.innerHTML = 'Remis';
    }

    else if ( 
        (playersMove === "paper" && computersMove === "scissors") || 
        (playersMove === "rock" && computersMove === "paper") ||
        (playersMove === "scissors" && computersMove === "rock")
    ) {
                resultDiv.style.color = "red"
                resultDiv.innerHTML = 'Przegrana';
    }

    else {
        resultDiv.style.color = "green"
        resultDiv.innerHTML = 'Wygrana!';
    }
}


function toggleSections() {
    const pageMovesDOM = document.querySelector(".page_moves");
    const pageResultsDOM = document.querySelector(".page_results");

    pageMovesDOM.classList.toggle("none");
    pageResultsDOM.classList.toggle("none");
}