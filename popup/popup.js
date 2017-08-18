function getStrTime() {
    var timeNow = new Date();
    var strTime = timeNow.getHours() + " : " + timeNow.getMinutes() + " : " + timeNow.getSeconds();
    document.getElementById("time").innerHTML = strTime;
}

setInterval(getStrTime, 1000);