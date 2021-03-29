function calculateScore(modalId) {
    // This function calculates the score based on the user's answers, once he/she clicks the submit button
    // First, get the respective quiz element (there are multiple quizzes)
    let quizList = $(modalId).find('#quiz-list');
    // Total number of points == number of questions == number of list items (each question is worth 1 point)
    let total = quizList.children().length;
    let answers;
    let points = 0;
    let labelText;
    for (const question of quizList.children()) {
        // For each question, get all available answers
        answers = question.getElementsByTagName('input')
        for (const answer of answers) {
            // Iterate over the answers and check their validity (values 0, 1 mean wrong and correct, respectively)
            if (parseInt(answer.value)) {
                /*
                Mark the correct answers with a little checkmark
                (also make sure it's not already added in case the user makes multiple clicks,
                otherwise we'll duplicated checkmarks)
                */
                labelText = $('label[for="' + answer.id + '"]')[0].innerHTML;
                if (!labelText.includes("✔")) {
                    $('label[for="' + answer.id + '"]')[0].innerHTML += "&#10004;"
                }
                // If the user checked the correct answer - award him/her a point
                if (answer.checked) {
                    points++;
                }
            } else {
                // The wrong answers are marked with an X icon only if the user checked them
                if (answer.checked) {
                    // Again, make sure the X icon is not already added to prevent duplicates
                    labelText = $('label[for="' + answer.id + '"]')[0].innerHTML;
                    if (!labelText.includes("❌")) {
                        $('label[for="' + answer.id + '"]')[0].innerHTML += "&#10060;"
                    }
                }
            }
        }
    }
    // Finally, add a little message displaying the obtained score
    $(modalId).find('#pointsScored').html("Your Score: <strong>" + points + "/" + total + "</strong>");
}

// Handlebars templates to be rendered with content
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
                        }
                    ]
                },
                {
                    "modal-id": "novice-quiz",
                    "modal-title": "Data Engineering Daily Quiz - <b>Novice</b>",
                    "questions": [
                        {
                            "question": "Select the SQL clause for setting an upper bound on the number of possible records to be returned from a query",
                            "answers": [
                                ["<code>STOP</code>"],
                                ["<code>UNTIL</code>"],
                                ["<code>BOUND</code>"],
                                ["<code>LIMIT</code>", true]
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
                                ["<code>ORDER BY DESC</code>", true],
                                ["<code>SORT BY DESC</code>"],
                                ["<code>DIRECT BY DESC</code>"],
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
                                ["<code>DISTINCT</code>"],
                                ["<code>PIVOT</code>", true],
                                ["<code>LIKE</code>"],
                                ["<code>PARTITION BY</code>"]
                            ]
                        }
                    ]
                },
                {
                    "modal-id": "intermediate-quiz",
                    "modal-title": "Data Engineering Daily Quiz - <b>Intermediate</b>",
                    "questions": [
                        {
                            "question": "Which of the following Databases is <strong><em>NOT</em></strong> Open Source?",
                            "answers": [
                                ["PostgreSQL"],
                                ["MariaDB"],
                                ["SQLite"],
                                ["SQL Server", true]
                            ]
                        },
                        {
                            "question": "R is usually faster than Python",
                            "answers": [
                                ["False", true],
                                ["True"]
                            ]
                        },
                        {
                            "question": "In Python, a tuple can be used as a dictionary key while a list can not.",
                            "answers": [
                                ["False"],
                                ["True", true],
                            ]
                        },
                        {
                            "question": "Which of the following databases is a key-value store?",
                            "answers": [
                                ["Cassandra"],
                                ["DynamoDB", true],
                                ["PostgreSQL"],
                                ["IBM DB2"]
                            ]
                        },
                        {
                            "question": "Let's assume tables <b>t1</b> and <b>t2</b> have <b>3</b> and <b>5</b> rows respectively." +
                                "<br>How many records will this query return:<br><code>SELECT * FROM t1 CROSS JOIN t2;</code>",
                            "answers": [
                                [8],
                                [15, true],
                                [125],
                                [243]
                            ]
                        }
                    ]
                },
                {
                    "modal-id": "advanced-quiz",
                    "modal-title": "Data Engineering Daily Quiz - <b>Advanced</b>",
                    "questions": [
                        {
                            "question": "Which of the following is <em><strong>NOT</strong></em> a part of REST API operations?",
                            "answers": [
                                ["<code>FETCH</code>", true],
                                ["<code>PATCH</code>"],
                                ["<code>OPTIONS</code>"],
                                ["<code>PUT</code>"]
                            ]
                        },
                        {
                            "question": "parquet (the file format) is:",
                            "answers": [
                                ["Compressed by default and columnar", true],
                                ["Compressed by default and row-based"],
                                ["Uncompressed by default and columnar"],
                                ["Uncompressed by default and row-based"]
                            ]
                        },
                        {
                            "question": "Avro (the file format) is:",
                            "answers": [
                                ["Compressed by default and columnar"],
                                ["Compressed by default and row-based"],
                                ["Uncompressed by default and columnar"],
                                ["Uncompressed by default and row-based", true]
                            ]
                        },
                        {
                            "question": "Stored Procedures written in scripting languages such as Perl or Python can import and make use of third party modules",
                            "answers": [
                                ["False"],
                                ["True", true]
                            ]
                        },
                        {
                            "question": "MapReduce is considered more efficient than Spark because it utilizes in-memory processing, while the latter relies heavily on disk I/O",
                            "answers": [
                                ["False", true],
                                ["True"],
                            ]
                        }
                    ]
                },
                {
                    "modal-id": "expert-quiz",
                    "modal-title": "Data Engineering Daily Quiz - <b>Expert</b>",
                    "questions": [
                        {
                            "question": "Consider the following Python function:<br>" +
                                "<code>def f(x: List):<br>&nbsp;&nbsp;&nbsp;&nbsp;return map(lambda y: y or 'INVALID', x)</code><br>" +
                                "What will it return? (type and value respectively)",
                            "answers": [
                                ["A Mapping between all the True values in the original list, x, and the string 'INVALID'"],
                                ["An Iterator constructed from the original list, x, with all True values replaces with 'INVALID'"],
                                ["An Iterator constructed from the original list, x, with all False values replaces with 'INVALID'", true],
                                ["A new List constructed from the original list, x, with only 'INVALID' values"]
                            ]
                        },
                        {
                            "question": "In Amazon S3, each object must have:",
                            "answers": [
                                ["A parent folder and a suffix/file extension"],
                                ["A parent folder, but the suffix/file extension is meaningless"],
                                ["A suffix/file extension, but the parent folder is meaningless"],
                                ["Neither a suffix/file extension, nor a parent folder is needed for an object to be valid.", true]
                            ]
                        },
                        {
                            "question": "In Amazon Redshift, a <code>DISTKEY</code> is:",
                            "answers": [
                                ["The column by which the table is sorted within each node"],
                                ["The column by which the values are distributed to each node within the cluster", true],
                                ["The column that must be unique and acts as a target for JOIN operations"],
                                ["The column that defines a key which identifies the table in the schema"]
                            ]
                        },
                        {
                            "question": "In Scala, a case class is:",
                            "answers": [
                                ["Equivalent to a switch statement in other languages such as JavaScript and C++"],
                                ["A Special type of classes that are initiated with a boolean function that covers multiple conditions/cases"],
                                ["A Special type of classes that act as simple data containers while reducing boilerplate code", true],
                                ["An abstract class which all conditional objects in the language must inherit."]
                            ]
                        },
                        {
                            "question": "Which of the following compression methods is considered the most efficient in terms of file size?",
                            "answers": [
                                ["gzip"],
                                ["bzip2"],
                                ["xz", true],
                                ["zlib"]
                            ]
                        }
                    ]
                }
            ]
        },
        target: '#quizzes-modals'
    }
]

// Render all Handlebars templates with respective content
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