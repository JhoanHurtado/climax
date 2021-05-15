var city = 'bogota';
var API_KEY = "a891e645e9e2390ccf7a1d377acc12f7";
var current_main = document.getElementById('curret-main');
var curret_grades = document.getElementById('curret_grades');
var current_time_icon = document.getElementById('current_time_icon');

var Fmain = document.getElementById('Pmain');
var Fgrades = document.getElementById('Pgrades');
var Pdescription = document.getElementsByClassName('Pdescription');
var paris_time_icon = document.getElementById('paris_time_icon');


var Lmain = document.getElementById('Lmain');
var Lgrades = document.getElementById('Lgrades');
var Ldescription = document.getElementsByClassName('Ldescription');
var lyon_time_icon = document.getElementById('lyon_time_icon');


var r = new XMLHttpRequest();

r.open("GET", "http://api.openweathermap.org/data/2.5/weather?units=Celsius&q=" + city + "&appid=" + API_KEY, true);
r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    var clima = JSON.parse(r.responseText);
    current_main.innerHTML = clima['weather'][0].main;
    curret_grades.innerHTML = Math.round(clima['main'].temp) + "°C";
    current_time_icon.setAttribute("src", "http://openweathermap.org/img/wn/" + clima['weather'][0].icon + ".png");

};
r.send();

r.open("GET", "http://api.openweathermap.org/data/2.5/weather?units=Celsius&q=Francia&appid=" + API_KEY, true);
r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    var clima = JSON.parse(r.responseText);
    Fmain.innerHTML = clima['weather'][0].main;
    Pdescription[0].innerHTML = clima['weather'][0].description;
    Pdescription[1].innerHTML = clima['weather'][0].description;
    Fgrades.innerHTML = Math.round(clima['main'].temp) + "°C";
    paris_time_icon.setAttribute("src", "http://openweathermap.org/img/wn/" + clima['weather'][0].icon + ".png");
};
r.send();

r.open("GET", "http://api.openweathermap.org/data/2.5/weather?units=Celsius&q=Lyon&appid=" + API_KEY, true);
r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    var clima = JSON.parse(r.responseText);
    Lmain.innerHTML = clima['weather'][0].main;
    Ldescription[0].innerHTML = clima['weather'][0].description;
    Ldescription[1].innerHTML = clima['weather'][0].description;
    Lgrades.innerHTML = Math.round(clima['main'].temp) + "°C";
    lyon_time_icon.setAttribute("src", "http://openweathermap.org/img/wn/" + clima['weather'][0].icon + ".png");
};


r.send();