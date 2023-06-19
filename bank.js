let theName = document.getElementById('theName')
let amountElement = document.getElementById('amountId')
let nameFromStorage = localStorage.getItem('nameeeeeeeee')

if (nameFromStorage) {
    theName.innerHTML = nameFromStorage
} else {
    window.location.href = 'index.html'
}

let balanceFromStorage = localStorage.getItem('balance')

let balance = 0

if (balanceFromStorage) {
    balance = Number(balanceFromStorage)
    amountElement.innerHTML = balance
}

function change(num) {
    balance = balance + num
    amountElement.innerHTML = balance
    localStorage.setItem('balance', balance)
}

function logout() {
    localStorage.removeItem('nameeeeeeeee')
    localStorage.removeItem('balance')
    window.location.href = 'index.html'
}
