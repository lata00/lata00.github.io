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

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('h1, h2, p, a, footer').forEach(element => {
    element.classList.toggle('dark-mode');
  });
}

// Add an event listener to toggle dark mode on button click
document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.createElement('button');
  darkModeButton.innerText = 'Toggle Dark Mode';
  darkModeButton.onclick = toggleDarkMode;
  const footer = document.querySelector('footer');
  footer.appendChild(darkModeButton);
});

