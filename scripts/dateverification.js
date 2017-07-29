// JavaScript Data Verification Script
(function(){
	
	"use strict";
	
    //Gets current day of month + month + year
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	
    
    //Adds a '0' in case the day of month or and month are below 10
	if(dd < 10){
		 dd = "0" + dd;
	 }
	 if(mm < 10){
		 mm = "0" + mm;
	 }
	 
    
	today = yyyy + "-" + mm + "-" + dd;

    //Adds an attribute for the date tag in the HTML for minimum date for current date, since this is not available on HTML5!
	$("#travelDate").attr("min", today);
    
    
})();