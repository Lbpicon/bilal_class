const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {}

function showResults() {}

// display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click,'showResults);

const myQuestions = [
    {
        question: "Who is the strongest?",

        answer: {
            a: "Superman"

            b: "The Terminator"

            c: "Waluigi, obviously"
        },

        correctAnswer: "c"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach (
        (currentQuestion, questionNumber) => {
        
        const answers = [];

        for(letter in currentQuestion.answers){
            answers.push(
                <label>
                    <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                </label>
            );

        }

        }
    )


}