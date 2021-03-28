function alternateSlideItems(slideBoxes) {
    let slideBoxChildren = [];
    let counters = []
    for (const slideBox of slideBoxes) {
        slideBoxChildren.push(slideBox.children);
        counters.push(0);
    }
    slideBoxChildren.forEach(function (children, i) {
        Array.from(children).forEach(function (child) {
            child.classList.remove('active');
        });
        children[counters[i]].classList.add('active');
    })
    setInterval(
        () => {
            slideBoxChildren.forEach(function (children, i) {
                Array.from(children).forEach(function (child) {
                    child.classList.remove('active');
                });
                counters[i] = counters[i] === (children.length - 1) ? 0 : counters[i] + 1
                children[counters[i]].classList.add('active');
            })
        }, 6000
    );
}

function scrollSlide(section, direction) {
    let slides;
    let toActivate;
    let toDeactivate;
    if (section.toLowerCase() === 'news') {
        slides = $('#slidebox-news');
    } else if (section.toLowerCase() === 'events') {
        slides = $('#slidebox-events');
    }
    if (!slides) {
        return;
    }
    toDeactivate = slides.find('.active');
    Array.from(toDeactivate).forEach(function (element) {
        element.classList.remove('active')
    });

    switch (direction.toLowerCase()) {
        case 'right':
            toActivate = toDeactivate.index() < (slides.children().length - 1) ? (toDeactivate.index() + 1) : 0;
            slides.children()[toActivate].classList.add('active');
            break;
        case 'left':
            toActivate = toDeactivate.index() > 0 ? (toDeactivate.index() - 1) : (slides.children().length - 1);
            slides.children()[toActivate].classList.add('active');
            break;
        default:
            toDeactivate[0].classList.add('active');
    }
}

let templateObjects = [
    {
        template: '#navbar-buttons-handlebars-template',
        context: {
            "buttons": [
                "About",
                "News",
                "Guides & Tutorials",
                "Quizzes"
            ]
        },
        target: '#navbar-buttons'
    },
    {
        template: '#top-news-handlebars-template',
        context: {
            "news": [
                "Python 3.9 rolls out, new features revealed, summary & references inside!",
                "NumPy 1.20 Released with Runtime SIMD Support and Type Annotations",
                "<b>[Blog]</b> - How I built a robust, fully-automated data pipeline testing infrastructure using Airflow and Great Expectations",
            ]
        },
        target: '#top-news-list'
    },
];

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

let slideBoxes;
do {
    slideBoxes = $(".slidebox-homepage");
}
while (slideBoxes.length < 2)
alternateSlideItems(slideBoxes);