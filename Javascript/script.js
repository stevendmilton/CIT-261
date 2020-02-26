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
