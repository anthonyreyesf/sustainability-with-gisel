var audio = new Audio("../sound/tada.mp3");
var audio2 = new Audio("../sound/sad.mp3");

function checkQ1() {
  if (document.getElementById("30").checked) {
    document.getElementById("q1Correct").innerHTML = "✓";
    audio.play();
  } else if (document.getElementById("50").checked) {
    document.getElementById("q1Wrong1").innerHTML = "✘";
    audio2.play();
  } else if (document.getElementById("18").checked) {
    document.getElementById("q1Wrong2").innerHTML = "✘";
    audio2.play();
  } else if (document.getElementById("25").checked) {
    document.getElementById("q1Wrong3").innerHTML = "✘";
    audio2.play();
  }
}

function checkQ2() {
  if (document.getElementById("airline").checked) {
    document.getElementById("q2Correct").innerHTML = "✓";
    audio.play();
  } else if (document.getElementById("bus").checked) {
    document.getElementById("q2Wrong1").innerHTML = "✘";
    audio2.play();
  } else if (document.getElementById("vehicle").checked) {
    document.getElementById("q2Wrong2").innerHTML = "✘";
    audio2.play();
  } else if (document.getElementById("walking").checked) {
    document.getElementById("q2Wrong3").innerHTML = "✘";
    audio2.play();
  }
}

function checkQ3() {
  if (document.getElementById("destruction").checked) {
    document.getElementById("q3answer1").innerHTML = "✓";
    document.getElementById("q3answer1").style.color = "green";
  } else {
    document.getElementById("q3answer1").innerHTML = "✘";
    document.getElementById("q3answer1").style.color = "red";
  }

  if (document.getElementById("increase").checked) {
    document.getElementById("q3answer2").innerHTML = "✓";
    document.getElementById("q3answer2").style.color = "green";
  } else {
    document.getElementById("q3answer2").innerHTML = "✘";
    document.getElementById("q3answer2").style.color = "red";
  }

  if (document.getElementById("crowded").checked) {
    document.getElementById("q3answer3").innerHTML = "✓";
    document.getElementById("q3answer3").style.color = "green";
  } else {
    document.getElementById("q3answer3").innerHTML = "✘";
    document.getElementById("q3answer3").style.color = "red";
  }

  if (
    document.getElementById("destruction").checked &&
    document.getElementById("increase").checked &&
    document.getElementById("crowded").checked
  ) {
    audio.play();
  } else audio2.play();
}
