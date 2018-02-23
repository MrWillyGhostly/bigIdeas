function typewriter(print, speed) {
  var place = document.getElementById('place'),
    text = new String(print),
    toPrint = "",
    count = 0;
  var stop = setInterval(function() {
    if(count < text.length) {
      place.innerHTML = toPrint += text[count];
      return count += 1;
    }else {
      clearInterval(stop);
    }
  },speed);
  
typewriter("willy", 100);
