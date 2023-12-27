function startGame() {

    const score = document.getElementById("show-score");
    const questionDisplay = document.getElementById("question-con");
    const TRUE = document.getElementById("tBtn");
    const FALSE = document.getElementById("fBtn");

    const q = [
        "2 + 2 = 4",
        "3 + 6 = 8",
        "10 x 2 = 21",
        "10 x 12 = 120",
        "13 x 16 = 168",
        "21 x 9 = 189",
        "30 x 15 = 150",
        "186 + 114 = 300",
        "18 x 18 = 36",
        "58 + 27 = 95",
        "12 x 14 = 168",
        "1 + 1 = 2",
        "9 + 10 = 21"
    ];

    const qA = [
        "True",
        "False",
        "False",
        "True",
        "False",
        "True",
        "False",
        "True",
        "False",
        "False",
        "True",
        "True",
        "False"
    ];

    var correctAns = 0;
    var question = 0;

    TRUE.addEventListener("click", tBtnClick);
    FALSE.addEventListener("click", fBtnClick);

    questionDisplay.textContent = q[question];

    function tBtnClick() {
        if (qA[question] == "True") {
            correctAns++;
            question++;
            score.textContent = "Score: " + correctAns;
            nextQ();
        } else {
            question++;
            nextQ()
        }
    }

    function fBtnClick() {
        if (qA[question] == "False") {
            correctAns++;
            question++;
            score.textContent = "Score: " + correctAns;
            nextQ();
        } else {
            question++;
            nextQ()
        }
    }

    function nextQ() {
        if (question < q.length) {
            questionDisplay.textContent = q[question];
        } else {
            questionDisplay.textContent = "Your total score was on this quiz was " + correctAns + "/" + q.length;
            score.textContent = "Score: ";
        }
    }
}
