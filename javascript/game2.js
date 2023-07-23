function game2function(e) {
  mistake = 0;
  if (e.key !== null && time == false) {
    time = true;
    timer();
  }
  if (e.key == "Backspace" && i > 0) {
    goback();
    i--;
    removeerrors();
  }
  if (e.key.length == 1 && i < n && is_errorgame2 == 0) {
    var ismistake = compare(e.key, array[14]);
    if (ismistake == 0) {
      goback();
      i--;
      var s1 = writingarea.value;
      writingarea.value = s1.substring(0, s1.length - 1);
    }
    i++;
    gonext();
  }
  if (i === n && mistake == 0) {
    setTimeout("stop(1)", 100);
    return;
  }
}
