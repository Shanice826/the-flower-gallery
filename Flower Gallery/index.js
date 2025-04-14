let animatedText = document.getElementById('heading');
let colorIndex = 0;

function newColor(){
    let colors = ['#624E88', '#8967B3', '#CB80AB', '#E6D9A2' ];
    animatedText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(newColor, 1000);


function showCurrentTime (){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hour = (hour < 10 ) ? "0" + hour : hour;
    minutes = (minutes < 10) ?  "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let time = hour + ":" + minutes + ":" + seconds;
    document.querySelector('.clock').innerText = time;
    document.querySelector('.clock').textContent = time;
    setTimeout(showCurrentTime, 1000);
}
showCurrentTime();