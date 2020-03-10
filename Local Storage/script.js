var human = JSON.parse(localStorage.getItem('person'));
var domName = "Name: " + human.name + "<br>Age: " + human.age + "<br>Employed: " + human.employed + "<br>Interests: " + human.interests;
document.getElementById("human").innerHTML = domName;
