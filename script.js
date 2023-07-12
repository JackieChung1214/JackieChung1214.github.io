var interval;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function displayRandomNumber() {
  var numberElement = document.getElementById("number");
  var randomColor = generateRandomColor();
  numberElement.textContent = generateRandomNumber();
  numberElement.style.setProperty("color", randomColor, "important");
}

function stopRandom() {
  clearInterval(interval);
}

function restart() {
  clearInterval(interval);
  interval = setInterval(displayRandomNumber, 50);
}

interval = setInterval(displayRandomNumber, 50);
