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
            }
            else if (userChoice === "paper") {
                result.html("You win");
            }
            // if userChoice is scissors
            else {
                result.html("Computer wins");
            }
        }
        // computer's choice is paper
        else if (computerChoice === 1) {
            computerChoice = "paper";
            computerTextField.html("Computer chose " + computerChoice);

            if (userChoice === "rock") {
                result.html("Computer wins");
            }
            else if (userChoice === "paper") {
                result.html("Tie!");
            }
            // if userChoice is scissors
            else {
                result.html("You win");
            }
        }
        // computer's choice is scissors
        else {
            computerChoice = "scissors";
            computerTextField.html("Computer chose " + computerChoice);

            if (userChoice === "rock") {
                result.html("You win");
            }
            else if (userChoice === "paper") {
                result.html("Computer wins");
            }
            // if userChoice is scissors
            else {
                result.html("Tie!");
            }
        }
    });
});

