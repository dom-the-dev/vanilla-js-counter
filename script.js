const increment = document.getElementById('increment')
const reset = document.getElementById('reset')
const decrement = document.getElementById('decrement')
const counter = document.getElementById('counter')
let number = parseInt(counter.innerText);

increment.addEventListener('click', function (e) {
	e.preventDefault()
	number += 1
	counter.innerText = number
})

decrement.addEventListener('click', function (e) {
	e.preventDefault()
	number -= 1
	counter.innerText = number
})

reset.addEventListener('click', function (e) {
	e.preventDefault()
	number = 0
	counter.innerText = number
})