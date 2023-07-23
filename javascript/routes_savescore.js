function update_score()
{
    var name=User_Name.value;
    if(name.length<6)
    {
        return;
    }
    var obj = {
       "User": name,
       "Title": currenttitle,
       "wordmin": (average_speed*60).toFixed(2),
       "error": countmistakes,
       "words": words
    };
    fetch("https://qwer-test.onrender.com/api/scores/addscores", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Process the received response data here
          console.log(data);
          resetall();
        })
        .catch(function(error) {
          // Handle any errors that occurred during the request
          console.error(error);
        });
}
resetandsavebutton.addEventListener("click",update_score);