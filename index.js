var d = new Date();
window.onload = function() {
    updateClock();
}

function updateClock() {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    h = n.getHours();
    min = n.getMinutes();
    min = "0" + min;
    sec = n.getSeconds();
    sec = "0" + sec;
    document.getElementById("Date").innerHTML = m + "/" + d + "/" + y + "  " + h + ":" + min.substr(min.length-2,2) + ":" + sec.substr(sec.length-2,2);
    setTimeout(updateClock, 1000);
}
