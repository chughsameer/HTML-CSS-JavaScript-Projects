let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let displaytime = document.getElementById('display-time');
let timer = null;

stopwatch = () => {
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;


    displaytime.innerHTML = h + ':' + m + ':' + s + ':' + ms;
}

watchStart = () => {
    if (timer == null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
}

watchStop = () => {
    clearInterval(timer);
}
watchReset = () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0, 0];
    displaytime.innerHTML = "00:00:00:00"
}