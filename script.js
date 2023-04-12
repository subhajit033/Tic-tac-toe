
let turn = new Audio('resources/ting.mp3')
let gameOver = new Audio('resources/gameover.mp3');
let gameTurn = 'X';
let imgBox = document.querySelector('.imgBox');

let isgameover = false;
// function to change the turn
const changeTurn = () => {
    return (gameTurn === 'X' ? 'O' : 'X');

}


//function to check win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach((e) => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== '') && (boxText[e[1]].innerText !== '' && (boxText[e[2]].innerText !== ''))) {
            document.querySelector('.info').innerHTML = `Player ${boxText[e[0]].innerText} win`;
            imgBox.firstElementChild.style.width = '10rem'
            isgameover = true;
            gameOver.play();
        }
        else if ((boxText[0].innerText !== '') && (boxText[1].innerText !== '') && (boxText[2].innerText !== '') && (boxText[3].innerText !== '') && (boxText[4].innerText !== '') && (boxText[5].innerText !== '') && (boxText[6].innerText !== '') && (boxText[7].innerText !== '') && (boxText[8].innerText !== '')) {
            document.querySelector('.info').innerHTML = `Tie !!`;
            gameOver.play();
        }
        // else if((boxText[e[0]].innerText !== boxText[e[1]].innerText) || (boxText[e[1]].innerText !== boxText[e[2]].innerText) && (boxText[e[0]].innerText !== '') && (boxText[e[1]].innerText !== '' && (boxText[e[2]].innerText !== ''))){

        // }

    })
}
//game logic

Array.from(document.getElementsByClassName('box')).forEach((ele) => {
    //query selector return the first element which has boxtext class
    // ele.queryselector return tehe firts element matched with of taht div which was clicked
    let boxText = ele.querySelector('.boxtext');
    ele.addEventListener('click', () => {
        if (boxText.innerHTML === '') {
            turn.currentTime = 0;
            boxText.innerHTML = gameTurn;
            gameTurn = changeTurn();
            if (!isgameover) {
                document.querySelector('.info').innerHTML = `Turn for ${gameTurn}`;
            }
            turn.play();
            checkWin();
        }


    })

})

document.getElementById('reset').addEventListener('click', () => {
    Array.from(document.getElementsByClassName('boxtext')).forEach((ele) => {
        ele.innerText = '';
    })
    imgBox.firstElementChild.style.width = '0';
    document.querySelector('.info').innerHTML = `Turn for ${gameTurn}`;
    // gameTurn = 'X'
    isgameover = false;

})