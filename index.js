// camelCase
let countEl = document.getElementById("count-el")
// intialize the count as 0
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}