makearray();
update_area();

const params = new URLSearchParams(window.location.search);
const game = params.get('game');
handlegameButtonClick(game);


writingarea.addEventListener("keydown", function (e) {
  countw(e);
  if (current_game == 1) {
    game1function(e);
  } else if (current_game == 2) {
    game2function(e);
  } else {
    game3function(e);
  }
});
