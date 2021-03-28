function getDateTime() {
    if ($('#current-date').length) {
        $("#current-date").html(new Date().toLocaleDateString());
    }
    if ($('#current-time').length) {
        $("#current-time").html(new Date().toLocaleTimeString());
    }
    setTimeout(getDateTime, 1000);
}

let templateObjects = [
    {
        template: '#navbar-buttons-handlebars-template',
        context: {
            "buttons": [
                {"text": "About", "button-link": "about.html"},
                {"text": "News", "button-link": "news.html"},
                {"text": "Guides & Tutorials", "button-link": "guides.html"},
                {"text": "Quizzes", "button-link": "quizzes.html"},
                {"text": "Forum", "button-link": "#"}
            ]
        },
        target: '#navbar-buttons'
    }
]

let template;
let templateScript;
let context;
let html;

for (const templateObject of templateObjects) {
    template = $(templateObject.template).html();
    templateScript = Handlebars.compile(template);
    context = templateObject.context
    html = templateScript(context);
    $(templateObject.target).append(html);
}

getDateTime();