console.log("JS connected"); // this to check that our script is connected to our HTML

var body = document.querySelector("body"); // query select body
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to access CSS properties
body.style.fontFamily = "Arial, sans-serif";
// change the backgroundColor to a color of your choice
body.style.backgroundColor = "#5A86A4";

var nickname = document.querySelector("#nickname"); // query select the ID nickname

//add some value to nickname Hint: innerHTML
nickname.innerHTML = "Nujood ;)";
// query select favorites byID
document.querySelector("#favorites").innerHTML =
  "Favorite food? Kubbah (meat kubbah. extra pine nuts. 5 (or less) pomegranate-kernels-per-kubbah";
// query select hometown byID
document.querySelector("#hometown").innerHTML = "Riyadh";
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';

//change the color of all selectors to colors of your choice, it better be good LOL

var color = document.querySelectorAll("#hometown, #favorites, #nickname");
color.forEach(selector => (selector.style.color = "#fff"));

// https://www.w3schools.com/jsref/prop_style_color.asp
