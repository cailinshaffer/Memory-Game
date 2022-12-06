//console.log('script be scripting')
 



let counter = 0;
let firstSelector = "";
let secondSelector = "";


const tilesClicked = []


const tile = document.querySelectorAll(".tile");
tile.forEach((tile) => {
  tile.addEventListener("click", () => {
    tile.classList.add("clicked");

    if (counter === 0) {
      firstSelector = tile.getAttribute("resort");
      counter++;
    } else {
      secondSelector = tile.getAttribute("resort");
      counter = 0;

      if (firstSelector === secondSelector) {
        const correctTile = document.querySelectorAll(
          ".tile[resort='" + firstSelector + "']"
        );

        correctTile[0].classList.add("checked");
        correctTile[0].classList.remove("clicked");
        correctTile[1].classList.add("checked");
        correctTile[1].classList.remove("clicked");
      } else {
        const incorrectTile = document.querySelectorAll(".tile.clicked");

        incorrectTile[0].classList.add("shake");
        incorrectTile[1].classList.add("shake");

        setTimeout(() => {
          incorrectTile[0].classList.remove("shake");
          incorrectTile[0].classList.remove("clicked");
          incorrectTile[1].classList.remove("shake");
          incorrectTile[1].classList.remove("clicked");
        }, 800);
      }
    }
  });
});

// let endGame = () => {
//     if(correctTiles === 8)
//     endGame = true
//     console.log("game over")}










    
    
    
    
    
    
    
   