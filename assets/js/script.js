function convToText() {
    var binary = document.getElementById("text").value;
    const conv = binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    document.getElementById("result").innerHTML = conv;
}
function convToBinary() {
    var text = document.getElementById("text").value;
    var output = document.getElementById("result");
    output.innerHTML = "";
    for (var i = 0; i < text.length; i++){
            output.innerHTML += text[i].charCodeAt(0).toString(2) + " ";
    }
}