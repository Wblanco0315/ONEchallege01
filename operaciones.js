function getArray() {
    let input = document.querySelector("#input");
    let word = input.value;
    let array = word.split("");
    return array;
};

function asciiConversion(array, n) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        temp = array[i].charCodeAt();
        array[i] = temp + n;
    }
    return array
};

function charConversion(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        temp = array[i];
        array[i] = String.fromCharCode(temp);
    }
    return array
};

function arrayToWord(array) {
    let word = ""
    for (let i = 0; i < array.length; i++) {
        word += array[i];
    }
    return word
};

function conversion(action) {
    let n = 3;
    if (!action) { n = n * (-1) }
    let array = getArray();
    array = asciiConversion(array, n);
    array = charConversion(array);
    word = arrayToWord(array);
    return word;
}

function show(word) {
    document.getElementById("msg").innerHTML = "Resultado:"
    document.getElementById("word").innerHTML = word;
}

function copy() {
    let content = document.getElementById('word');
    content.select();
    document.execCommand('copy');
}

function encriptar() {
    let action = true;
    word = conversion(action)
    show(word);
};

function desencriptar() {
    let action = false;
    word = conversion(action);
    show(word);
};