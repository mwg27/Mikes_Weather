//My Java Script
function loadCity(){
    var c = document.getElementById("citySelect");
    c.selectedIndex = 0;
    changeCity();
}


function changeCity() {
    var c = document.getElementById("citySelect");
    var code = c.value;
    var text = getCitybyCode(code);
    var t = document.getElementById("citydiv");
    t.innerHTML = text;
    //get the weather data
    getCurrentWeather(code);
    getForcast(code);

}

function getCurrentWeather(code){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //set the month name 
            var jsn = JSON.parse(this.responseText);
            var im = document.getElementById("nowimg");
            var newsrc = "img/" + jsn.weather[0].icon + ".png";
            im.src = newsrc;
            var wt = document.getElementById("nowtmp");
            var t = jsn.main.temp + "&#176; " + jsn.weather[0].description;
            wt.innerHTML = t;
            var hm = document.getElementById("hnowDiv");
            var ht = "Humidity " + jsn.main.humidity + "%";
            hm.innerHTML = ht;
            //var hlm = document.getElementById("hlnowDiv");
            //var hlt = "High: " + jsn.main.temp_max + "&#176;  Low: " + jsn.main.temp_min + "&#176";
            //hlm.innerHTML = hlt;
        }
    };
    var url = "http://api.openweathermap.org/data/2.5/weather?id=" + code + "&APPID=2cfe28c98f42cf722d1bb456c2d8c42a&units=imperial"
    request.open('GET', url);
    request.send();  
}

function getForcast(code){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //set the month name 
            var jsn = JSON.parse(this.responseText);
            //row 1
            var d = new Date(0);
            d.setUTCSeconds(jsn.list[0].dt);
            var tm = document.getElementById("r1day");
            tm.innerHTML = formatDate(d);

            var im = document.getElementById("img1");
            var newsrc = "img/" + jsn.list[0].weather[0].icon + ".png";
            im.src = newsrc;
            var wt = document.getElementById("r1w");
            var t = jsn.list[0].weather[0].description + " " + jsn.list[0].main.temp + "&#176;";
            wt.innerHTML = t;
            //row 2
            d = new Date(0);
            d.setUTCSeconds(jsn.list[1].dt);
            tm = document.getElementById("r2day");
            tm.innerHTML = formatDate(d);

            im = document.getElementById("img2");
            newsrc = "img/" + jsn.list[1].weather[0].icon + ".png";
            im.src = newsrc;
            wt = document.getElementById("r2w");
            t = jsn.list[1].weather[0].description + " " + jsn.list[1].main.temp + "&#176;";
            wt.innerHTML = t;
            //row 3
            d = new Date(0);
            d.setUTCSeconds(jsn.list[2].dt);
            tm = document.getElementById("r3day");
            tm.innerHTML = formatDate(d);

            im = document.getElementById("img3");
            newsrc = "img/" + jsn.list[2].weather[0].icon + ".png";
            im.src = newsrc;
            wt = document.getElementById("r3w");
            t = jsn.list[2].weather[0].description + " " + jsn.list[2].main.temp + "&#176;";
            wt.innerHTML = t;
            //row 4
            d = new Date(0);
            d.setUTCSeconds(jsn.list[3].dt);
            tm = document.getElementById("r4day");
            tm.innerHTML = formatDate(d);

            im = document.getElementById("img4");
            newsrc = "img/" + jsn.list[3].weather[0].icon + ".png";
            im.src = newsrc;
            wt = document.getElementById("r4w");
            t = jsn.list[3].weather[0].description + " " + jsn.list[3].main.temp + "&#176;";
            wt.innerHTML = t;
            //row 5
            d = new Date(0);
            d.setUTCSeconds(jsn.list[4].dt);
            tm = document.getElementById("r5day");
            tm.innerHTML = formatDate(d);

            im = document.getElementById("img5");
            newsrc = "img/" + jsn.list[4].weather[0].icon + ".png";
            im.src = newsrc;
            wt = document.getElementById("r5w");
            t = jsn.list[4].weather[0].description + " " + jsn.list[4].main.temp + "&#176;";
            wt.innerHTML = t;

            //row 6
            d = new Date(0);
            d.setUTCSeconds(jsn.list[5].dt);
            tm = document.getElementById("r6day");
            tm.innerHTML = formatDate(d);
           
            im = document.getElementById("img6");
            newsrc = "img/" + jsn.list[5].weather[0].icon + ".png";
            im.src = newsrc;
            wt = document.getElementById("r6w");
            t = jsn.list[5].weather[0].description + " " + jsn.list[5].main.temp + "&#176;";
            wt.innerHTML = t;

            //row 7
            d = new Date(0);
            d.setUTCSeconds(jsn.list[6].dt);
            tm = document.getElementById("r7day");
            tm.innerHTML = formatDate(d);
           
            im = document.getElementById("img7");
            newsrc = "img/" + jsn.list[6].weather[0].icon + ".png";
            im.src = newsrc;
            wt = document.getElementById("r7w");
            t = jsn.list[6].weather[0].description + " " + jsn.list[6].main.temp + "&#176;";
            wt.innerHTML = t;

            //row 8
            d = new Date(0);
            d.setUTCSeconds(jsn.list[7].dt);
            tm = document.getElementById("r8day");
            tm.innerHTML = formatDate(d);
           
            im = document.getElementById("img8");
            newsrc = "img/" + jsn.list[7].weather[0].icon + ".png";
            im.src = newsrc;
            wt = document.getElementById("r8w");
            t = jsn.list[7].weather[0].description + " " + jsn.list[7].main.temp + "&#176;";
            wt.innerHTML = t;            
        }
    };
    var url = "http://api.openweathermap.org/data/2.5/forecast?id=" + code + "&APPID=2cfe28c98f42cf722d1bb456c2d8c42a&units=imperial"
    request.open('GET', url);
    request.send();    
}

function getCitybyCode(code){
    var text;
    switch(code){
        case "5605242":
           text = "Rexburg, ID";
           break;
        case "5781004":
            text = "Salt Lake City, UT";
            break;
        case "5809844":
            text = "Seattle, WA";
            break;
        case "5308655":
            text = "Phoenix, AZ";
            break;  
        case "5389519":
            text = "Sacrmento, CA";
            break;        
        case "4347820":
            text = "Baltimore, MD";
            break;   
        case "4180439":
            text = "Atlanta, GA";
            break;   
        case "4317656":
            text = "Boston, MA";
            break;                                                      
    }
    return text;
}

function formatDate(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "  " + strTime;
}