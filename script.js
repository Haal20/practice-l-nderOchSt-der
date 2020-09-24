console.log("Hej Världen!");

fetch("land.json")
  .then((response) => response.json())
  .then((data) => {
    //skriver ut alla länder i sin egen div
    let output = "";
    data.forEach(function (land) {
      output += `<div id="city${land.id}">${land.countryname}</div>`;
    });
    document.getElementById("mainBody").innerHTML = output;

    //Sortera städer, störst befolkning först
    fetch("stad.json")
      .then((response) => response.json())
      .then((data) => {
        data.sort(function (a, b) {
          if (a.population < b.population) {
            return 1;
          } else if (a.population > b.population) {
            return -1;
          } else {
            return 0;
          }
        });

        //skapar ul med li när städerna är uppradade
        let sverige = "<ul>";
        let finland = "<ul>";
        let norge = "<ul>";
        data.forEach(function (stad) {
          if (stad.countryid == 1) {
            sverige += `<li>${stad.stadname}</li>`;
          } else if (stad.countryid == 2) {
            finland += `<li>${stad.stadname}</li>`;
          } else {
            norge += `<li>${stad.stadname}</li>`;
          }
        });
        document
          .getElementById("city1")
          .insertAdjacentHTML("beforeend", sverige + "</ul><br>");
        document
          .getElementById("city2")
          .insertAdjacentHTML("beforeend", finland + "</ul><br>");
        document
          .getElementById("city3")
          .insertAdjacentHTML("beforeend", norge + "</ul>");
      });
  });
