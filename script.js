let isCircle = false;
const checkWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2 ,5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const columns = Array.from(document.querySelectorAll('.column'))
const restart = document.querySelector('.restart')

restart.addEventListener('click', playAgain)

function playAgain() {
    columns.forEach(column => column.innerText = '')
    isCircle = false;
}

function messageTournament(icon, message) {
    setTimeout(() => {
        alert('Result: ' + icon.toUpperCase() + ' ' + message)
        playAgain()
    }, 10)
}

function checkWinner() {
    let iconAwal = '';

    for( let j = 0; j < checkWin.length; j++ ) {
        iconAwal = columns[checkWin[j][0]].innerText.toLowerCase()

        let check = checkWin[j].map(i => {
            if( columns[i].innerText.length == 0 ) return false;
            else {
                return columns[i].innerText.toLowerCase() == iconAwal
            }
        })

        let isWin = check.every((arr) => arr == true)

        if( isWin ) {
            messageTournament(iconAwal, 'WIN')

            return true;
        }
    }

    return false;
}

function checkDraw() {
    const draw = columns.map(column => column.innerText.length > 0).every((arr) => arr == true);

    return draw ? messageTournament('', 'DRAW') : false
}

columns.forEach((column) => {
    column.addEventListener('click', function() {
        if( column.innerText.length == 0 ) {
            column.innerText = isCircle ? 'O' : 'X'
            isCircle = !isCircle;
        }

        if( !checkWinner() ) {
            checkDraw();
        }
        
    })
})
