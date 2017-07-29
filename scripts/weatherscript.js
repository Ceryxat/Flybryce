// JavaScript: Weather Script

(function(){
	
	"use strict";

    //Applies the ajax function on every image in the index based on their "data" attributes in the HTML
	$(".image-weather").each(function(){
        $(this).mouseover(function(){
           showWeather($(this).attr("data-city"), $(this).attr("data-country")); 
        });
    });
    
    /*Creates a function which we call later to apply to currect weather based on the images "data" attributes which gets it via the API link */
    function showWeather(city, country){
        $.ajax({
            type: "GET",
            url: "http://api.wunderground.com/api/99c00ff477d72076/conditions/q/" + country + "/" + city + ".json",
            error: function(err) {
                alert("Error: " + err.status + ",  " + err.statusText)
            },
            success: function(response) {
            $("#" + city + "Span").html(country + ", " + city + "<br />" + "temp: " + response["current_observation"]["temp_c"] + " ℃<br />" + response["current_observation"]["weather"]);
            }
        });
    };
    
})();