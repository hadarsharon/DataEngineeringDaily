function alternateSlideItems(slideBoxes) {
    // This function takes care of the automatic "carousel"/"slideshow" behaviour of both news and events slideboxes
    let slideBoxChildren = [];
    // Each section probably different number of elements, so keep track of them with separate counters
    let counters = []
    for (const slideBox of slideBoxes) {
        /*
        Since I'm using Handlebars.js, and it is a child of the slideshow div,
        I must filter out the <script> element so that it's not part of the alternating slideshow
        */
        slideBoxChildren.push(Array.from(slideBox.children).filter(element => element.nodeName.toLowerCase() !== "script"));
        counters.push(0);
    }
    // For each slidebox, activate the first slide item ("child"), after having deactivated all the rest
    slideBoxChildren.forEach(function (children, i) {
        children.forEach(function (child) {
            child.classList.remove('active');
        });
        children[counters[i]].classList.add('active');
    })
    // This part moves the slideshow forward in a 6 second interval loop
    setInterval(
        () => {
            slideBoxChildren.forEach(function (children, i) {
                children.forEach(function (child) {
                    child.classList.remove('active');
                });
                // If we reached the end - start from the beginning (0)
                counters[i] = counters[i] === (children.length - 1) ? 0 : counters[i] + 1
                children[counters[i]].classList.add('active');
            })
        }, 6000
    );
}

function scrollSlide(section, direction) {
    /*
    This function takes care of the manual "carousel"/"slideshow" slide of both news and events slideboxes
    (manual sliding by using the arrows)
     */
    let slides;
    let toActivate;
    let toDeactivate;
    if (section.toLowerCase() === 'news') {
        slides = $('#slidebox-news');
    } else if (section.toLowerCase() === 'events') {
        slides = $('#slidebox-events');
    }
    if (!slides) { // if invalid section passed from HTML - ignore
        return;
    }
    // Find the active element first and deactivate it, before activating the next/previous element
    toDeactivate = slides.find('.active');
    Array.from(toDeactivate).forEach(function (element) {
        element.classList.remove('active')
    });
    // Determine whether or not next/previous element needs to be activated
    switch (direction.toLowerCase()) {
        case 'right':
            // If we reached the end - activate first element
            toActivate = toDeactivate.index() < (slides.children().length - 1) ? (toDeactivate.index() + 1) : 0;
            slides.children()[toActivate].classList.add('active');
            break;
        case 'left':
            // If we reached the beginning - activate last element
            toActivate = toDeactivate.index() > 0 ? (toDeactivate.index() - 1) : (slides.children().length - 1);
            slides.children()[toActivate].classList.add('active');
            break;
        default:
            // If invalid direction was passed - revert the deactivation made earlier and do nothing else
            toDeactivate[0].classList.add('active');
    }
}

// Elements in the newsFeed array appear in the "RSS Feed" marquee running under the navigation bar
let newsFeed = [
    "PyTorch 1.8 Released; Release Includes Distributed Training Updates and AMD ROCm Support",
    "Google Open-Sources AutoML Algorithm Model Search",
    "Facebook Open-Sources AI Model to Predict COVID-19 Patient Outcomes",
    "OpenAI Announces GPT-3 Model for Image Generation",
    "TensorFlow 2.4 Release Includes CUDA 11 Support and API Updates",
    "CNCF Approves Kubernetes Edge Computing Platform KubeEdge as Incubating Project"
];


// Handlebars templates to be rendered with content
let templateObjectsIndex = [
    {
        template: '#rss-feed-handlebars-template',
        context: {
            "newsFeed": newsFeed.join('&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;')
        },
        target: '#rss-feed-content'
    },
    {
        template: '#top-news-handlebars-template',
        context: {
            "news": [
                {
                    "news-text": "Python 3.9 rolls out, new features revealed, summary & references inside!",
                    "news-link": "news.html#python-button"
                },
                {
                    "news-text": "NumPy 1.20 Released with Runtime SIMD Support and Type Annotations",
                    "news-link": "news.html#numpy-button"
                },
                {
                    "news-text": "<b>[Blog]</b> - How I built a robust, fully-automated data pipeline testing " +
                        "infrastructure using Airflow and Great Expectations",
                    "news-onclick": "document.getElementById('login').style.display='block'"
                },
            ]
        },
        target: '#top-news-list'
    },
    {
        template: '#top-discussions-handlebars-template',
        context: {
            "discussions": [
                "<b>[Apache Spark]</b> - When to use RDDs vs. DataFrames vs. DataSets",
                "<b>[Python]</b> - What are the advantages of asyncio over multiprocessing/multithreading?",
                "<b>[Databases - PostgreSQL]</b> - stored procedure vs. external ORM - which is the better choice?",
            ]
        },
        target: '#top-discussions-list'
    },
    {
        template: '#slidebox-news-handlebars-template',
        context: {
            "news": [
                {
                    "header": "Apache Airflow <b>2.0</b> is finally here!",
                    "text": "New Operators, a fresh UI, better integrations and many more exciting features introduced...",
                    "news-link": "apache-airflow-news-button",
                    "image": "airflow-2.jpg"
                },
                {
                    "header": "Julia has a new <b><i>Pkg</i></b> Manager",
                    "text": "Meet <b>Pkg</b> - a complete rewrite of Julia's old package manager, released together with Julia v1.0",
                    "news-link": "julia-pkg-news-button",
                    "image": "julia-pkg-manager-news.png"
                },
                {
                    "header": "The state of Hadoop going into 2021",
                    "text": "With MapReduce all but diminished, is the curtain closing on Hadoop's relevance in the Big Data world?",
                    "news-link": "hadoop-button",
                    "image": "hadoop-curtain-news.jpg"
                },
                {
                    "header": "A Sneak Peek into Apache Spark <b>3.0</b>",
                    "text": "After months of anticipation: Did Spark finally make the jump from <i>Great</i> to <b><i>Perfect</i></b>?",
                    "news-link": "",
                    "image": "apache-spark-3.png"
                },
            ]
        },
        target: '#slidebox-news'
    },
    {
        template: '#videos-handlebars-template',
        context: {
            "videosRows": [
                {
                    "videos": [
                        "https://www.youtube.com/embed/IAF8DjrQSSk",
                        "https://www.youtube.com/embed/_Rnrx2lo9cw"
                    ]
                },
                {
                    "videos": [
                        "https://www.youtube.com/embed/YRvejW9FSJ4",
                        "https://www.youtube.com/embed/gJ85ixGCe8M"
                    ]
                }
            ]
        },
        target: '#videos'
    },
    {
        template: '#slidebox-events-handlebars-template',
        context: {
            "events": [
                {
                    "event-link": "https://fosdem.org/2021/",
                    "image": "FOSDEM.png"
                },
                {
                    "event-link": "https://icde2021.gr/",
                    "image": "ICDE.png"
                },
                {
                    "event-link": "https://juliacon.org/2021/",
                    "image": "JuliaCon.png"
                },
                {
                    "event-link": "https://events.linuxfoundation.org/open-source-summit-europe/",
                    "image": "OSS.JPG"
                },
            ]
        },
        target: '#slidebox-events'
    }
];

// Render all Handlebars templates with respective content
let templateIndex;
let templateScriptIndex;
let contextIndex;
let htmlIndex;

for (const templateObject of templateObjectsIndex) {
    templateIndex = $(templateObject.template).html();
    templateScriptIndex = Handlebars.compile(templateIndex);
    contextIndex = templateObject.context
    htmlIndex = templateScriptIndex(contextIndex);
    $(templateObject.target).append(htmlIndex);
}

/*
Activate automatic sliding/carousel behaviour of slideshows (events, news)
as soon as the page loads and the script is executed
 */
let slideBoxes;
do {
    slideBoxes = $(".slidebox-homepage");
}
while (slideBoxes.length < 2)
alternateSlideItems(slideBoxes);