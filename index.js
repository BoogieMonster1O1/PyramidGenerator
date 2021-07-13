function pyramidify() {
    let input = document.getElementById("inputtext").value;
    if (input.length == 0) {
        setTextAreaValue("");
        return;
    }
    var output = "";
    for (let i = 1; i < input.length; i++) {
        output += input.substring(0, i);
        output += "\n";
    }
    for (let i = input.length; i > 0; i--) {
        output += input.substring(0, i);
        if (i > 1) {
            output += "\n";
        }
    }
    setTextAreaValue(output);
}

function setTextAreaValue(value) {
    document.getElementById("outputp").innerHTML = value;
}

function copyOutput() {
    navigator.clipboard.writeText(document.getElementById("outputp").value);
}
