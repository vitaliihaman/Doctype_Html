var nowDate = new Date();
var today = nowDate.getDate(),
    currentMonth = nowDate.getMonth(),
    currentYear = nowDate.getFullYear(),
    temp = new Date(currentYear, currentMonth, 0),
    lastDay = temp.getDate(),
    timeDiv = document.getElementById("time");

/*for (var i = 1; i < 30; i++) {
    nowDate.setDate(i);
    console.log(nowDate.getDate());
}*/

function createTable() {
    for (var i = 1; i < 30; i++) {
        nowDate.setDate(i);
        var td = document.createElement("td");
        td.innerHTML = nowDate.getDate();
    }
}


function timeFn() {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    if(hours < 10) {
        hours = "0" + date.getHours();
    }
    if(minutes < 10){
        minutes = "0" + date.getMinutes();
    }
    if(seconds < 10){
        seconds = "0" + date.getSeconds();
    }
    time = hours + ":" + minutes + ":" + seconds;
    return showYMT(time);
}

function showYMT(time) {
    var p  = document.createElement("p");
    timeDiv.innerHTML ="Time: " + time;
   // timeDiv.appendChild(p);
}

var timer = setInterval(timeFn, 1000);