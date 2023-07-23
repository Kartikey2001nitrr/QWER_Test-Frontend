function countw(e)
{
    if(time==false || (i==lettercount && string[lettercount]==' ' && mistake==0 && e.key==' '))
    {
       words++;
       wordcountstatus.innerHTML=words;
    }
    if(e.key.length==1 && i>=lettercount)
    {
        lettercount++;
    }
}