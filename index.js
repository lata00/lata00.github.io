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
    sec = n.getSeconds();
    document.getElementById("Date").innerHTML = m + "/" + d + "/" + y + "  " + h + ":" + min + ":" + sec;
    setTimeout(updateClock, 1000);
}
