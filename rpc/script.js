let player;
let comp;



function rock()
{
    player = "rock";
}
function paper()
{
    player = "paper";

    console.log("player chose paper");
}
function scissor()
{
    player = "scissor";
}

function compChoice()
{
    let rpc = ["rock", "paper", "scissor"]
    let comps = Math.floor(Math.random() * 3);
    comp = rpc[comps]
}

function shoot() {
    let compWin = "Computer Wins"
    let playerWin = "Player Wins"
    let winner;


    compChoice();

    document.getElementById("winnerDisplayed").innerHTML = " ";

    if(player === comp)
    {
        console.log("Computer Wins");
        winner = "It's a tie!"
        document.getElementById("compDisplay").innerHTML = comp;
        document.getElementById("playerDisplay").innerHTML = player;
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "rock" && comp === "paper")
    {
        console.log("Computer Wins");
        winner = compWin;
        document.getElementById("compDisplay").innerHTML = comp;
        document.getElementById("playerDisplay").innerHTML = player;
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "rock" && comp === "scissor")
    {
        console.log("Player Wins");
        winner = playerWin;
        document.getElementById("compDisplay").innerHTML = comp;
        document.getElementById("playerDisplay").innerHTML = player;
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "paper" && comp === "scissor")
    {
        console.log("Computer Wins")
        winner = compWin;
        document.getElementById("compDisplay").innerHTML = comp;
        document.getElementById("playerDisplay").innerHTML = player;
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "paper" && comp === "rock")
    {
        console.log("Player Wins")
        winner = playerWin;
        document.getElementById("compDisplay").innerHTML = comp;
        document.getElementById("playerDisplay").innerHTML = player;
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "scissor" && comp === "rock")
    {
        console.log("Computer Wins")
        winner = compWin;

        document.getElementById("compDisplay").innerHTML = comp;
        document.getElementById("playerDisplay").innerHTML = player;
        document.getElementById("winnerDisplayed").innerHTML = winner;
    }
    else if(player === "scissor" && comp === "paper")
    {
        console.log("Player Wins")
        winner = playerWin;
        document.getElementById("compDisplay").innerHTML = comp;
        document.getElementById("playerDisplay").innerHTML = player;
        document.getElementById("winnerDisplayed").innerHTML += winner;

    }
}

