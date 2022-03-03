const countdown = () => {
    const countDate = new Date("mar 25, 2022 12:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("day_time").innerHTML = textDay;
    document.getElementById("hour_time").innerHTML = textHour;
    document.getElementById("minute_time").innerHTML = textMinute;
    document.getElementById("second_time").innerHTML = textSecond;

    console.log(textDay);
    console.log(textHour);
    console.log(textMinute);
    console.log(textSecond);
}

setInterval(countdown, 1000);