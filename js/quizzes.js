let templateObjectsQuizzes = [
    {
        template: '#quizzes-handlebars-template',
        context: {
            "quizButtons": [
                {"button-class": "btn-info", "button-level": "Basic", "quiz-modal": "basic-quiz-modal"},
                {"button-class": "btn-primary", "button-level": "Novice"},
                {"button-class": "btn-success", "button-level": "Intermediate"},
                {"button-class": "btn-warning", "button-level": "Advanced"},
                {"button-class": "btn-danger", "button-level": "Expert"},
            ]
        },
        target: '#quizzes-buttons'
    },
    {
        template: '#quizzes-modals-handlebars-template',
        context: {
            "quizModals": [
                {
                    "modal-id": "basic-quiz-modal",
                    "modal-title": "Data Engineering Daily Quiz - <b>Basic</b>",
                    "modal-content":
                        `
                        <ol>
                            <li>
                                <h5 class="quiz-question">What is an RDBMS?</h5>
                                <input type="radio" id="basic_q1a1" name="basic_q1" value=0>
                                <label for="basic_q1a1">Raw Data Block Management Store</label><br>
                                <input type="radio" id="basic_q1a2" name="basic_q1" value=0>
                                <label for="basic_q1a2">Rich Database Migration System</label><br>
                                <input type="radio" id="basic_q1a3" name="basic_q1" value=1>
                                <label for="basic_q1a3">Relational Database Management System</label><br>
                                <input type="radio" id="basic_q1a4" name="basic_q1" value=0>
                                <label for="basic_q1a4">Regular Data Block Matching System</label>
                            </li>
                            <li>
                                <h5 class="quiz-question">What is the most popular query language among Data Engineers?</h5>
                                <input type="radio" id="basic_q2a1" name="basic_q2" value=1>
                                <label for="basic_q2a1">SQL</label><br>
                                <input type="radio" id="basic_q2a2" name="basic_q2" value=0>
                                <label for="basic_q2a2">QUEL</label><br>
                                <input type="radio" id="basic_q2a3" name="basic_q2" value=0>
                                <label for="basic_q2a3">HiveQL</label><br>
                                <input type="radio" id="basic_q2a4" name="basic_q2" value=0>
                                <label for="basic_q2a4">LINQ</label>
                            </li>
                            <li>
                                <h5 class="quiz-question">Which of the following is NOT a common data format?</h5>
                                <input type="radio" id="basic_q3a1" name="basic_q3" value=0>
                                <label for="basic_q3a1">JSON</label><br>
                                <input type="radio" id="basic_q3a2" name="basic_q3" value=0>
                                <label for="basic_q3a2">CSV</label><br>
                                <input type="radio" id="basic_q3a3" name="basic_q3" value=0>
                                <label for="basic_q3a3">XML</label><br>
                                <input type="radio" id="basic_q3a4" name="basic_q3" value=1>
                                <label for="basic_q3a4">TCP</label>
                            </li>
                            <li>
                                <h5 class="quiz-question">Which Programming Language is NOT used for Data Engineering?</h5>
                                <input type="radio" id="basic_q4a1" name="basic_q4" value=0>
                                <label for="basic_q4a1">Java</label><br>
                                <input type="radio" id="basic_q4a2" name="basic_q4" value=0>
                                <label for="basic_q4a2">Python</label><br>
                                <input type="radio" id="basic_q4a3" name="basic_q4" value=1>
                                <label for="basic_q4a3">Dart</label><br>
                                <input type="radio" id="basic_q4a4" name="basic_q4" value=0>
                                <label for="basic_q4a4">R</label>
                            </li>
                            <li>
                                <h5 class="quiz-question">Many widely-used Data Engineering tools are Open Source</h5>
                                <input type="radio" id="basic_q5a1" name="basic_q5" value=0>
                                <label for="basic_q5a1">False</label><br>
                                <input type="radio" id="basic_q5a2" name="basic_q5" value=1>
                                <label for="basic_q5a2">True</label><br>
                            </li>
                        </ol>
                        `
                }
            ]
        },
        target: '#quizzes-modals'
    }
]

let templateQuizzes;
let templateScriptQuizzes;
let contextQuizzes;
let htmlQuizzes;

for (const templateObject of templateObjectsQuizzes
    ) {
    templateQuizzes = $(templateObject.template).html();
    templateScriptQuizzes = Handlebars.compile(templateQuizzes);
    contextQuizzes = templateObject.context
    htmlQuizzes = templateScriptQuizzes(contextQuizzes);
    $(templateObject.target).append(htmlQuizzes);
}