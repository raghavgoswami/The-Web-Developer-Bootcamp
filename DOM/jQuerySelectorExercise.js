//Select all divs and give them a purple background
$("div").css("background", "purple");

//Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

//Select the div with id "third" and give it an orange border
$("#third").css("border", "4px solid orange");

//Bonus: Select the first div only and change its font color to pink 
$("div:first-of-type").css("color", "pink");
// "div:first" is a built-in jQuery shortcut that works but it's a little slower since
//first-of-type is built into CSS but first is a jQuery shortcut - not a native CSS
