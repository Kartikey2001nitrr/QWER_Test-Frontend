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
    globel_min = 2;
    globel_sec = 0;
    globel_count = 0;
    min = globel_min;
    sec = globel_sec;
    count = globel_count;
    totaltime = 120;
    current_game = 1;
    modebtn1.innerHTML = "30 sec";
    modebtn2.innerHTML = "2 min";
    modebtn3.innerHTML = "5 min";
    currgamestatus.innerHTML="Game 1";
    showrules(1);
  } else if (game == 2) {
    globel_min = 2;
    globel_sec = 0;
    globel_count = 0;
    min = globel_min;
    sec = globel_sec;
    count = globel_count;
    totaltime = 120;
    current_game = 2;
    modebtn1.innerHTML = "30 sec";
    modebtn2.innerHTML = "2 min";
    modebtn3.innerHTML = "5 min";
    currgamestatus.innerHTML="Game 2";
    showrules(2);
  } else if (game == 3) {
    globel_min = 100;
    globel_sec = 0;
    globel_count = 0;
    min = globel_min;
    sec = globel_sec;
    count = globel_count;
    totaltime = 6000;
    current_game = 3;
    modebtn1.innerHTML = "500 letters";
    modebtn2.innerHTML = "800 letters";
    modebtn3.innerHTML = "1000 letters";
    currgamestatus.innerHTML="Game 3";
    showrules(3);
  }
  modebtn2.classList.add("active-mode-btn");
  modebtn3.classList.remove("active-mode-btn");
  modebtn1.classList.remove("active-mode-btn");
  resetall();
}
