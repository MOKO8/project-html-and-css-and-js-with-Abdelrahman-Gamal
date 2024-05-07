let changeColor = document.getElementById('change');
let model = document.getElementById('model');
  changeColor.addEventListener('click', function(){
  model.classList.toggle('model-down')
})

let closee = document.getElementById('close');
closee.onclick = function () {
  model.classList.remove('model-down')
}


let colorRed = document.getElementById('red');
let colorGreen = document.getElementById('green');
let colorYellow = document.getElementById('yellow');
let colorBlack = document.getElementById("black");
let colorOrange = document.getElementById('orange');
let Dad = document.getElementById('container');




colorRed.addEventListener('click', function(){
  if(Dad.classList.length > 1){
    Dad.classList.remove('container-bacakground-green', 'container-bacakground-yellow','container-bacakground-orange')
  }
  Dad.classList.add('container-bacakground-red')
})
colorGreen.addEventListener('click', function(){
  if(Dad.classList.length > 1){
    Dad.classList.remove('container-bacakground-red', 'container-bacakground-yellow','container-bacakground-orange')
  }
  Dad.classList.add('container-bacakground-green')
})
colorYellow.addEventListener('click', function(){
  if(Dad.classList.length > 1){
    Dad.classList.remove('container-bacakground-red', 'container-bacakground-green','container-bacakground-orange')
  }
  Dad.classList.add('container-bacakground-yellow')
})
colorBlack.addEventListener('click', function(){
  Dad.classList.remove('container-bacakground-red','container-bacakground-green','container-bacakground-yellow','container-bacakground-orange')
})
colorOrange.addEventListener('click', function(){
  if(Dad.classList.length > 1){
    Dad.classList.remove('container-bacakground-red', 'container-bacakground-green','container-bacakground-yellow')
  }
  Dad.classList.add('container-bacakground-orange')
})
