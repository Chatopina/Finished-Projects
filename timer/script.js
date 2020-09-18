function showtime() {
    let date = new Date();
    let hours = date.getHours(); //0-23
    let minutes = date.getMinutes(); //0-59
    let seconds = date.getSeconds(); //0-59
    //getting time data

    let formatHours = convertFormat(hours);
    // starts in hours
    //convert of AM to PM

    hours = checkTime(hours);
    //converts time to am or pm

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    // starts the numbers at 0

    document.getElementById('Clock').innerHTML = hours + ':' + minutes + ':' + seconds + formatHours;
    //connects js data to the Html so it can be displayed


    // const list = $; { hours }
    //$; { minutes }
    //$; { seconds }
    //$; { formatHours };

    /// const list = '${hours} : ${minutes} : ${seconds} : ${formatHours}'
}

function convertFormat(time) {
    let format = 'AM'
    if (time >= 12) {
        format = 'PM';
    }
    return format;
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;

    }
    // subtreacts 12 hours if the time hour is going to 13 *24 hours in a day*

    if (time === 0) {
        time = 12;
    }
    // 12 + 12 = 0;00;0
    //when 24 hours is up 12 i going to count to 1pm.....think of 12pm as 0
    return time;
}



function addZero(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
    // when the seconds/minutes count to 60 its gonna reset to 0 and since the number is 0 because 0 is less then 10 and also resets to 0
    //might not need the function but its to make sure the numbers start at 0 when reset
}
//display function

setInterval(showtime, 1000);
//The time which makes the clock count up22