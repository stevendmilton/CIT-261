stripe.onclick = function () {
  stripe.classList.add('animate');
};

boat.onclick = function () {
  //...
  let times = 1;

  function go() {
    if (times % 2) {
      // swim to the right
      boat.classList.remove('back');
      boat.style.marginLeft = 100 * times + 200 + 'px';
    } else {
      // swim to the left
      boat.classList.add('back');
      boat.style.marginLeft = 100 * times - 200 + 'px';
    }
  }

  go();

  boat.addEventListener('transitionend', function () {
    times++;
    go();
  });
};

flyjet.onclick = function () {
  flyjet.classList.add('growing');
}

function showCircle(cx, cy, radius) {
  var div = document.createElement('div');
  var p1 = document.createElement('p');
  var br = document.createElement('br');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  div.setAttribute('id', 'circle');
  document.body.append(div);
  document.body.append(br);
  document.body.append(br);
  document.body.append(br);
  document.body.append(br);
  p1.innerHTML = "That's all folks!";
  document.body.append(p1);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
  }, 0);
}
