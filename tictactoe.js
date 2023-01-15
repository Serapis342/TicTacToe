window.onload = function() {
    window.player = 1;
    window.text = document.getElementById('show-text');
    window.noWinner = true;
    window.countXs = 0;
    window.countOs = 0;

    let one = document.getElementById('0');
    let two = document.getElementById('1');
    let three = document.getElementById('2');
    let four = document.getElementById('3');
    let five = document.getElementById('4');
    let six = document.getElementById('5');
    let seven = document.getElementById('6');
    let eight = document.getElementById('7');
    let nine = document.getElementById('8');
    
    window.table = [one, two, three, four, five, six, seven, eight, nine];
    window.gameField = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    table.forEach(element => {
        element.addEventListener('click', function () {
            if(noWinner == true) {
                if (element.innerHTML == '') {
                    element.innerHTML = whichPlayer();
                    gameField[element.id] = element.innerHTML;
                }
            }
        });
    });
}

function whichPlayer() {
    if (player == 1) {
        player = 2;
        countXs++;
        return 'X';
    } else {
        player = 1;
        countOs++;
        return 'O';
    }
}

function win(winner) 
{
    if (!noWinner) {
        location.reload();
    }

    noWinner = false;
    if(winner != 'Draw') 
    {
        text.innerHTML = `Player ${winner} has won!`;
    } else {
        text.innerHTML = `It's a draw!`;
    }
}

document.onclick = function() 
{
    let playerChar = player == 1 ? 'X' : 'O';
    text.innerHTML = `It's ${playerChar}'s turn!`;

    if(gameField[0] == gameField[1] && gameField[1] == gameField[2]) {
        win(table[0].innerHTML);
    } else if(gameField[3] == gameField[4] && gameField[4] == gameField[5]) {
        win(table[3].innerHTML);
    } else if(gameField[6] == gameField[7] && gameField[7] == gameField[8]) {
        win(table[6].innerHTML);
    } else if(gameField[0] == gameField[3] && gameField[3] == gameField[6]) {
        win(table[0].innerHTML);
    } else if(gameField[1] == gameField[4] && gameField[4] == gameField[7]) {
        win(table[1].innerHTML);
    }   else if(gameField[2] == gameField[5] && gameField[5] == gameField[8]) {
        win(table[2].innerHTML);
    } else if(gameField[0] == gameField[4] && gameField[4] == gameField[8]) {
        win(table[0].innerHTML);
    } else if(gameField[2] == gameField[4] && gameField[4] == gameField[6]) {
        win(table[2].innerHTML);
    } else if(countXs == 5 && countOs == 4) {
        win('Draw');
    } else {
        return;
    }
}
