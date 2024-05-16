function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function getStyleSheet(file_name) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (sheet.href.includes(file_name)) {
            return sheet;
        }
    }
}

function darkMode(turnOn) {
    let classlist = document.getElementById("body").classList;
    let syntax_light = getStyleSheet("syntax_light")
    let syntax_dark = getStyleSheet("syntax_dark")

    syntax_light.disabled = turnOn ? true : false
    syntax_dark.disabled = turnOn ? false : true
    if (turnOn) {
        localStorage.setItem('dark', true);
        classlist.add("dark");
        show("sun");
        hide("moon");
    } else {
        localStorage.setItem('dark', false);
        classlist.remove("dark");
        show("moon");
        hide("sun");
    }
}

function setDarkMode() {
    dark = localStorage.getItem('dark');
    darkMode(dark == 'true' || dark == null);
};
setDarkMode();