var input = document.getElementById("input"),
    showPlace = document.getElementById("showPlace"),
    myInput = document.getElementsByClassName("myInput");
for (var i = 0; i < myInput.length; i++) {
    myInput[i].addEventListener("keypress", call);

}


function call(e) {
    show(e);
}

function show(e) {
    if (e.target.value.length <= 10) {
        var valueInput = e.target.value;
        showPlace.innerHTML = valueInput.toUpperCase();
        console.log("Ok");
    }else{
        console.log("To much");
    }
}
