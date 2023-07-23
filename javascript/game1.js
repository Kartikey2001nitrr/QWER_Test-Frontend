function game1function(e) {
  if (e.key !== null && time == false) {
    time = true;
    timer();
  }
  if (e.key == "Backspace" && i > 0) {
    goback();
    i--;
    removeerrors();
  }
  if (e.key.length == 1 && i < n) {
    compare(e.key, array[14]);
    gonext();
    i++;
  }
  if (i === n && mistake == 0) {
    setTimeout("stop(1)", 100);
    return;
  }
}
