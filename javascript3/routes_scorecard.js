var data;
function sortByWordMinDescending(objects) {
  return objects.sort((a, b) => b.wordmin - a.wordmin);
}
function maketable()
{

  var scoretable = document.getElementById("scoreTable");
  const table = document.createElement('table');
  table.classList.add("table");
  table.classList.add("table-dark");
  table.classList.add("table-hover");
  const headerRow = table.insertRow();
  Object.keys(data[0]).forEach(function(key, index) {
    if (key !== '_id' && key !== '__v') {
      const th = document.createElement('th');
      if (key === 'Date') {
        const thDate = document.createElement('th');
        thDate.textContent = 'Date';
        thDate.id = 'column-' + (index * 2);
        thDate.classList.add("Headers");
        headerRow.appendChild(thDate);
        
        const thTime = document.createElement('th');
        thTime.textContent = 'Time';
        thTime.id = 'column-' + (index * 2 + 1);
        thTime.classList.add("Headers");
        headerRow.appendChild(thTime);
      } else {
        th.textContent = key;
        th.id = 'column-' + index;
        th.classList.add("Headers");
        headerRow.appendChild(th);
      }
    }
  });

  // Create table rows and cells
  data.forEach(function(obj) {
    const row = table.insertRow();
    Object.keys(obj).forEach(function(key, index) {
      if (key !== '_id' && key !== '__v') {
        
        if (key === 'Date') {
          const dateObj = new Date(obj[key]);
          const date = dateObj.toLocaleDateString();
          const time = dateObj.toLocaleTimeString();
          
          const cellDate = row.insertCell();
          cellDate.textContent = date;
          cellDate.setAttribute('headers', 'column-' + (index * 2));
          
          const cellTime = row.insertCell();
          cellTime.textContent = time;
          cellTime.setAttribute('headers', 'column-' + (index * 2 + 1));
        } else {
          const cell = row.insertCell();
          cell.textContent = obj[key];
          cell.setAttribute('headers', 'column-' + index);
        }
      }
    });
  });
  scoretable.appendChild(table);


}
async function getscorecard() {
    var url = "https://qwer-test.onrender.com/api/scores/fetchallscores";
  
    try {
      var response = await fetch(url);
      data = await response.json();
      // Process the received response data here
      data = sortByWordMinDescending(data);
      maketable();
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  }
getscorecard();
