function updateTime() {
  const timeTarget = document.getElementById("time-target");
  const dateTarget = document.getElementById("date-target");
  const now = new Date();

  timeTarget.innerText = timeToWords(now.getHours(), now.getMinutes()).toLowerCase();
  dateTarget.innerText = now.toDateString().toLowerCase();
}

setInterval(updateTime, 1_000);
updateTime();