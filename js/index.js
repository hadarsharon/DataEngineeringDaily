function alternateNewsItems() {
    let newsBox = $("#newsbox-homepage");
    if (newsBox.length) {
        let newsItems = newsBox.children()
        if (newsItems.length) {
            let i = 0;
            newsItems[i].classList.add('active');
            setInterval(
                () => {
                    newsItems[i].classList.remove('active');
                    i = i === (newsItems.length - 1) ? 0 : i + 1
                    newsItems[i].classList.add('active');
                }, 6000
            );
        } else {
            setTimeout(alternateNewsItems, 500);
        }
    } else {
        setTimeout(alternateNewsItems, 500);
    }
}

$(window).on('load', function () {
    alternateNewsItems();
});