function compare(a,b)
{
    if(a!==string[b])
    {
        mistake++;
        countmistakes++;
        mistakes.set(i,1);
        totalmistakearea.innerHTML=countmistakes;
        return 0;
    }
    return 1;
}

function removeerrors()
{
    if(mistakes.has(i))
    {
        mistakes.delete(i);
        mistake--;
    }
}