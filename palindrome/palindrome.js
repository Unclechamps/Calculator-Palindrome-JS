var enter = document.getElementById('button')
var result = document.getElementById('palindrome')

enter.addEventListener('click',function() {
var word = document.getElementById('userInput').value
var word_in_reverse = ''
for(i = word.length-1; i >= 0; i--) {
  word_in_reverse += word[i]
}

if (word_in_reverse.toLowerCase() == word.toLowerCase()) {
  result.innerHTML = "The word IS a palindrome!"
} else {
  result.innerHTML = "Unfortunately, this is not a palindrome!"
}

console.log(word_in_reverse)

})
