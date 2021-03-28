function getDateTime() {
    if ($('#current-date').length) {
        $("#current-date").html(new Date().toLocaleDateString());
    }
    if ($('#current-time').length) {
        $("#current-time").html(new Date().toLocaleTimeString());
    }
    setTimeout(getDateTime, 1000);
}

getDateTime();