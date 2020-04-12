//Create loop function
function loop(videoName) {
  const dv1Loop = document.getElementById(videoName);
  dv1Loop.loop = true;
}
function noLoop(videoName) {
  const dv1Loop = document.getElementById(videoName);
  dv1Loop.loop = false;
}

function changeLoop(videoName, checkbox) {
  var isChecked = document.getElementById(checkbox).checked;

  if(isChecked) {
    loop(videoName);
  }
  else {
    noLoop(videoName);
  }
}

//Create slowmotion function
function slowmotion(videoName) {
  const dv1Slow = document.getElementById(videoName);
  dv1Slow.playbackRate = 0.5;
}
function noSlowmotion(videoName) {
  const dv1Slow = document.getElementById(videoName);
  dv1Slow.playbackRate = 1;
}
function changeSlowmotion(videoName, checkbox) {
  var isChecked = document.getElementById(checkbox).checked;

  if(isChecked) {
    slowmotion(videoName);
  }
  else {
    noSlowmotion(videoName);
  }
}

//Create dropdown menu for tricks
function openNav(curtainOpen) {
  document.getElementById(curtainOpen).style.width = "100%";
}
function closeNav(curtainClose) {
  document.getElementById(curtainClose).style.width = "0%";
}

//Open and close login popup form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}