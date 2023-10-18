let guessed_number
let random_number = Math.ceil(Math.random() * 100)

function checkGuess() {
    guessed_number = document.getElementById("userInput").value
    guessed_number = parseInt(guessed_number)
    if (guessed_number > random_number) {
        document.getElementById("gameResult").textContent = "Guess Lower"
        document.getElementById("gameResult").style.backgroundColor = "#1e217c"
    } else if (guessed_number < random_number) {
        document.getElementById("gameResult").textContent = "Guess Higher"
        document.getElementById("gameResult").style.backgroundColor = "#1e217c"
    } else {
        document.getElementById("gameResult").textContent = "Congratulations you found the number!"
        document.getElementById("gameResult").style.backgroundColor = "green"
    }

}