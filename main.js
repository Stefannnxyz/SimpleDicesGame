let score1 = 0;
let score2 = 0;

let rolls1 = 0;
let rolls2 = 0;

let result1 = 0;
let result2 = 0;

let pointsForWin = 3;

function roleDice1() {
    document.querySelector("h1").innerText = "Dices Game";
    document.querySelector("button").innerText = "Roll";
    document.querySelector("button").hidden = true;
    document.querySelector("button").style.fontSize = "30px";

    result1 = 0;

    dices = document.querySelectorAll("img");
    
    let rnd = Math.floor(Math.random() * 6) + 1;
    dices[0].setAttribute('src', 'dices/dice' + rnd + '.png');

    rolls1++;

    if (rolls1 < 20) {
        setTimeout(() => { 
            roleDice1(); 
        }, 500);
    }
    else {
        rolls1 = 0;
        result1 = rnd;
        CompareResults();
    }
}

function roleDice2() {
    result2 = 0;

    dices = document.querySelectorAll("img");

    rnd = Math.floor(Math.random() * 6) + 1;
    dices[1].setAttribute('src', 'dices/dice' + rnd + '.png');

    rolls2++;

    if (rolls2 < 20) {
        setTimeout(() => { 
            roleDice2(); 
        }, 500);
    }
    else {
        rolls2 = 0;
        result2 = rnd;
        CompareResults();
    }
}

function CompareResults() {
    if (result1 !== 0 && result2 !== 0) {
        let title = document.querySelector("h1");

        document.querySelector("button").hidden = false;

        if (result1 > result2) {
            score1++;

            if (score1 >= pointsForWin && score2 <= pointsForWin) {
                title.innerText = "The player wins the match!\n Final Score: " + score1 + " - " + score2;
                
                score1 = 0;
                score2 = 0;

                document.querySelector("button").innerText = "Restart";
                document.querySelector("button").style.fontSize = "20px";
            }
            else {
                title.innerText = "The player wins! Score: " + score1 + " - " + score2;  
            }
        }
        else if (result1 < result2) {
            score2++;

            if (score1 <= pointsForWin && score2 >= pointsForWin) {
                title.innerText = "The computer wins the match!\n Final Score: " + score1 + " - " + score2;  

                score1 = 0;
                score2 = 0;

                document.querySelector("button").innerText = "Restart";
                document.querySelector("button").style.fontSize = "20px";
            }
            else {
                title.innerText = "The computer wins! Score: " + score1 + " - " + score2;  
            }
        }
        else {
            score1++;
            score2++;

            if (score1 >= pointsForWin && score2 >= pointsForWin) {
                title.innerText = "The match ends with a draw!\n Final Score: " + score1 + " - " + score2;  

                score1 = 0;
                score2 = 0;

                document.querySelector("button").innerText = "Restart";
                document.querySelector("button").style.fontSize = "20px";
            }
            else {
                title.innerText = "It is a draw! Score: " + score1 + " - " + score2; 
            } 
        }
    }
}