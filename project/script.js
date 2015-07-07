var randomNumber;
var computerChoice;
var counter = 0;


function generateRandom(lower, upper) {
  var lower = +document.getElementById("firstNumber").value;
  var upper = +document.getElementById("secondNumber").value;

  if (isNaN(lower) || isNaN(upper)) {
    alert("Both arguments must be numbers.");
  } else {
    document.getElementById("randomNumber").innerHTML = "<h5>A random number has been generated!</h5>";
  }

  randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  computerChoice = Number(randomNumber);
}

function show() {
  document.getElementById("show").innerHTML = "<h5>Your random number is " + computerChoice + ".</h5>";
}

function guessNow(userGuess) {
  userGuess = +document.getElementById("guess").value;

  if (userGuess === computerChoice) {
    document.getElementById("status").innerHTML = "<h5>You Guessed Correctly</h5>";
    counter++;
  } else if (userGuess + 10 < computerChoice) {
    document.getElementById("status").innerHTML = "<h5>Your guess is to WAY low</h5>";
    counter++;
  } else if (userGuess - 10 > computerChoice) {
    document.getElementById("status").innerHTML = "<h5>Your guess is to WAY low</h5>";
    counter++;
  } else if (userGuess > computerChoice) {
    document.getElementById("status").innerHTML = "<h5>Your guess is to high</h5>";
    counter++;
  } else if (userGuess < computerChoice) {
    document.getElementById("status").innerHTML = "<h5>Your guess is to low</h5>";
    counter++;
  }
}

function score() {
  document.getElementById("score").innerHTML = "<h5>It took you  " + counter + " times to guess correctly!</h5>";
}


//Github:
$ cat .gitattributes
  *.rb linguist-language=JavaScript
