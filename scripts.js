let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
//hint: you could use innerText for this 

document.getElementById("next-lbl").innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard() {
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
    // loop through all cells in gameboard
    for (let i = 1; i < 10; i++) {

        // create button
        let button = document.createElement("button");
        button.innerText = "[ ]";
        button.type = "button";

        // add button to cell
        document.getElementById("c" + i).appendChild(button);

    }


    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++) {
        /*
            Assign an event listener to each of the buttons in btns.
            The event to listen for should be 'click'. You will need to pass 
            the event to takeCell. Review the slides for the trick on how to ]
            pass a parameter.
        */

        btns[i].addEventListener("click", takeCell);  // every button you find add the even listener and call takeCell


    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // get the button that was clicked
    let button = event.currentTarget;

    // change the text to either X or O
    button.innerText = "[" + nextPlayer + "]";

    button.disabled = true;  // disable the button

    // update nextPlayer
    if (nextPlayer == "X") {  // if current is X
        nextPlayer = "O";  // new should be O
    }
    else {  // nextplayer is O
        nextPlayer = "X";
    }

    // update the label for nextplayer
    document.getElementById("next-lbl").innerText = nextPlayer;  // change the inner text to the new updated nextPlayer


    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
        document.getElementById('game-over-lbl').innerHTML = "<h1>Game Over</h1>";  // find the game over label and change the text to Game Over
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 

    let buttons = document.querySelectorAll('#gameboard button');

    for (let button of buttons) {  // loop through all buttons
        if (button.disabled == false) {  // if even one button is false, return false.
            return false;
        }
    }

    // all buttons were disabled so return true
    return true;


}
