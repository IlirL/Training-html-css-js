$(document).ready(function(){
    //Get coordinates
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

    //Success Function
    function geoSuccess(Position)
    {
        //Define vars
        var lat_current = Position.coords.latitude;
        var lng_current = Position.coords.longitude;
        var weatherUrl_current = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat_current + "&lon=" + lng_current ;
        var googleUrl_current = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat_current + "," + lng_current + "&key=AIzaSyBerNeGKkI_LEN5o88RgL-sJHQ8xgmSk4o";

        //Get location data
        $.getJSON(googleUrl_current, function(data)
        {
           $(".location").empty(); //Emtpy location html

            //initialize and store variables
           var address_length_curr = data.results[0].address_components.length;
           var town_curr;
           var county_curr;
           var country_curr;
           var i;
    
           //loop address components, add to location html if component type is found
           for(i = 0; i<address_length_curr; i++)
           {
               switch(data.results[0].address_components[i].types[0])
               {
                   case "postal_town":
                       town = data.results[0].address_components[i].short_name;
                       $(".location").append(town);
                       break;
               
                    case "administrative_area_level_2":
                        county = data.results[0].address_components[i].short_name;
                        $(".location").append(", " + county);
                        break;
                    case "country":
                        country = data.results[0].address_components[i].long_name;
                        $(".location").append(", " + country);
                        break;

                }
                
              //$(".location").append(data.results[0].address_components[3].long_name);
              
           }
        });

        //Get weather data
        $.getJSON(weatherUrl_current, function(data){

            //initialize and store variables
            var detail_current = data.weather[0].description;
            var temp_main_c = data.main.temp;
            var temp_main_f = data.main.temp * 1.8 +32;
            var iconURL_current = data.weather[0].icon;
            var celcius = ' \u2103';
            var fareinheight = " \u2109";

            //Send weather data to html
            $(".weather").empty().append(detail_current);
            document.getElementById("icon").src = iconURL_current;
            $(".temp").empty().append(temp_main_c.toFixed(2) +celcius );
        
            $(".switch-label").click(function(){
                console.log("switched");
                var self = $(this);
                console.log(self);
                if(self.hasClass("c"))
                {
                console.log("F");
                self.removeClass("c");
                self.addClass("f");
                $(".temp").empty().append(temp_main_f.toFixed(2) + fareinheight);
                }
                else if(self.hasClass("f"))
                {
                    console.log("C");
                    self.removeClass("f");
                    self.addClass("c");
                    $(".temp").empty().append(temp_main_c.toFixed(2) + celcius);
                }
            });
        
        });
    }
    function geoError(PositionError)
    {
        console.log("Error with location");
    }
});