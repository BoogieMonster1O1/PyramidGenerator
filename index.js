const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

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
    copyToClipboard(document.getElementById("outputp").innerHTML);
}
