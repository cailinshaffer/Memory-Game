// console.log("script be scripting");
// declare variables for first and second choice
//declare player
// declare whos move it is
let counter = 0
let moveCounter = 0
let currentPlayer = 1
let firstSelector = ''
let secondSelector = ''


// grab element from html player time and score
const timer1 = document.getElementById('timer-player-1')
const score1 = document.getElementById('score-player-1')
const timer2 = document.getElementById('timer-player-2')
const score2 = document.getElementById('score-player-2')
const title = document.getElementById('title')


// for debugging
const timer1StartButton = document.getElementById('timer-player-1-start')
const timer1StopButton = document.getElementById('timer-player-1-stop')

//console.log(timer1StopButton, timer1StartButton)

const timer2StartButton = document.getElementById('timer-player-2-start')
const timer2StopButton = document.getElementById('timer-player-2-stop')

//console.log(timer2StartButton, timer2StopButton)
// add event listeners for timers and score
const resetButton = document.getElementById('reset')
timer1StartButton.addEventListener('click', startTimer1)
timer1StopButton.addEventListener('click', stopTimer1)
timer2StartButton.addEventListener('click', startTimer2)
timer2StopButton.addEventListener('click', stopTimer2)
resetButton.addEventListener('click', reset)

let timer1Interval
let timer2Interval
//make a reset function and clear out player score, timer, winner results and tiles clicked 
function reset() {
     counter = 0
    moveCounter = 0
    currentPlayer = 1
    firstSelector = ''
    secondSelector = ''
	score1.innerText = 0
	timer1.innerText = 0
	score2.innerText = 0
	timer2.innerText = 0
    resetTiles()
    tile.text = "Memory Game"
}
//console.log(reset)
//create functions for each players score and timers
//create a way to incorporate how quickly all matches are made to create a score, lowest score wins
function startTimer1() {
	timer1Interval = setInterval(() => {
		let value = Number(timer1.innerText)
		value += 1
		timer1.innerText = value
	}, 1000)
}

function startTimer2() {
	timer2Interval = setInterval(() => {
		let value = Number(timer2.innerText)
		value += 1
		timer2.innerText = value
	}, 1000)
}

function stopTimer1() {
	addTimer1ToScore1()
	clearInterval(timer1Interval)
}

function stopTimer2() {
	addTimer2ToScore2()
	clearInterval(timer2Interval)
}

function addTimer1ToScore1() {
	let score = Number(score1.innerText)
	let time = Number(timer1.innerText)
	score1.innerText = score + time
	timer1.innerText = 0
}

function addTimer2ToScore2() {
	let score = Number(score2.innerText)
	let time = Number(timer2.innerText)
	score2.innerText = score + time
	timer2.innerText = 0
}

const tiles = document.querySelectorAll('.tile')
function resetTiles() {
	tiles.forEach((tile) => {
        //console.log(true)
		tile.classList.remove('checked')
	})
}
// grab all tiles tiles and add click events
//display when card is clicked and show picture of tile
// when clicked check for matches
tiles.forEach((tile) => {
	tile.addEventListener('click', () => {
		
		tile.classList.add('clicked')
        //"counter === 0" -- no cards selected
        //when tile is clicked grab attribute from html
		if (counter === 0) {
			firstSelector = tile.getAttribute('resort')
			counter++
		} else {
			secondSelector = tile.getAttribute('resort')
			counter = 0
            //console.log(firstSlector,secondSelector)
            //
			if (firstSelector === secondSelector) {
				const correctTile = document.querySelectorAll(
					".tile[resort='" + firstSelector + "']"
				)
                //array to see if tiles are a match when 2 cards are clicked
                // if tiles arent a match remove click and flip cards back over
				correctTile[0].classList.add('checked')
				correctTile[0].classList.remove('clicked')
				correctTile[1].classList.add('checked')
				correctTile[1].classList.remove('clicked')
				moveCounter++
				// Set current player and when players turn is done
				if (currentPlayer === 1 && moveCounter === 6) {
					stopTimer1()
					resetTiles()
					currentPlayer = 2
					moveCounter = 0
                    //once player 2 has finished, display winner
				} else if (currentPlayer === 2 && moveCounter === 6) {
					console.log(`${moveCounter} player 2`)
					stopTimer2()
					let playerOneScore =
						document.getElementById('score-player-1').textContent
					let playerTwoScore =
						document.getElementById('score-player-2').textContent
					// Compare scores and set winner
					Number(playerOneScore) < Number(playerTwoScore)
						? (title.textContent = 'Player 1 wins')
						: (title.textContent = 'Player 2 wins')

					
				}
                
			} else {
				const incorrectTile = document.querySelectorAll('.tile.clicked')

				incorrectTile[0].classList.add('shake')
				incorrectTile[1].classList.add('shake')
                
                // set amount of time after tile once incorrect match is made to have cards flip back to original
				setTimeout(() => {
					incorrectTile[0].classList.remove('shake')
					incorrectTile[0].classList.remove('clicked')
					incorrectTile[1].classList.remove('shake')
					incorrectTile[1].classList.remove('clicked')
				}, 1000)
			}
		}
	})
})