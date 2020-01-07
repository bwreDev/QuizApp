/* Worked with mentor on JS before turning in wireframe.
const STATE = {
    page: "#start-page",
    currentQuestion: 0,
    score: 0,
    questions: [
        {
            title: "Who is the character that has to save Princess Peach from Bowser?",
            answers: ["Luigi", "Mario", "Yoshi", "Link"],
            correct: 1,
        }
        {
            title: "Who is the character who must find the pieces of the TriForce in order to defeat Ganon?",
            answers: ["Yoshi", "Zelda", "Link", "Mario"],
            correct: 2,
        }
        {
            title: "What game included the first ever \"easter egg\" in its code?",
            answers: ["Asteroids", "Adventrue", "Yars Revenge", "Pong"],
            correct: 1,
        }
        {
            title: "Which video game series has you play as the character Master Chief?",
            answers: ["Call of Duty", "Gears of War", "Battlefield", "Halo"],
            correct: 3,
        }
        {
            title: "In what major historical conflict, does the first several Call of Duty titles, take place in?",
            answers: ["World War II", "World War I", "Vietnam War", "Gulf War"],
            correct: 0,
        }
        {
            title: "Which game console holds the exclusive rights for the racing simulator, Gran Turismo?",
            answers: ["Xbox", "Dreamcast", "Playstation", "Nintendo"],
            correct: 2,
        }
        {
            title: "What competitive team based online game has you playing characters such as, Garen or Tristana or Miss Fortune?",
            answers: ["Dota 2", "Heroes of the Storm", "Team Fortress 2", "League of Legends"],
            correct: 3,
        }
        {
            title: "What gametype is the best description for the game Skyrim?",
            answers: ["Role Playing Game", "First Person Shooter", "Platformer", "Simulation"],
            correct: 0,
        }
        {
            title: "What fighting game features characters like Lou Kang, Johnny Cage, and Scorpion?",
            answers: ["Streetfighter", "Soul Caliber", "Mortal Kombat", "Tekken"],
            correct: 2,
        }
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
    if (STATE.page == "#question-page") {
        const question = STATE.questions[STATE.currentQuestion];
        $("#labelOne").text(question.answers[0]);
        //grab title question
    }
};

function bindEvents() {
    $("main").on("click", ".start-button", e => {
        STATE.page = "#question-page";
        render();
    })
};

function main() {
    bindEvents();
    render();
    console.log("main ran");
}
$(main);
*/