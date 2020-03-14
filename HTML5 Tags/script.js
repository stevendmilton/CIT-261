function Pupdate() {
   document.getElementById("pid").innerHTML = "This Button has be clicked!";
}

function Expand() {
   boat.classList.add('growing');
}

function Keypress() {
   var keyp = document.getElementById("keypress");
   keyp.style.fontSize = "32px";
   keyp.style.backgroundColor = "yellow";
}

function Progress() {
   document.getElementById("video").innerHTML = "Downloading ";
}

function Graph() {
   var canv = document.getElementById("myCanvas");
   var graph = canv.getContext("2d");
   graph.moveTo(5, 5);
   graph.lineTo(5, 95);
   graph.lineTo(195, 95);
   graph.moveTo(25, 25);
   graph.lineTo(25, 95);
   graph.moveTo(45, 35);
   graph.lineTo(45, 95);
   graph.moveTo(65, 65);
   graph.lineTo(65, 95);
   graph.moveTo(85, 15);
   graph.lineTo(85, 95);
   graph.moveTo(105, 85);
   graph.lineTo(105, 95);
   graph.moveTo(125, 45);
   graph.lineTo(125, 95);
   graph.moveTo(145, 65);
   graph.lineTo(145, 95);
   graph.moveTo(165, 5);
   graph.lineTo(165, 95);
   graph.moveTo(185, 75);
   graph.lineTo(185, 95);
   graph.moveTo(205, 25);
   graph.lineTo(205, 95);
   graph.stroke();

}
