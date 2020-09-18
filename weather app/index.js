$(document).ready(function() {


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=52e0a80b6c6c7412dbe74cbc77a2870b';
            var weather
            var main;
            $.get(api, function(weather, main) {

                console.log(weather)


                $(".location-name").html("<h1>" + weather.name + "<h1>");
                $(".tempeture-degree").html("<p>" + weather.main.temp + "<p>");
                $(".tempeture-discription").html("<h1>" + weather.weather[0].description + "<h1>");
                $(".i").html("<p>" + weather.sys.country + "</p>")

            });


        })



    }
});