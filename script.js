function time() {
  let d = new Date();
  document.getElementById("currentTime").innerHTML = d;
}

setInterval(time, 1000);
