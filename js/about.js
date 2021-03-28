function sendMessage() {
    let elements = [
        $('#first-name'),
        $('#last-name'),
        $('#email'),
        $('#subject-title'),
        $('#message-content')
    ];
    for (const element of elements) {
        if (!element.val().trim().length) {
            alert(element.attr('id') + " field must not be empty.");
            return;
        }
    }
    alert('Thank you for contacting us! Your message has been sent\nPlease note that, ' +
        'while our response time is normally around 24 to 72 hours, it may be exceeded - We apologize in advance.');
}