var titles=[];
async function getalltitle() {
    var url = "https://qwer-test.onrender.com/api/texts/fetchalltitle";
    try {
      const response = await fetch(url);
      var titles_array = await response.json();
      // Process the received response data here
      return titles_array;
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
}
function list()
{
    titles.forEach((title, index) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("dropdown-item");
    link.textContent = title;
    link.id = `tb${index + 1}`;
    listItem.appendChild(link);
    linktable.appendChild(listItem);

    link.addEventListener("click", () => {
        console.log(`Clicked on link with ID: ${link.id}`);
        textselect(title);
        text_selector.innerHTML=title;
      });
    });
}
async function alltitles() {
    try {
      titles=await getalltitle();
      list();
      console.log(titles);
    } catch (error) {
      console.error(error);
    }
}
alltitles();