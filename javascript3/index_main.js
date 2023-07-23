var topimagecontainer = document.getElementById("topimagecontainer");
var logoplace = document.getElementById("logoplace");
var navbar = document.getElementById("navbar");
var biggestcontainer = document.getElementById("biggestcontainer");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > this.window.innerHeight) {
    logoplace.classList.remove("invisible");
    navbar.classList.add("fixed-top");
    biggestcontainer.style.marginTop="150px";
  }
});

var game1 = document.getElementById("game1");
var game2 = document.getElementById("game2");
var game3 = document.getElementById("game3");
game1.addEventListener("click", function () {
  handlegameButtonClick(1);
});
game2.addEventListener("click", function () {
  handlegameButtonClick(2);
});
game3.addEventListener("click", function () {
  handlegameButtonClick(3);
});
function handlegameButtonClick(game) {
  stop(1);
  if (game == 1) {
    location.assign("/game.html?game=1", "_blank");
  } else if (game == 2) {
    location.assign("/game.html?game=2", "_blank");
  } else if (game == 3) {
    location.assign("/game.html?game=3", "_blank");
  }
}
