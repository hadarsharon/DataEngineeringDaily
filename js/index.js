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

$(window).on('load', function () {
    let slideBoxes;
    do {
        slideBoxes = $(".slidebox-homepage");
    }
    while (slideBoxes.length < 2)
    alternateSlideItems(slideBoxes);
});