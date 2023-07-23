function stop(how) {
  if (current_game == 1 || current_game == 2) {
    if (how == 1) {
      var lefttime = min * 60 + tsec;
      average_speed = words / (totaltime - lefttime);
    } else if (how == 0) {
      average_speed = words / totaltime;
    } else {
      var lefttime = min * 60 + sec;
      average_speed = words / (totaltime - lefttime);
    }
  }
  else
  {
    var min1=(100-min-1)%100;
    var sec1=(60-sec-1)%60;
    average_speed=words/(min1*60 + sec1);
  }
  time = false;
  writingarea.setAttribute("disabled", "true");
  resetandsave.style.display = "block";
  updateresult();
}

function timer() {
  if (time == true) {
    if (count === 0) {
      if (min === 0 && sec === 0) {
        stop(0);
        return;
      } else if (sec === 0) {
        min--;
        sec = 59;
        count = 99;
        if (current_game == 1 || current_game == 2) {
          minspan.innerHTML = min;
        } else {
          minspan.innerHTML = (100 - min - 1) % 100;
        }
      } else {
        sec--;
        count = 99;
        if (current_game == 1 || current_game == 2) {
          secspan.innerHTML = sec;
        } else {
          secspan.innerHTML = (60 - sec - 1) % 60;
        }
      }
    }
    if (mistake > 0) {
      writingarea.style.background = "red";
    } else {
      writingarea.style.background = "white";
    }
    count = count - 1;
    if (current_game == 1 || current_game == 2) {
      countspan.innerHTML = count;
    } else {
      countspan.innerHTML = (100 - count - 1) % 100;
    }
    setTimeout("timer()", 10);
  }
}
