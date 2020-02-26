var div = document.createElement('div');
div.setAttribute('id', "container");
document.body.appendChild(div);

var h1 = document.createElement('h1');
h1.innerHTML = "DOM Manipulation";
document.getElementById('container').appendChild(h1);

var button = document.createElement('button');
button.innerHTML = 'update';
button.setAttribute('onclick', "updTitle()");
button.setAttribute('id', 'button');
document.getElementById('container').appendChild(button);

function updTitle() {
    var h3 = document.createElement('h3');
    h3.innerHTML = "DOM Manipulated";
    h1.parentNode.replaceChild(h3, h1);
    var btn2 = document.createElement('button');
    btn2.setAttribute('id', 'delete');
    btn2.innerHTML = 'Delete Button';
    btn2.setAttribute('onclick', 'deleteBtn()');
    document.getElementById('container').insertBefore(btn2, button);
}

function deleteBtn() {
    var btn = document.getElementById('button');
    btn.parentNode.removeChild(btn);
}
