// Your JS goes here
function createTable(){
console.log('Function has been activated')
  for (var i = 0; i < 81; i++){
    var randomColors = '#' + Math.random().toString(16).slice(-6);
    var tile = document.createElement("div");
    var body = document.getElementsByTagName('body')[0];
    document.body.prepend(tile);
    tile.style.width = '11.1%';
    tile.style.paddingBottom = '11.1%';
    tile.display = 'float';
    tile.style.float = 'left';
    if(i%2 === 0){
      // tile.style.background = 'linear-gradient(to top left,'+randomColors+ ',' + randomColors +')';
      // tile.style.background = randomColors
      tile.style.backgroundColor = 'black';
    }
    else if (i%2 === 1) {
      tile.style.backgroundColor = 'red';
      // tile.style.background = randomColors
      // tile.style.background = `linear-gradient(to top left,${ran1},${ran2},${ran3},${ran4},${ran5})`
    }
  }
}
// USE THIS TO LOAD THE FUNCTION
document.getElementsByTagName('HTML')[0].addEventListener('load',createTable())

// intervals
// setInterval(, 1000)

// console.log(document.getElementsByTagName('HTML')[0])
