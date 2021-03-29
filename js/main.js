function getDateTime() {
    /*
    This function populates the date/time section at the right edge of the navigation bar at all pages
    It basically takes the current date and time and updates the respective HTML elements in 1 second intervals
     */
    if ($('#current-date').length) {
        $("#current-date").html(new Date().toLocaleDateString());
    }
    if ($('#current-time').length) {
        $("#current-time").html(new Date().toLocaleTimeString());
    }
    setTimeout(getDateTime, 1000);
}

// Handlebars templates to be rendered with content
let templateObjects = [
    {
        template: '#navbar-buttons-handlebars-template',
        context: {
            "buttons": [
                {"text": "About", "button-link": "about.html"},
                {"text": "News", "button-link": "news.html"},
                {"text": "Guides & Tutorials", "button-link": "guides.html"},
                {"text": "Quizzes", "button-link": "quizzes.html"},
                {
                    "text": "Forum",
                    "button-link": "#",
                    "button-onclick": "document.getElementById('login').style.display='block'"
                }
            ]
        },
        target: '#navbar-buttons'
    }
]

// Render all Handlebars templates with respective content
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

/*
Activate automatic date/time update as soon as the page loads and the script is executed
 */
getDateTime();