// camelCase
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
// intialize the count as 0
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let message = count + " - "
    saveEl.textContent += message
    countEl.textContent = 0
    count = 0
}
