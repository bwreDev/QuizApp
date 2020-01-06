/* Worked with mentor on JS before turning in wireframe.
const STATE = {
    page: "#start-page",
    currentQuestion: 0,
    score: 0,
    questions: [
        {
            title: "what is your name",
            answers: ["Colton", "Mario", "John", "Dave"],
            correct: 0,
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