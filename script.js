const countdown = () => {
    const countDate = new Date("jun 25, 2022 12:00:00").getTime();
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

}

setInterval(countdown, 1000);




var slider = document.getElementById("slider");

function switchIt() {
    var box = document.getElementById("check");

    if (box.checked) {
        console.log("isChecked")

        slider.style.backgroundImage = "url('../images/sun.svg')";
        slider.style.backgroundPosition = "10%";

        themeDark()


    } else {
        console.log("noChecked")

        slider.style.backgroundImage = "url('../images/moon.svg')";
        slider.style.backgroundPosition = "90%";
        themeLight()
    }
}


setInterval(switchIt, 500);


function themeDark() {
    var backGroundColor = document.getElementById("body");
    backGroundColor.style.backgroundColor = "var(--color-dark)";
    document.getElementById("countInfo").style.color = "white";
    var subText = document.getElementById("subscribe-text");
    subText.style.color = "white";
}


function themeLight() {
    var backGroundColor = document.getElementById("body");
    backGroundColor.style.backgroundColor = "white";
    var subText = document.getElementById("subscribe-text");
    subText.style.color = "white";
    document.getElementById("countInfo").style.color = "var(--color-gray-dark)";

    var subText = document.getElementById("subscribe-text");
    subText.style.color = "var(--color-gray-dark)";
}
