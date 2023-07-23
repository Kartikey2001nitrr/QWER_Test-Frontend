async function gettext(title) {
  var obj = {
    "Title": title
  };
  var queryParams = new URLSearchParams(obj).toString();
  var url = "https://qwer-test.onrender.com/api/texts/fetchtext?" + queryParams;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // Process the received response data here
    console.log(data);
    // console.log(data['0']['Texts']);
    return data['0']['Texts'];
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error(error);
  }
}
async function textselect(s) {
  try {
    string = await gettext(s);
    stop_tochange_text();
    currenttitle=s;
    // console.log(string);
  } catch (error) {
    console.error(error);
  }
}

// tb1.addEventListener("click", function () {
//   console.log("hyy");
//   textselect('Harry Potter 1');
//   text_selector.innerHTML="Harry Potter";
  
// });
// tb2.addEventListener("click", function () {
//   console.log("hyy");
//   textselect('Invisible Man');
//   text_selector.innerHTML="Invisible Man";
// });
// tb3.addEventListener("click", function () {
//   console.log("hyy");
//   textselect('Three Man In A Boat');
//   text_selector.innerHTML="Three Man In A Boat";
// });
