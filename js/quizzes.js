function calculateScore(quiz) {
    let points = 5;
    let total = 10;
    $('#pointsScored').html("Your Score: <strong>" + points + "/" + total + "</strong>");
}

let templateObjectsQuizzes = [
    {
        template: '#quizzes-handlebars-template',
        context: {
            "quizButtons": [
                {"button-class": "btn-info", "button-level": "Basic", "quiz-modal": "basic-quiz"},
                {"button-class": "btn-primary", "button-level": "Novice", "quiz-modal": "novice-quiz"},
                {"button-class": "btn-success", "button-level": "Intermediate", "quiz-modal": "intermediate-quiz"},
                {"button-class": "btn-warning", "button-level": "Advanced", "quiz-modal": "advanced-quiz"},
                {"button-class": "btn-danger", "button-level": "Expert", "quiz-modal": "expert-quiz"},
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
                },
                {
                    "modal-id": "novice-quiz",
                    "modal-title": "Data Engineering Daily Quiz - <b>Novice</b>",
                    "questions": [
                        {
                            "question": "Select the SQL clause for setting an upper bound on the number of possible records to be returned from a query",
                            "answers": [
                                ["STOP"],
                                ["UNTIL"],
                                ["BOUND"],
                                ["LIMIT", true]
                            ]
                        },
                        {
                            "question": "Git is a tool used primarily for Version Management / Version Control",
                            "answers": [
                                ["False"],
                                ["True", true]
                            ]
                        },
                        {
                            "question": "What SQL clause is used for ordering query results in a descending order?",
                            "answers": [
                                ["ORDER BY DESC", true],
                                ["SORT BY DESC"],
                                ["DIRECT BY DESC"],
                                ["There is no such clause, because they are always ordered descending by default."]
                            ]
                        },
                        {
                            "question": "In Python, whitespace is used to denote blocks, but only cosmetically (i.e. does not affect code execution)",
                            "answers": [
                                ["False", true],
                                ["True"]
                            ]
                        },
                        {
                            "question": "Select the clause that is <strong><em>NOT</em></strong> a part of ANSI SQL standard",
                            "answers": [
                                ["DISTINCT"],
                                ["PIVOT", true],
                                ["LIKE"],
                                ["PARTITION BY"]
                            ]
                        },
                    ]
                },
                {
                    "modal-id": "intermediate-quiz",
                    "modal-title": "Data Engineering Daily Quiz - <b>Intermediate</b>",
                    "questions": [
                        {
                            "question": "Select the SQL clause for setting an upper bound on the number of possible records to be returned from a query",
                            "answers": [
                                ["STOP"],
                                ["UNTIL"],
                                ["BOUND"],
                                ["LIMIT", true]
                            ]
                        },
                        {
                            "question": "Git is a tool used primarily for Version Management / Version Control",
                            "answers": [
                                ["False"],
                                ["True", true]
                            ]
                        },
                        {
                            "question": "What SQL clause is used for ordering query results in a descending order?",
                            "answers": [
                                ["ORDER BY DESC", true],
                                ["SORT BY DESC"],
                                ["DIRECT BY DESC"],
                                ["There is no such clause, because they are always ordered descending by default."]
                            ]
                        },
                        {
                            "question": "In Python, whitespace is used to denote blocks, but only cosmetically (i.e. does not affect code execution)",
                            "answers": [
                                ["False", true],
                                ["True"]
                            ]
                        },
                        {
                            "question": "Select the clause that is <strong><em>NOT</em></strong> a part of ANSI SQL standard",
                            "answers": [
                                ["DISTINCT"],
                                ["PIVOT", true],
                                ["LIKE"],
                                ["PARTITION BY"]
                            ]
                        },
                    ]
                },
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