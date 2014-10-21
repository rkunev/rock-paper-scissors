$(document).ready(function() {    
    // hover animation
    $(".items img").hover(
        function() {
            $(this).animate({ width: 200 }, 100);
        },
        function() {
            $(this).animate({ width: 175 }, 100);
        }
    );

    // game logic
    $(".items img").click(function() {

        var computerChoice = Math.round(Math.random() * 3),
            userChoice = $(this).attr("alt"),
            result = $("#result"),
            userTextField = $("#user-field"),
            computerTextField = $("#computer-field");

        userTextField.html("You chose " + userChoice);

        // computer's choice is rock
        if (computerChoice === 0) {
            computerChoice = "rock";
            computerTextField.html("Computer chose " + computerChoice);

            if (userChoice === "rock") {
                result.html("Tie!");
            } else if (userChoice === "paper") {
                result.html("You win");
            } else { // if userChoice is scissors
                result.html("Computer wins");
            }
        } else if (computerChoice === 1) { // computer's choice is paper
            computerChoice = "paper";
            computerTextField.html("Computer chose " + computerChoice);

            if (userChoice === "rock") {
                result.html("Computer wins");
            } else if (userChoice === "paper") {
                result.html("Tie!");
            } else { // if userChoice is scissors
                result.html("You win");
            }
        } else { // computer's choice is scissors
            computerChoice = "scissors";
            computerTextField.html("Computer chose " + computerChoice);

            if (userChoice === "rock") {
                result.html("You win");
            } else if (userChoice === "paper") {
                result.html("Computer wins");
            } else { // if userChoice is scissors
                result.html("Tie!");
            }
        }
    });
});