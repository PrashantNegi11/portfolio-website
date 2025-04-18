var isReloaded =
  performance.getEntriesByType("navigation")[0].type === "reload";

if (!isReloaded) {
  document.querySelector("h1").innerHTML = "Refresh Me To Start";
} else {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource = "images/dice" + randomNumber1 + ".png";
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Oops!! It's a Draw!";
  }
}
