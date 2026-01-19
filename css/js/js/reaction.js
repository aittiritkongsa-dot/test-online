let startTime;

function start() {
  document.getElementById("text").innerText = "รอ...";
  setTimeout(() => {
    document.getElementById("text").innerText = "กดเลย!";
    startTime = new Date().getTime();
    document.body.onclick = stop;
  }, Math.random() * 3000 + 500);
}

function stop() {
  let time = new Date().getTime() - startTime;
  alert("เวลาตอบสนองของคุณ: " + time + " ms");
  document.body.onclick = null;
}
