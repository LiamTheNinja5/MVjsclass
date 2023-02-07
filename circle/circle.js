var date = new Date();
var hour = date.getHours();
var r = hour;
var π = Math.PI;
document.getElementById("q").innerHTML = "Question: C = 2 * " + "π"+"("+(Math.floor(Math.PI * 100) / 100)+")" + " * " + r + ":";
document.getElementById("a").innerHTML ="Awnser: C = "+(2*π*r)