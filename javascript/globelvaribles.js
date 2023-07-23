var oi=0;
var i=0;
var lettercount=0;
var string="The story begins with Harry Potter living a miserable life with his aunt, uncle, and cousin, the Dursleys. Unbeknownst to Harry, he is a wizard, and on his eleventh birthday, he receives a letter inviting him to attend Hogwarts, a prestigious school for magic. The Dursleys try to prevent him from accepting the offer, but Hagrid, a half-giant and Hogwarts groundskeeper, rescues Harry and reveals his true identity. Harry's arrival at Hogwarts is met with great curiosity and excitement from his fellow students. He befriends Ron Weasley, a pure-blood wizard from a large, loving family, and Hermione Granger, a brilliant and studious witch. Together, they navigate the challenges of school, such as learning spells, potions, and playing Quidditch, a popular wizarding sport. Throughout the year, Harry learns about the dark wizard Lord Voldemort, who murdered his parents and tried to kill him as a baby, resulting in a lightning-shaped scar on his forehead. Harry's mysterious connection to Voldemort becomes a central theme in the series. As the trio investigates the enigmatic Philosopher's Stone, an object capable of granting immortality, they encounter various obstacles and puzzles, put in place to protect it. They suspect that someone is trying to steal the Stone and use it for sinister purposes. With the help of their professors, including the wise Albus Dumbledore, the trio uncovers a plot involving one of the teachers, Professor Quirrell, who has been possessed by Lord Voldemort. In the climax, Harry, Ron, and Hermione reach the Chamber of Secrets, where they confront Quirrell and Voldemort. Harry discovers that his love for his deceased parents acts as a powerful protection against Voldemort's dark magic. With Quirrell's defeat, the Stone is secured, and Voldemort flees. The book concludes with Harry and his friends winning the House Cup, a competition among the school's four houses. Harry returns to the Dursleys for the summer but looks forward to returning to Hogwarts in the following year. Harry Potter and the Philosopher's Stone sets the stage for the rest of the series, introducing readers to the magical world, its characters, and the overarching conflict between Harry and Voldemort. It explores themes of friendship, bravery, love, and the choices between good and evil. The book's success launched a global phenomenon, captivating readers of all ages and leading to the release of six additional books and multiple film adaptations, solidifying J.K. Rowling as one of the most influential authors of our time.";
var array=[];
var n=string.length;
writingarea.setAttribute("maxlength", n);
var presize=n;
var mistake=0;
var countmistakes=0;
const mistakes = new Map();
var average_speed=0;
var accurrecy=0;
var globel_min=2;
var globel_sec=0;
var globel_count=0;
var min=globel_min;
var sec=globel_sec;
var count=globel_count;
var totaltime=120;
var time=false;
var current_game=1;
var wordlimitgame3=500;
var is_errorgame2=0;
var words=0;
var page=0;
var currenttitle="Harry Potter 1";
function makearray()
{
    array=[];
    for(var m=0;m<14;m++)
    {
        array[m]=-1;
    }
    for(var m=14;m<31;m++)
    {
        array[m]=m-14;
    }
}