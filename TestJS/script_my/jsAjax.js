// (function() {
//     $("#stats").load("status_report.html");
// }, 60000);


(function() {
    $('#stats').load("weather.com/weather/today/l/02134:4:US", "zipcode=02134");
})();

(function() {
   var anon = jQuery.get("debug.txt", alert);
   console.log(anon);
})();


