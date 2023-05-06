let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//body

//red circle
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

//white cemi-circle
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 1 * Math.PI);
ctx.lineTo(100, 50)
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();


//eyes

//left
ctx.beginPath();
ctx.arc(40, 35, 10, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

//right
ctx.beginPath();
ctx.arc(70, 35, 10, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

//text

//"r/polandball"
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("r/polandball", canvas.width/2, canvas.height/1.2); 



//5 button

ctx.beginPath();
ctx.translate(95,10);
ctx.lineTo(100, 0);
ctx.lineTo(50,86);
ctx.lineTo(0, 0);
ctx.lineTo(100,0);
ctx.stroke();

ctx.beginPath();
ctx.rect(30, 7, 40, 40);
ctx.stroke();

ctx.beginPath();
ctx.arc(50, 26, 10, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText(5,50,34)
ctx.stroke();


