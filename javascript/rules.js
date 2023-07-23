var rulesarray=["Game 1","Game 2","Game 3"];

rulesbutton.addEventListener('click',function(){
   showrules(current_game);
});

function showrules(game)
{
    rulesbody.innerHTML=rulesarray[game-1];
    rulestoast.classList.add("show");
}