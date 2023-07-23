async function update_area()
{
    for(var k=0;k<31;k++)
    {
        if(array[k]!==-1)
        {
            boxarray[k].innerHTML=string[array[k]];
            var id=boxarray[k].getAttribute("id");
            var cb=document.getElementById(id);
            if(string[array[k]]===' ')
            {
                cb.style.width="20px";
            }
            else
            {
                cb.style.width="auto";
            }
            if(mistakes.has(array[k]) && k<=13)
            {
                if(array[k]===' ')
                {
                    cb.style.backgroundColor="red";
                }
                cb.style.color="red";
            }
            else
            {
                if(k<=13)
                {
                    if(array[k]===' ' && cb.style.backgroundColor=="red")
                    {
                        cb.style.backgroundColor=="black";
                    }
                    cb.style.color="green";
                }
                else if(k>=15)
                {
                    cb.style.color="white";
                }
                
            }
        }
        else
        {
            boxarray[k].innerHTML="";
            var id=boxarray[k].getAttribute("id");
            var cb=document.getElementById(id);
            cb.style.width="15px";
        }
    }
};

function goback()
{
    if(i<0)
    {
        return;
    }
    for(var k=29;k>=0;k--)
    {
        array[k+1]=array[k];
    }
    if(i>=15)
    {
        array[0]=i-15;
    }
    else
    {
        array[0]=-1;
    }
    update_area();
    
}

function gonext()
{
    if(i>=n)
    {
        return;
    }
    for(var k=0;k<30;k++)
    {
        array[k]=array[k+1];
    }
    if((i+17)<n)
    {
        array[30]=i+17;
    }
    else
    {
        array[30]=-1;
    }
    update_area();
}

function makeoutput()
{
    for (let i = 1; i <= 31; i++) {
        const span = document.createElement("span");
        span.classList.add("chars");
        span.id=`char${i}`;
        box.appendChild(span);
    }
}
makeoutput();