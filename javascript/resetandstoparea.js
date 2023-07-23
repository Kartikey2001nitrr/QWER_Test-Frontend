

function stopall()
{
    if(time==false)
    {
        return;
    }
    stop(2);
    updateresult();
}

function stop_tochange_text()
{
    stop(0);
    updateresult();
    resetall();
}

function resetall() {
    time=false;
    writingarea.value = "";
    n=string.length;
    i=0;
    oi=0;
    mistake = 0;
    min = globel_min;
    sec = globel_sec;
    count = globel_count;
    writingarea.removeAttribute("disabled");
    totalmistakearea.innerHTML="0";
    averagespeedarea.innerHTML="0";
    accurrecy=0;
    makearray();
    update_area();
    words=0;
    resetandsave.style.display="none";
    wordcountstatus.innerHTML="0";
    writingarea.style.background="white";
    writingarea.setAttribute("maxlength", n);
    if(current_game==1 || current_game==2)
    {
        minspan.innerHTML = globel_min;
        secspan.innerHTML = globel_sec;
        countspan.innerHTML = globel_count;
    }
    else
    {
        minspan.innerHTML = (100-globel_min)%100;
        secspan.innerHTML = (60-globel_sec)%60;
        countspan.innerHTML = (100-globel_count)%100;
    }
};

resetbutton.addEventListener("click",resetall);
stopbutton.addEventListener("click", stopall);