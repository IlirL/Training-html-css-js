var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime+2;
var partytime;
var evening = 18;

//Getting it to show the current time on the page
var showCurrentTime = function()
{
    //display the string on the webpage
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    console.log(hours);
    var minutes = currentTime.getMinutes();
    console.log(minutes);
    var seconds = currentTime.getSeconds();
    console.log(seconds);
    var meridian = "AM";

    //Set hours
    if(hours >= noon)
    {
        meridian = "PM";
    }

    if(hours > noon)
    {
        hours = hours - 12;
    }

    //Set minutes
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }

    //Set Secods
    if(seconds < 10)
    {
        seconds = "0" +seconds;
    }

    //put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + "" + meridian + "!";

    clock.innerText = clockTime;

};


var updateClock = function()
{
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('lolcatImage');

    if(time == partytime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }

    else if(time == wakeuptime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    
    }

    else if(time == lunchtime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

  showCurrentTime();

};
updateClock();

//getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


//Getting the party time button to work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if(partytime < 0)
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.background = "#0a8dab";

    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.background = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);


//Activates Wake-up selector

var wakeuptimeselector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeuptimeselector.value;
};

wakeuptimeselector.addEventListener("change", wakeUpEvent);

//Activates lunch selector
var lunchtimeselector = document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchtimeselector.value;
};

lunchtimeselector.addEventListener("change", lunchEvent);


//Activates Nap-Time selector

var naptimeselector = document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = naptimeselector.value;
};

naptimeselector.addEventListener("change", napEvent);

