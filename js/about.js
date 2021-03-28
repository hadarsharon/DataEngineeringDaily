let templateObjectsAbout = []

let templateAbout;
let templateScriptAbout;
let contextAbout;
let htmlAbout;

for (const templateObject of templateObjectsAbout) {
    templateAbout = $(templateObject.template).html();
    templateScriptAbout = Handlebars.compile(templateAbout);
    contextAbout = templateObject.context
    htmlAbout = templateScriptAbout(context);
    $(templateObject.target).append(htmlAbout);
}