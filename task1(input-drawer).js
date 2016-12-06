var input = document.getElementById("input"),
    showPlace = document.getElementById("showPlace");

myInput.addEventListener("keydown", call);

function call(e) {
    show(e);
}

function show(e) {
    showPlace.innerHTML = e.target.value;
    return showPlace;
}
