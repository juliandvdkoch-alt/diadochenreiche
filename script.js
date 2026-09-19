/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* =========================================================
   ZEITLEISTE
========================================================= */

const timelineData = {

    323: {
        year: "323 v. Chr.",
        title: "Der Tod Alexanders des Großen",
        text:
            "Alexander stirbt in Babylon. Da keine eindeutige erwachsene Nachfolge geregelt ist, beginnt ein langwieriger Kampf um die politische Zukunft seines Reiches."
    },

    322: {
        year: "322 v. Chr.",
        title: "Die ersten Diadochenkriege",
        text:
            "Nach Alexanders Tod beginnen Machtkämpfe zwischen seinen Generälen und politischen Nachfolgern. Bündnisse und Herrschaftsgebiete verändern sich wiederholt."
    },

    301: {
        year: "301 v. Chr.",
        title: "Die Schlacht bei Ipsos",
        text:
            "Antigonos I. wird von einer Koalition seiner Gegner besiegt und fällt. Der Versuch, das ehemalige Alexanderreich unter einer Herrschaft zusammenzuführen, scheitert."
    },

    281: {
        year: "281 v. Chr.",
        title: "Die Schlacht bei Kurupedion",
        text:
            "Seleukos I. besiegt Lysimachos. Mit dem Tod der letzten großen Vertreter der ersten Diadochegeneration verändert sich die politische Landschaft erneut."
    },

    168: {
        year: "168 v. Chr.",
        title: "Das Ende der makedonischen Großmacht",
        text:
            "Nach dem Dritten Makedonischen Krieg besiegt Rom König Perseus. Makedonien verliert seine politische Selbstständigkeit."
    },

    30: {
        year: "30 v. Chr.",
        title: "Das Ende des Ptolemäerreichs",
        text:
            "Nach dem Tod Kleopatras VII. wird Ägypten römisch. Damit endet das letzte der großen hellenistischen Königreiche."
    }
};

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineDetail = document.getElementById("timelineDetail");

timelineItems.forEach((item) => {

    item.addEventListener("click", () => {

        const year = item.dataset.year;
        const data = timelineData[year];

        timelineItems.forEach((element) => {
            element.classList.remove("active");
        });

        item.classList.add("active");

        timelineDetail.innerHTML = `
            <span class="detail-year">${data.year}</span>

            <h3>${data.title}</h3>

            <p>${data.text}</p>
        `;
    });

});


/* =========================================================
   QUIZ
========================================================= */

const questions = [

    {
        question:
            "In welchem Jahr starb Alexander der Große in Babylon?",

        answers: [
            "323 v. Chr.",
            "301 v. Chr.",
            "281 v. Chr.",
            "168 v. Chr."
        ],

        correct: 0,

        explanation:
            "Alexander der Große starb 323 v. Chr. in Babylon."
    },

    {
        question:
            "Was bezeichnet der Begriff „Diadochen“?",

        answers: [
            "Die Nachfolger Alexanders des Großen",
            "Die persischen Könige vor Alexander",
            "Die römischen Statthalter in Ägypten",
            "Die Bürger Alexandrias"
        ],

        correct: 0,

        explanation:
            "Diadochen bedeutet „Nachfolger“ und bezeichnet vor allem Alexanders politische und militärische Nachfolger."
    },

    {
        question:
            "Welcher Herrscher begründete die ptolemäische Herrschaft in Ägypten?",

        answers: [
            "Ptolemaios I.",
            "Seleukos I.",
            "Antigonos I.",
            "Kassandros"
        ],

        correct: 0,

        explanation:
            "Ptolemaios I. etablierte seine Herrschaft in Ägypten und begründete die ptolemäische Dynastie."
    },

    {
        question:
            "Warum war die Schlacht bei Ipsos 301 v. Chr. besonders wichtig?",

        answers: [
            "Der Versuch des Antigonos, das Alexanderreich zu vereinigen, scheiterte.",
            "Alexander der Große begann dort seinen Asienfeldzug.",
            "Rom eroberte dort Ägypten.",
            "Das Seleukidenreich wurde dort gegründet."
        ],

        correct: 0,

        explanation:
            "Bei Ipsos wurde Antigonos besiegt und fiel. Damit scheiterte ein wichtiger Versuch, das ehemalige Alexanderreich wieder zu vereinigen."
    },

    {
        question:
            "Welches Reich wurde von Seleukos I. begründet?",

        answers: [
            "Das Seleukidenreich",
            "Das Ptolemäerreich",
            "Das Antigonidenreich",
            "Das Römische Reich"
        ],

        correct: 0,

        explanation:
            "Seleukos I. begründete das Seleukidenreich in großen Teilen Vorderasiens."
    },

    {
        question:
            "Welche Stadt wurde unter den Ptolemäern zu einem bedeutenden Zentrum von Handel und Wissenschaft?",

        answers: [
            "Alexandria",
            "Sparta",
            "Rom",
            "Karthago"
        ],

        correct: 0,

        explanation:
            "Alexandria in Ägypten entwickelte sich unter den Ptolemäern zu einem bedeutenden Zentrum der hellenistischen Welt."
    },

    {
        question:
            "Wann verlor Makedonien seine politische Selbstständigkeit gegenüber Rom?",

        answers: [
            "168 v. Chr.",
            "323 v. Chr.",
            "301 v. Chr.",
            "30 v. Chr."
        ],

        correct: 0,

        explanation:
            "Nach dem Dritten Makedonischen Krieg besiegte Rom 168 v. Chr. König Perseus."
    },

    {
        question:
            "Wann endete das Ptolemäerreich?",

        answers: [
            "30 v. Chr.",
            "168 v. Chr.",
            "281 v. Chr.",
            "64 v. Chr."
        ],

        correct: 0,

        explanation:
            "30 v. Chr. wurde Ägypten nach dem Tod Kleopatras VII. römisch."
    }

];


let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");

const nextButton = document.getElementById("nextButton");

const questionCounter = document.getElementById("questionCounter");
const scoreDisplay = document.getElementById("scoreDisplay");

const progressBar = document.getElementById("progressBar");

const quizContent = document.getElementById("quizContent");
const quizResult = document.getElementById("quizResult");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

const restartButton = document.getElementById("restartButton");


function loadQuestion() {

    answered = false;

    nextButton.disabled = true;

    feedbackElement.textContent = "";

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionCounter.textContent =
        `Frage ${currentQuestion + 1} von ${questions.length}`;

    scoreDisplay.textContent =
        `Punkte: ${score}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersElement.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(button, index);
        });

        answersElement.appendChild(button);
    });
}


function selectAnswer(selectedButton, selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }
    });


    if (selectedIndex === question.correct) {

        score++;

        selectedButton.classList.add("correct");

        feedbackElement.textContent =
            `Richtig! ${question.explanation}`;

    } else {

        selectedButton.classList.add("wrong");

        feedbackElement.textContent =
            `Nicht ganz. ${question.explanation}`;
    }

    scoreDisplay.textContent =
        `Punkte: ${score}`;

    nextButton.disabled = false;

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent =
            "Ergebnis anzeigen";

    } else {

        nextButton.textContent =
            "Nächste Frage";
    }
}


nextButton.addEventListener("click", () => {

    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

        return;
    }

    loadQuestion();
});


function showResult() {

    quizContent.classList.add("hidden");

    quizResult.classList.remove("hidden");

    finalScore.textContent =
        `${score}/${questions.length}`;

    const percentage =
        Math.round((score / questions.length) * 100);

    if (percentage === 100) {

        resultMessage.textContent =
            "Hervorragend! Du kennst die wichtigsten Zusammenhänge der Diadochenzeit sehr sicher.";

    } else if (percentage >= 75) {

        resultMessage.textContent =
            "Sehr gut! Die wichtigsten Ereignisse und Reiche sitzen bereits sicher.";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "Gute Grundlage. Wiederhole vor allem die Zeitleiste und die verschiedenen Reiche.";

    } else {

        resultMessage.textContent =
            "Schau dir zunächst die Zeitleiste und die drei großen Reiche noch einmal an.";
    }
}


restartButton.addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    quizResult.classList.add("hidden");

    quizContent.classList.remove("hidden");

    loadQuestion();

});


/* =========================================================
   QUIZ START
========================================================= */

loadQuestion();
