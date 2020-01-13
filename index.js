const STATE = {
    page: "#start-page",
    currentQuestion: 0,
    score: 0,
    questions: [
        {
            title: "Who is the character that has to save Princess Peach from Bowser?",
            answers: ["Luigi", "Mario", "Yoshi", "Link"],
            correct: 1,
        },
        {
            title: "Who is the character who must find the pieces of the TriForce in order to defeat Ganon?",
            answers: ["Yoshi", "Zelda", "Link", "Mario"],
            correct: 2,
        },
        {
            title: "What game included the first ever \"easter egg\" in its code?",
            answers: ["Asteroids", "Adventure", "Yars Revenge", "Pong"],
            correct: 1,
        },
        {
            title: "Which video game series has you play as the character Master Chief?",
            answers: ["Call of Duty", "Gears of War", "Battlefield", "Halo"],
            correct: 3,
        },
        {
            title: "In what major historical conflict, does the first several Call of Duty titles, take place in?",
            answers: ["World War II", "World War I", "Vietnam War", "Gulf War"],
            correct: 0,
        },
        {
            title: "Which game console holds the exclusive rights for the racing simulator, Gran Turismo?",
            answers: ["Xbox", "Dreamcast", "Playstation", "Nintendo"],
            correct: 2,
        },
        {
            title: "What competitive team based online game has you playing characters such as, Garen or Tristana or Miss Fortune?",
            answers: ["Dota 2", "Heroes of the Storm", "Team Fortress 2", "League of Legends"],
            correct: 3,
        },
        {
            title: "What gametype is the best description for the game Skyrim?",
            answers: ["Role Playing Game", "First Person Shooter", "Platformer", "Simulation"],
            correct: 0,
        },
        {
            title: "What fighting game features characters like Lou Kang, Johnny Cage, and Scorpion?",
            answers: ["Streetfighter", "Soul Caliber", "Mortal Kombat", "Tekken"],
            correct: 2,
        },
        {
            title: "What popular car based game has you trying to score goals with an oversized soccer ball?",
            answers: ["Forza", "Rocket League", "Mario Kart", "Need for Speed"],
            correct: 1,
        }

    ]
};


function render() {
    $("section").hide();
    $(STATE.page).show();
    const question = STATE.questions[STATE.currentQuestion];
    if (STATE.page == "#question-page") {

        $("#labelOne").text(question.answers[0]);
        $("#labelTwo").text(question.answers[1]);
        $("#labelThree").text(question.answers[2]);
        $("#labelFour").text(question.answers[3]);
        $("#question-title").text(question.title);
    }
    else if (STATE.page == "#feedback-page") {
        if (STATE.correct) {
            $(".correct-answer").show();
            $(".wrong-answer").hide();
        }
        else {
            let trueAnswer = question.answers[question.correct];
            $(".trueAnswer").text(trueAnswer);
            $(".wrong-answer").show();
            $(".correct-answer").hide();
        }
    }
    $('.questionNumberCounter').text(STATE.currentQuestion + 1);
    $('.scoreCounter').text(STATE.score);
};


function bindEvents() {
    $("main").on("click", ".start-button", e => {
        STATE.currentQuestion = 0;
        STATE.score = 0;
        STATE.page = "#question-page";
        render();
    });
    $("main").on("click", ".next-question-button", e => {
        if (STATE.currentQuestion < 9) {
            STATE.page = "#question-page";

        }
        else {
            STATE.page = "#score-page"
        }
        STATE.currentQuestion++;
        render();
    });
    $("main").on("submit", "form", e => {
        e.preventDefault();
        console.log(e.target.answer.value);
        const question = STATE.questions[STATE.currentQuestion];
        if (question.correct == e.target.answer.value) {
            STATE.correct = true;
            STATE.score++;
        }
        else {
            STATE.correct = false;
        }
        STATE.page = "#feedback-page"
        e.target.reset()
        render();
    })
};

function main() {
    bindEvents();
    render();
    console.log("main ran");
}
$(main);
