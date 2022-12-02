console.log('script be scripting')
 
// // DOM SELECTORS
// const result = document.querySelector('.result')
// const reset = document.querySelector('.reset')
// const start = document.querySelector('.start')
// const moves = document.querySelector('.moves')
// const instructions = document.querySelector('.instructions')
// const win = document.querySelector('.win')
// // const emojis = [🪂, ⛷, 🏂]

let counter = 0;
let firstPlayer = "";
let secondPlayer = "";

const tile = document.querySelectorAll('.tile');
    
// EVENT LISTENERS
tile.forEach((tile) => {
    tile.addEventListener('click', (e) => {
        //console.log(true )
        tile.classList.add('clicked')
    })
})


 



