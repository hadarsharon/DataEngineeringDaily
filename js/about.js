function sendMessage() {
    // This function simulates sending a message via the "Contact Us" form at the bottom of the page
    let elements = [
        $('#first-name'),
        $('#last-name'),
        $('#email'),
        $('#subject-title'),
        $('#message-content')
    ];
    for (const element of elements) {
        // Verify all boxes are filled i.e. non-empty, if even one is empty - alert message and don't send until filled
        if (!element.val().trim().length) {
            alert(element.attr('id') + " field must not be empty.");
            return;
        }
    }
    // If we got here it means all fields are filled and message can be sent - inform user message was sent.
    alert('Thank you for contacting us! Your message has been sent\nPlease note that, ' +
        'while our response time is normally around 24 to 72 hours, it may be exceeded - We apologize in advance.');
}