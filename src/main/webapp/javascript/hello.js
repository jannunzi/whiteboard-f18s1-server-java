// alert("Hello World!");
console.log("Hello World!");
document.write("<h2>Hello World!</h2>");
// document.getElementById("hello").innerHTML = "Welcome to CS5610";
var hello = document.getElementById("hello");
hello.innerHTML = "Welcome to Web Dev";
hello.style.color = "red";
hello.style.fontSize = "25px"
hello.style.display = "none"
var today = new Date();
document.write("<h2>The Month</h2>")
document.write(today.getMonth());
document.write("<h2>The Year</h2>")
document.write(today.getFullYear());
var scores = [90,89,78,67];
document.write("<h1>Scores</h1>")
document.write(scores);
var total = 0;
for(var i=0; i<scores.length; i++) {
    total += scores[i];
}
var average = total / scores.length;
document.write("total = " + total + "<br/>");
document.write("average = "+average+"<br/>");

document.write("<ul>");
for(var i in scores) {
    document.write("<li>scores["+i+"] = " +
        scores[i]);
    document.write("</li>");
}
document.write("</ul>");


var table = "<table border='1'>";
for(var j in scores) {
    var row = "<tr>";
    var col = "<td>"
    col += "scores["+j+"]";
    col += "</td>";
    row += col;
    col = "<td>"
    col += scores[j];
    col += "</td>";
    row += col;
    row += "</tr>";
    table += row;
}
table += "</table>";
document.write(table);


function sayHello() {
    alert("Hello!")
}


