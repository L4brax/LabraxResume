function showAbout(){
  document.getElementById('main-1').style.display = 'none';
  document.getElementById('main-2').style.display = 'inline';
  document.getElementById('main-3').style.display = 'none';
}
function showMe(){
  document.getElementById('main-1').style.display = 'inline';
  document.getElementById('main-2').style.display = 'none';
  document.getElementById('main-3').style.display = 'none';
}
function showSkills(){
  document.getElementById('main-1').style.display = 'none';
  document.getElementById('main-2').style.display = 'none';
  document.getElementById('main-3').style.display = 'inline';
}
function move() {
  var elem = document.getElementById("myBar1");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("demo").innerHTML = width * 1  + '%';
    }
  }
}
