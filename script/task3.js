
var button = document.querySelector("button");
    button.addEventListener("click", generetePassword);

function show(password) {
    var out = document.querySelector("output");
        out.innerHTML = password;
}

function generetePassword() {

    var password = [];
    var symbols = ["q","w","e","r","t","y","u","i","o","p","a","s",
                   "d","f","g","h","j","k","l","1","2","3","4","5"];
    for (var i = 0; i < 8; i++) {
        var letter = symbols[getRandom(0,symbols.length)];
        password.push(letter);
    }

return show(password.join(""));
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

