var words = ["caard", "apple", "odog", "ivitamin", "epokemon", "pizza", "cowboy", "lpencil", "eriverside", "lmultiply"]
var guessed_so_far = [];
var failed_so_far = [];
var word_to_guess = "";
var max_attempts = 8;
var attempts_so_far = 0;

function startGame(){
    // [0, 0.1) -> 0
    // [0.1, 0.2) -> 1
    //...
    // [0.9, 1) -> 9
    word_to_guess = words[Math.floor(Math.random() * words.length)]
    // console.log(word_to_guess)
    guessed_so_far = Array(word_to_guess.length).fill("-")
    console.log(guessed_so_far)
    attempts_so_far = 0;
    failed_so_far = []
    renderGame()
}

function renderGame(){
    document.getElementById("guessed").innerHTML = guessed_so_far.join(" ");
    document.getElementById("attempts").innerHTML = "Attempts Left:" + (max_attempts - attempts_so_far)
    document.getElementById("failed").innerHTML = failed_so_far.join(" ")
}

function checkGuess(event){
    if (event.keyCode === 13)
    {
        letter = document.getElementById("guess_input").value;
        if (letter.length !== 1)
        {
            alert("only one char!")
            return
        }

        let flag = false
        for (let i = 0; i < word_to_guess.length; i++)
        {
            if (word_to_guess[i] === letter)
            {
                guessed_so_far[i] = letter
                flag = true
            }
        }

        if (flag == false)
        {
            failed_so_far.push(letter)
            attempts_so_far += 1
        }
        renderGame() 
        if (guessed_so_far.join("") === word_to_guess)
        {
            setTimeout(function(){
            alert("Noice")
            startGame()
            }, 100)
        }

        document.getElementById("guess_input").value = "";
        document.getElementById("guess_input").focus();
    }
}


startGame()