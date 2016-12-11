var firstLine = document.getElementById("enterPlace"),
    secondLine = document.getElementById("part"),
    thirdLine = document.getElementById("change");

var searchButton = document.getElementById("search"),
    replaceButton = document.getElementById("replace");
searchButton.addEventListener("click", searchFn);
replaceButton.addEventListener("click", replaceFn);

function searchFn() {
    var s = firstLine.value.indexOf(secondLine.value, secondLine.length);
    if (s != -1) {
        console.log("Такая подстрока есть");
    } else {
        console.log("Такой подстроки нет");
    }
}

function replaceFn() {
var subWord = thirdLine.value,
    text = firstLine.value,
    newStr,
    position = 0;
    while(true){
        var foundPosition = firstLine.indexOf(subWord, position);
        if(foundPosition == -1) break;
        newStr = text.substring(0, foundPosition);

    }
console.log(newStr);
}

