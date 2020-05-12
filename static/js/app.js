// reference data.js
var ufoData = data;
console.log(ufoData);

// Select the table body
var body = d3.select("tbody");

// Fill table
ufoData.forEach(ufoSighting => {
  console.log(ufoSighting);
  // Append a row for each entry
  var row = body.append("tr");

  // Append data to row using Object.entries
  Object.entries(ufoSighting).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the filter button
var filter = d3.select("#filter-btn");
filter.on("click", function() {

  body.html("");

  // Select the input text box
  var filterBox = d3.select("#datetime");
  // Get the date that was entered
  var input = filterBox.property("value");
  // Filter data to entries that match the input date
  var filteredData = ufoData.filter(sighting => sighting.datetime === input);


  filteredData.forEach(element => {

    // Append a row for each entry
    var row = body.append("tr");
    // Append data to row using Object.entries
    Object.entries(element).forEach(([key, value]) => {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
