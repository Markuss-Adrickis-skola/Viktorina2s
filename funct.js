//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "Kad Latvija proklamēja savu neatkarību?",
        optionA: "1914. gada 28. jūnijā",
        optionB: "1919. gada 11. novembrī",
        optionC: "1920. gada 22. augustā",
        optionD: "1918. gada 18. novembrī",
        correctOption: "optionD"
    },

    {
        question: "Kad notika Ulmaņa apvērsums?",
        optionA: "1936. gada 1. janvārī",
        optionB: "1934. gada 15. maijā",
        optionC: "2040. gada 4. maijā",
        optionD: "1940. gada 3. aprīlī",
        correctOption: "optionB"
    },

    {
        question: "Kurš bija pirmais Latvijas prezidents?",
        optionA: "Gustavs Zemgals",
        optionB: "Vaira Vīķe-Freiberga",
        optionC: "Kārlis Ulmanis",
        optionD: "Jānis Čakste",
        correctOption: "optionD"
    },

    {
        question: "Kā sauca notikumu, kad Vācija pārņēma Austriju?",
        optionA: "Austrijas okupācija",
        optionB: "Austrusla",
        optionC: "Anšlusa",
        optionD: "Vācifikācija",
        correctOption: "optionC"
    },

    {
        question: "Kāda bija Nevila Čemberlena politka Eiropai pirms Otrā pasaules kara?",
        optionA: "Izolācija",
        optionB: "Agresīvā politika",
        optionC: "Padošanās politika",
        optionD: "Nomierināšanas politika",
        correctOption: "optionD"
    },

    {
        question: "Kad Krievijas Impērija pārņēma Rīgu ?",
        optionA: "1721. gadā",
        optionB: "1201. gadā",
        optionC: "1200. gadā",
        optionD: "1563. gadā",
        correctOption: "optionA"
    },

    {
        question: "Kad uzcēla Rīgu?",
        optionA: "1533. gadā",
        optionB: "1820. gadā",
        optionC: "1201. gadā",
        optionD: "1025. gadā",
        correctOption: "optionC"
    },

    {
        question: "Kāds ir nosaukums laikmetam pirms Latviju okupēja Padomju Savienība?",
        optionA: "Ulmaņlaiki",
        optionB: "Brīvie laiki",
        optionC: "Republikas laikmets",
        optionD: "Labie laiki",
        correctOption: "optionA"
    },

    {
        question: "Kad nomira Staļins?",
        optionA: "1958. gadā",
        optionB: "1960. gadā",
        optionC: "1948. gadā",
        optionD: "1953.gadā",
        correctOption: "optionD"
    },

    {
        question: "Kura dziesma uzvarēja 'Mikrofona aptauja 1986'?",
        optionA: "Atkal sāp",
        optionB: "Prom no pilsētas",
        optionC: "Svētku diena",
        optionD: "Dzimtā valoda",
        correctOption: "optionD"
    },

    {
        question: "Kad parakstīja Molotova-Ribentropa līgumu?",
        optionA: "1941. gada 22. jūnijā",
        optionB: "1939. gada 1. septembrī",
        optionC: "1939. gada 23. augustā",
        optionD: "Nenotika",
        correctOption: "optionC"
    },

    {
        question: "Kā sauca karu, kurā Krievijas Impērija piekāva Zviedriju?",
        optionA: "Lielais Ziemeļu karš",
        optionB: "Varenais Ziemeļu karš",
        optionC: "Apbēdinošā Ziemu karš",
        optionD: "Baltijas karš",
        correctOption: "optionA"
    },

    {
        question: "Kas vācu armijai vienmēr pietrūka Otrajā pasaules karā?",
        optionA: "Gribasspēks",
        optionB: "Degviela",
        optionC: "Kareivju",
        optionD: "Zeme",
        correctOption: "optionB"
    },

    {
        question: "Kā sauc operāciju, kad Amerikāņu armija vēlējās atbrīvot Ziemeļāfriku?",
        optionA: "Maroka-Alžīrija-Tunisija",
        optionB: "Alžīras kampaņa",
        optionC: "D-Diena",
        optionD: "Lāpa",
        correctOption: "optionD"
    },

    {
        question: "Kur piedzima Kārlis Ulmanis?",
        optionA: "Dobeles novadā",
        optionB: "Rīgā",
        optionC: "Madonas novadā",
        optionD: "Alūksnes novadā",
        correctOption: "optionA"
    },

    {
        question: "Kad tika atjaunota Latvijas neatkarība ?",
        optionA: "1989. gadā",
        optionB: "1992. gadā",
        optionC: "1991. gadā",
        optionD: "1990. gadā",
        correctOption: "optionC"
    },

    {
        question: "Kuras kolonijas reiz piederēja Kurzemes hercogistei?",
        optionA: "Tobago un Gambia",
        optionB: "Gotlande un Kopenhāgena",
        optionC: "Roņu sala un Jaunlatvija",
        optionD: "Angola un Gibraltāra",
        correctOption: "optionA"
    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Pašvaki, jāmācās."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Atzīmes ir labas."
        remarkColor = "orange"
    }
    else if (playerScore >= 7 && playerScore < 10) {
        remark = "Sanāca tīri labi, bet ne izcili!"
        remarkColor = "green"
    }
    else if (playerScore == 10) {
        remark = "Izcili! Nav nekur, kur var piekasīties!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
/* Source for the code: https://dev.to/sulaimonolaniran/building-a-simple-quiz-with-html-css-and-javascript-4elp */