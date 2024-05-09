function increaseTextSize() {
    document.getElementById("textInput").style.fontSize = "24pt";
}
function applyStyles() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");
    var boringRadio = document.getElementById("boringRadio");

    if (fancyRadio.checked) {
        // Apply FancyShmancy styles
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        // Apply BoringBetty styles
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black"; // Reset color to default
        textInput.style.textDecoration = "none"; // Reset text decoration
    }
}
function toUpperCaseAndMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    // Uppercase text
    textInput.value = text.toUpperCase();
    // Add suffix "-Moo" to the last word of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        words[words.length - 1] += "-Moo"; // Add "-Moo" to the last word
        sentences[i] = words.join(" ");
    }
    textInput.value = sentences.join(". ");
}