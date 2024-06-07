document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const nextButton = document.getElementById('next');
    const submitButton = document.getElementById('submit');

    let currentQuestionIndex = 0;
    let userAnswers = [];
    const randomQuestions = getRandomQuestions();

    function getRandomQuestions() {
        let shuffled = questions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
    }

    function showQuestion(index) {
        const currentQuestion = randomQuestions[index];
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    <br>
                </label>`
            );
        }

        quizContainer.innerHTML = `
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
        `;

        if (index === randomQuestions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
    }

    function showResults() {
        let numCorrect = 0;

        userAnswers.forEach((userAnswer, questionNumber) => {
            if (userAnswer === randomQuestions[questionNumber].correctAnswer) {
                numCorrect++;
            }
        });

        document.body.innerHTML = `<div class="results-screen">You scored ${numCorrect} out of ${randomQuestions.length}</div>`;
    }

    function nextQuestion() {
        const answerContainer = quizContainer.querySelector('.answers');
        const selector = `input[name=question${currentQuestionIndex}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer) {
            userAnswers[currentQuestionIndex] = userAnswer;
            currentQuestionIndex++;

            if (currentQuestionIndex < randomQuestions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResults();
            }
        } else {
            alert("Please select an answer before proceeding.");
        }
    }

    nextButton.addEventListener('click', nextQuestion);
    submitButton.addEventListener('click', showResults);

    showQuestion(currentQuestionIndex);
});
