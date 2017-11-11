var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = userguess;

updatewins();
updatelosses();
updateguessesLeft();
updateguessesSoFar();

    document.onkeyup = function (event) {
        var userguess = String.fromCharCode(event.keyCode)
        toLowerCase();

        console.log(userguess);

        if ((userguess == computerGuess)) {
        wins++;
        documet.querySelector("<p>Wins:</p>").innerHTML = "Wins:" + wins;
        alert("Yes, the letter was " + computerGuess.toUpperCase());
        alert("Yes you are psychic!")
        reset();
        }
        else (userguess == 0) {
        losses++;
        documet.querySelector("<p>Losses:</p>").innerHTML = "Losses:" + losses;
        alert("You probably aren't psychic after all...")
        reset();
        }

}    

