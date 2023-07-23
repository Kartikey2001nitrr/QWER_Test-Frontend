modebtn1.addEventListener("click", function () {
  handlemodeButtonClick(1);
});

modebtn2.addEventListener("click", function () {
  handlemodeButtonClick(2);
});

modebtn3.addEventListener("click", function () {
  handlemodeButtonClick(3);
});

// Function to handle button click
function handlemodeButtonClick(mode) {
  stop(1);
  if (current_game == 1 || current_game == 2) {
    if (mode == 1) {
      modebtn2.classList.remove("active-mode-btn");
      modebtn3.classList.remove("active-mode-btn");
      modebtn1.classList.add("active-mode-btn");
      globel_min = 0;
      globel_sec = 30;
      globel_count = 0;
      min = globel_min;
      sec = globel_sec;
      count = globel_count;
      totaltime = 30;
    } else if (mode == 2) {
      modebtn1.classList.remove("active-mode-btn");
      modebtn3.classList.remove("active-mode-btn");
      modebtn2.classList.add("active-mode-btn");
      globel_min = 2;
      globel_sec = 0;
      globel_count = 0;
      min = globel_min;
      sec = globel_sec;
      count = globel_count;
      totaltime = 120;
    } else if (mode == 3) {
      modebtn2.classList.remove("active-mode-btn");
      modebtn1.classList.remove("active-mode-btn");
      modebtn3.classList.add("active-mode-btn");
      globel_min = 5;
      globel_sec = 0;
      globel_count = 0;
      min = globel_min;
      sec = globel_sec;
      count = globel_count;
      totaltime = 3000;
    }
    resetall();
    minspan.innerHTML = globel_min;
    secspan.innerHTML = globel_sec;
    countspan.innerHTML = globel_count;
  }
  else
  {
    if (mode == 1) {
      modebtn2.classList.remove("active-mode-btn");
      modebtn3.classList.remove("active-mode-btn");
      modebtn1.classList.add("active-mode-btn");
      wordlimitgame3=500;
    } else if (mode == 2) {
      modebtn1.classList.remove("active-mode-btn");
      modebtn3.classList.remove("active-mode-btn");
      modebtn2.classList.add("active-mode-btn");
      wordlimitgame3=800;
    } else if (mode == 3) {
      modebtn2.classList.remove("active-mode-btn");
      modebtn1.classList.remove("active-mode-btn");
      modebtn3.classList.add("active-mode-btn");
      wordlimitgame3=1000;
    }
    resetall();
    globel_min = 100;
    globel_sec = 0;
    globel_count = 0;
    min = globel_min;
    sec = globel_sec;
    count = globel_count;
    totaltime = 6000;
    minspan.innerHTML = 0;
    secspan.innerHTML = 0;
    countspan.innerHTML = 0;
  }
}
