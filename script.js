// Your JS goes here
function createTable(){
console.log('Function has been activated')
  for (var i = 0; i < 81; i++){
    ranColorArray = []
    for (let x = 0; x < 5; x++){
      var randomColors = '#' + Math.random().toString(16).slice(-6)
      ranColorArray.push(randomColors)
    }
    console.log(ranColorArray)
    var tile = document.createElement("div");
    var body = document.getElementsByTagName('body')[0];
    document.body.prepend(tile);
    tile.style.width = '11.1%';
    tile.style.paddingBottom = '11.1%';
    tile.display = 'float';
    tile.style.float = 'left';
    if(i%2 === 0){
      tile.style.background = `linear-gradient(to top left,${ranColorArray[0]},${ranColorArray[1]},${ranColorArray[2]},${ranColorArray[3]},${ranColorArray[4]})`
    }
    else if (i%2 === 1) {

      tile.style.background = `linear-gradient(to top left,${ranColorArray[0]},${ranColorArray[1]},${ranColorArray[2]},${ranColorArray[3]},${ranColorArray[4]})`
    }
  }
}
// USE THIS TO LOAD THE FUNCTION
document.getElementsByTagName('HTML')[0].addEventListener('load',createTable())

// intervals
// setInterval(, 1000)

// console.log(document.getElementsByTagName('HTML')[0])
