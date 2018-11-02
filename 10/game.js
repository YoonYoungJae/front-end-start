var wrapWidth = 300;
var bugWidth = 30;
var $bug = document.querySelector('#bug');
var $box = document.querySelector('.box');
var $point = document.querySelector('#point');
var $life = document.querySelector('#life');
var point = 0;
var life = 10;
timer = 0;

function move() {
  var x = random(wrapWidth - bugWidth);
  var y = random(wrapWidth - bugWidth);
  console.log(x, y);

  $bug.style.left = x + 'px';
  $bug.style.top = y + 'px';
}
function random(max) {
  return Math.floor(Math.random() * max);
}


function addpoint(event){
    point += 1;
    $point.innerHTML = point;
    dieBug();
    event.stopPropagation();
}

function removelife(event){
    life -= 1;
    $life.innerHTML = life;
    
    if(life == 0){
        gameover();
    }
}
function gameover(){
    clearInterval;
}

function dieBug(){
    /*$bug.style.display = 'none'; */
    move();
}

 $bug.addEventListener('click', addpoint)
 $box.addEventListener('click', removelife)

function start(){
    timer = setInterval(move, 1000);
}


setInterval(move, 1000);