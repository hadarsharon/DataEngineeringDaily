function alternateSlideItems(slideBoxes) {
    let slideBoxChildren = [];
    let counters = []
    for (const slideBox of slideBoxes) {
        slideBoxChildren.push(Array.from(slideBox.children).filter(element => element.nodeName.toLowerCase() !== "script"));
        counters.push(0);
    }
    slideBoxChildren.forEach(function (children, i) {
        children.forEach(function (child) {
            child.classList.remove('active');
        });
        children[counters[i]].classList.add('active');
    })
    setInterval(
        () => {
            slideBoxChildren.forEach(function (children, i) {
                children.forEach(function (child) {
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

let newsFeed = [
    "PyTorch 1.8 Released; Release Includes Distributed Training Updates and AMD ROCm Support",
    "Google Open-Sources AutoML Algorithm Model Search",
    "Facebook Open-Sources AI Model to Predict COVID-19 Patient Outcomes",
    "OpenAI Announces GPT-3 Model for Image Generation",
    "TensorFlow 2.4 Release Includes CUDA 11 Support and API Updates",
    "CNCF Approves Kubernetes Edge Computing Platform KubeEdge as Incubating Project"
];

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
                "Python 3.9 rolls out, new features revealed, summary & references inside!",
                "NumPy 1.20 Released with Runtime SIMD Support and Type Annotations",
                "<b>[Blog]</b> - How I built a robust, fully-automated data pipeline testing infrastructure using Airflow and Great Expectations",
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
                    "news-link": "",
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

let slideBoxes;
do {
    slideBoxes = $(".slidebox-homepage");
}
while (slideBoxes.length < 2)
alternateSlideItems(slideBoxes);