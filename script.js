//your JS code here. If required.
 var questions = [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b",
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
            }
        ];

        var currentQuestion = 0;
        var score = 0;

        function loadQuestion() {
            var quizContainer = document.getElementById("quiz");
            quizContainer.innerHTML = "";

            var question = document.createElement("h2");
            question.id = "question";
            question.textContent = questions[currentQuestion].question;
            quizContainer.appendChild(question);

            var options = ["a", "b", "c", "d"];
            options.forEach(function (option) {
                var label = document.createElement("label");
                var input = document.createElement("input");
                input.type = "radio";
                input.name = "option";
                input.value = option;
                input.id = option;
                label.appendChild(input);
                label.innerHTML += " <span id='" + option + "_text'>" + questions[currentQuestion][option] + "</span>";
                quizContainer.appendChild(label);
            });

            var submitButton = document.createElement("button");
            submitButton.id = "submit";
            submitButton.textContent = "Submit";
            submitButton.onclick = submitAnswer;
            quizContainer.appendChild(submitButton);
        }

        function submitAnswer() {
            var selectedOption = document.querySelector("input[name='option']:checked");

            if (selectedOption) {
                if (selectedOption.value === questions[currentQuestion].correct) {
                    score++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }
        }

        function showResult() {
            var quizContainer = document.getElementById("quiz");
            quizContainer.innerHTML = "";

            var result = document.createElement("h2");
            result.textContent = "\nYou answered " + score + "/" + questions.length + " questions correctly\n";
           
quizContainer.appendChild(result);

var reloadButton = document.createElement("button");
reloadButton.textContent = "Reload Quiz";
reloadButton.onclick = reloadQuiz;
quizContainer.appendChild(reloadButton);
}

function reloadQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

window.onload = loadQuestion;