function getDateTime() {
    if ($('#current-date').length > 0) {
        $("#current-date").html(new Date().toLocaleDateString());
    }
    if ($('#current-time').length > 0) {
        $("#current-time").html(new Date().toLocaleTimeString());
    }
    setTimeout(getDateTime, 1000);
}

$(window).on('load', function () {
    getDateTime();
});