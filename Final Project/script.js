var lastScripture = JSON.parse(localStorage.getItem('lastScripture'));
if (lastScripture > "") {
   getVerses(lastScripture.book, lastScripture.chapter);
}

function getVerses(book, chapter) {
   var app = document.getElementById('book');

   //Remove all elements from the book div
   while (app.firstChild) {
      app.removeChild(app.firstChild);
   }

   var bookH2 = document.createElement('h2');
   bookH2.textContent = book + " " + chapter;
   app.appendChild(bookH2);

   var bookHeading = document.createElement('div');
   bookHeading.setAttribute('id', 'bheading');
   bookHeading.textContent = book + " " + chapter;
   app.appendChild(bookH2);

   //Search book-of-mormon JSON file for the book and chapter then display.
   var req = new XMLHttpRequest();
   req.overrideMimeType("application/json");
   req.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
         var myObj = JSON.parse(this.responseText);
         var hlen = myObj.headings.length;
         for (var i = 0; i < hlen; i++) {
            hdref = myObj.headings[i].reference;
            if (hdref == book + ' ' + chapter) {
               var bookHeading = document.createElement('div');
               bookHeading.setAttribute('id', 'bheading');
               bookHeading.textContent = myObj.headings[i].text;
               app.appendChild(bookHeading);
            }
         }
         var vidlen = myObj.videos.length;
         vidfound = false;
         vidId = '';
         for (var i = 0; i < vidlen; i++) {
            vidbook = myObj.videos[i].book;
            vidchap = myObj.videos[i].chapter;
            if (vidbook == book && vidchap == chapter) {
               vidfound = true;
               vidId = myObj.videos[i].vidId;
            }
         }

         var len = myObj.verses.length;
         blen = book.length;
         var found = "nul";
         for (var i = 0; i < len; i++) {
            vref = myObj.verses[i].reference;
            vlen = vref.length - 1;
            var vchapter = "";
            var vverse = "";
            if (vref.indexOf(book) >= 0) {
               vchapter = vref.substring(blen + 1, vref.indexOf(':'));
               vverse = vref.substring(vref.indexOf(':') + 1);
               if (vchapter == chapter) {
                  var len1 = myObj.videos.length;
                  var bookP = document.createElement('p');
                  bookP.setAttribute('id', 'verses');
                  bookP.setAttribute('class', 'verse');
                  app.appendChild(bookP);
                  document.getElementById("verses").innerHTML = vverse + ": " + myObj.verses[i].text;
                  var lastScripture = {
                     book: book,
                     chapter: vchapter,
                     verse: vverse
                  }
                  localStorage.setItem("lastScripture", JSON.stringify(lastScripture));
                  found = "y";
                  if (vidfound && vverse == '1') {
                     var vidbtn = document.createElement('button');
                     vidbtn.setAttribute('id', 'videobtn');
                     vidbtn.setAttribute('onclick', 'displayVideo("' + vidId + '")');
                     document.getElementById('verses').appendChild(vidbtn);
                  }
                  document.getElementById('verses').removeAttribute("id");
               } else {
                  if (found == "y") {
                     found = "n";
                     i = len;
                  }
               }
            }
         }
      }
   };
   req.open("GET", "bookofmormon.json", true);
   req.send();
};

function boatTransition() {
   let times = 1;

   function go() {
      if (times % 2) {
         // swim to the right
         boat.classList.remove('back');
         boat.style.marginLeft = 0 + innerWidth - 260 + 'px';
      } else {
         // swim to the left
         boat.classList.add('back');
         boat.style.marginLeft = 0 + 'px';
      }
   }

   go();

   boat.addEventListener('transitionend', function () {
      times++;
      if (times < 6) {
         go();
      } else {
         boat.classList.add('back');
         boat.style.marginLeft = innerWidth / 2 - 130 + 'px';
      }
   });
};

window.addEventListener('resize', boatTransition);

function displayVideo(vidId) {
   var win = window.open("", "_blank", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=640,height=390,top=50,left=" + (innerWidth - 640));

   console.log('here');
   win.document.body.innerHTML = "<div id='video'></div>";
   win.document.getElementById("video").innerHTML = "<iframe width='680' height='420' src='https://www.youtube.com/embed/" + vidId + "?autoplay=1' frameborder='0' allowfullscreen></iframe>";

   // 2. This code loads the IFrame Player API code asynchronously.
   var tag = win.document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = win.document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
/*
console.log('here');
var player;

function onYouTubeIframeAPIReady() {
   console.log('here player');
   player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: video,
      events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
      }
   });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
   event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
      //setTimeout(stopVideo, 6000);
      done = true;
   }
}

function stopVideo() {
   player.stopVideo();
}

function displayVideo(video) {

}*/
