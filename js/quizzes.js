let templateObjectsQuizzes = [
    {
        template: '#quizzes-handlebars-template',
        context: {
            "quizButtons": [
                {"button-class": "btn-info", "button-level": "Basic", "quiz-modal": "basic-quiz"},
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
                    "modal-id": "basic-quiz",
                    "modal-title": "Data Engineering Daily Quiz - <b>Basic</b>",
                    "questions": [
                        {
                            "question": "What is an RDBMS?",
                            "answers": [
                                ["Raw Data Block Management Store"],
                                ["Rich Database Migration System"],
                                ["Relational Database Management System", true],
                                ["Regular Data Block Matching System"]
                            ]
                        },
                        {
                            "question": "What is the most popular query language among Data Engineers?",
                            "answers": [
                                ["SQL", true],
                                ["QUEL"],
                                ["HiveQL"],
                                ["LINQ"]
                            ]
                        },
                        {
                            "question": "Which of the following is <strong><em>NOT</em></strong> a common data format?",
                            "answers": [
                                ["JSON"],
                                ["CSV"],
                                ["XML"],
                                ["TCP", true]
                            ]
                        },
                        {
                            "question": "Which Programming Language is <strong><em>NOT</em></strong> used for Data Engineering?",
                            "answers": [
                                ["Java"],
                                ["Python"],
                                ["Dart", true],
                                ["R"]
                            ]
                        },
                        {
                            "question": "Many widely-used Data Engineering tools are Open Source",
                            "answers": [
                                ["False"],
                                ["True", true]
                            ]
                        },
                    ]
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