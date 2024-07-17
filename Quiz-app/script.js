    const questions = [
        {
            question: "Which is the largest animal in the world?",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue Whale", correct: false },
                { text: "Elephant", correct: true },
                { text: "Giraffe", correct: false }
            ]
        },
        {
            question: "Which is the largest desert in the world?",
            answers: [ 
                { text: "Antarctica", correct: true },
                { text: "Gobi", correct: false },
                { text: "Sahara", correct: false },
                { text: "Kalahari", correct: false }
            ]
        },
        {
            question: "Which is the smallest continent in the world?",
            answers: [
                { text: "Asia", correct: false },
                { text: "Australia", correct: true }, 
                { text: "Arctic", correct: false },
                { text: "Africa", correct: false }
            ]
        }
    ];

    const questionElement = document.getElementById("question")
    const answerButtons = document.getElementById("answer-button")
    const nextButton = document.getElementById("next-btn")

    let currentQuestionINdex = 0;
    let score = 0;

    const startQuiz = () => {
        currentQuestionINdex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    const showQuestion = () => {
        resetState();
        let currentQuestion = questions[currentQuestionINdex];
        let questionNo = currentQuestionINdex + 1;
        questionElement.innerHTML = questionNo + "." + currentQuestion.question;
        
        currentQuestion.answers.forEach(answer=>{
            const button = document.createElement('button')
            button.innerHTML = answer.text;
            button.classList.add('btn');
            answerButtons.appendChild(button);

            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }

            button.addEventListener("click",(e)=>{
                e.preventDefault();
                const selectedBtn = e.target;
                const isCorrect = selectedBtn.dataset.correct==="true";
                if (isCorrect) {
                    selectedBtn.classList.add("correct")
                    score++;
                }
                else{
                    selectedBtn.classList.add('incorrect')
                }
                Array.from(answerButtons.children).forEach(button => {
                    if (button.dataset.correct === "true") {
                        button.classList.add('correct');
                    }
                    button.disabled = true;
                });
                nextButton.style.display = "block"
            })
        })
    }

    const resetState = () => {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    nextButton.addEventListener('click',()=>{
        if(currentQuestionINdex < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    })

    const showScore = () => {
        resetState();
        questionElement.innerHTML = `Your score ${score} out of ${questions.length}`
        nextButton.innerHTML = "Play Again"
        nextButton.style.display = "block"
    }

    const handleNextButton = () => {
        currentQuestionINdex++;
        if (currentQuestionINdex < questions.length) {
            showQuestion()
        }
        else{
            showScore()
        }
    }

    startQuiz()

