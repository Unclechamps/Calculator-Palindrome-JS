// var firstNum = document.getElementById('first-number')
// var secondNum = document.getElementById('second-number')
var sum = document.getElementById('btnsum')
var subtract = document.getElementById('btnsubtract')
var multiply = document.getElementById('btnmultiply')
var divide = document.getElementById('btndivide')
var result = document.getElementById('total')
var equal = document.getElementById('btnequal')
var clear = document.getElementById('clear')
var operand = ''

sum.addEventListener('click', function(){
  operand = "+"
})

subtract.addEventListener('click', function(){
  operand = "-"
})

multiply.addEventListener('click', function(){
  operand = "x"
})

divide.addEventListener('click', function(){
  operand = "/"
})

equal.addEventListener('click', function() {
  var firstNum = Number(document.getElementById('first-number').value)
  var secondNum = Number(document.getElementById('second-number').value)
  if(operand == "+") {
    result.innerHTML = firstNum + secondNum
  }
  else if(operand == "-") {
    result.innerHTML = firstNum - secondNum
  }
  else if(operand == "x") {
    result.innerHTML = firstNum * secondNum
  }
  else if (operand == "/") {
    result.innerHTML = firstNum / secondNum
  }
  else {
    result.innerHTML = "Something is off, try again!"
  }
  document.getElementById('first-number').value = ''
  document.getElementById('second-number').value = ''

})

clear.addEventListener('click',function(){
  document.getElementById('first-number').value = ''
  document.getElementById('second-number').value = ''

})

function backgroundColor() {
  var mySelect = document.getElementById('select');
  var selected = mySelect.selectedIndex
  var option = mySelect[selected]
  document.body.className = option.className
  mySelect.className = option.className
}
