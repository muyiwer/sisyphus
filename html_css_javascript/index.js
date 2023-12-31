let data = [
  ["2004-01-02", 92.86, 93.05, 91.2, 91.55],
  ["2004-01-05", 92.0, 93.09, 92.0, 93.05],
  ["2004-01-06", 92.2, 93.19, 92.14, 93.06],
  ["2004-01-07", 93.14, 93.38, 92.47, 92.78],
  ["2004-01-08", 93.21, 93.21, 92.03, 93.04],
  ["2004-01-09", 91.75, 92.35, 91.0, 91.21],
  ["2004-01-12", 91.21, 92.14, 91.21, 91.55],
  ["2004-01-13", 91.45, 91.51, 89.01, 89.7],
  ["2004-01-14", 89.9, 90.46, 89.75, 90.31],
  ["2004-01-15", 95.07, 95.65, 93.55, 94.02],
  ["2004-01-16", 95.0, 95.35, 94.71, 95.32],
  ["2004-01-20", 96.0, 97.44, 95.73, 97.1],
  ["2004-01-21", 97.23, 98.04, 96.64, 97.7],
  ["2004-01-22", 97.84, 98.16, 97.32, 97.51],
  ["2004-01-23", 97.82, 98.21, 97.1, 97.9],
  ["2004-01-26", 97.9, 99.85, 97.56, 99.85],
  ["2004-01-27", 99.4, 99.67, 98.7, 98.8],
  ["2004-01-28", 99.15, 99.42, 97.28, 97.38],
  ["2004-01-29", 98.1, 98.6, 96.55, 98.01],
  ["2004-01-30", 98.02, 99.33, 97.84, 99.23],
  ["2004-02-02", 99.15, 99.94, 98.5, 99.39],
  ["2004-02-03", 99.0, 99.0, 98.95, 99.0],
  ["2004-02-04", 99.38, 99.43, 99.3, 99.19],
  ["2004-02-05", 99.0, 99.09, 98.26, 98.86],
  ["2004-02-06", 98.85, 99.24, 98.25, 98.94],
  ["2004-02-09", 99.31, 99.44, 98.6, 98.95],
  ["2004-02-10", 98.45, 99.97, 98.41, 99.61],
  ["2004-02-11", 99.2, 99.31, 98.8, 99.96],
  ["2004-02-12", 99.06, 99.3, 99.3, 99.3],
  ["2004-02-13", 99.1, 99.99, 99.08, 99.71],
  ["2004-02-17", 99.99, 99.0, 99.32, 99.37],
  ["2004-02-18", 99.31, 99.77, 98.15, 98.42],
  ["2004-02-19", 98.42, 99.23, 97.52, 97.8],
  ["2004-02-20", 98.6, 98.6, 97.19, 97.31],
  ["2004-02-23", 97.4, 97.51, 95.46, 95.96],
  ["2004-02-24", 95.2, 97.46, 95.2, 96.79],
  ["2004-02-25", 96.5, 97.09, 96.23, 96.54],
  ["2004-02-26", 96.27, 97.26, 96.25, 96.79],
  ["2004-02-27", 96.8, 97.38, 96.1, 96.5],
  ["2004-03-01", 96.5, 97.25, 96.15, 97.04],
  ["2004-03-02", 97.6, 97.6, 96.62, 96.82],
  ["2004-03-03", 96.57, 96.89, 95.6, 96.84],
  ["2004-03-04", 96.58, 96.92, 96.13, 96.39],
  ["2004-03-05", 95.95, 96.98, 95.56, 96.45],
  ["2004-03-08", 96.49, 96.88, 94.59, 94.59],
  ["2004-03-09", 94.3, 95.28, 93.77, 94.53],
  ["2004-03-10", 94.38, 94.74, 92.68, 93.06],
  ["2004-03-11", 92.0, 92.98, 91.15, 91.21],
  ["2004-03-12", 92.0, 93.38, 91.68, 93.3],
  ["2004-03-15", 92.6, 92.69, 90.88, 91.82],
  ["2004-03-16", 92.4, 92.7, 91.42, 92.45],
  ["2004-03-17", 92.57, 93.79, 92.45, 93.39],
  ["2004-03-18", 93.05, 93.18, 91.9, 92.85],
  ["2004-03-19", 92.86, 92.97, 91.51, 91.62],
  ["2004-03-22", 91.27, 91.48, 90.28, 91.02],
  ["2004-03-23", 91.6, 92.16, 90.68, 91.32],
  ["2004-03-24", 91.57, 92.49, 91.04, 91.77],
  ["2004-03-25", 92.15, 92.63, 91.45, 92.39],
  ["2004-03-26", 92.39, 93.25, 92.16, 92.77],
  ["2004-03-29", 92.99, 93.61, 92.18, 92.68],
  ["2004-03-30", 92.67, 92.67, 91.35, 92.32],
  ["2004-03-31", 92.07, 92.24, 91.51, 91.84],
];
//validate user authentication
if(!localStorage.getItem("profile")){
  window.location.href = "/"
}

//User profile picture implementation
const profileSrc = localStorage.getItem("profile");
const imageElement = document.getElementById('profile-pic');
const imageElementMobile = document.getElementById('profile-pic-mobile');
imageElement.setAttribute('src', profileSrc);
imageElementMobile.setAttribute('src', profileSrc);

//user profile name
const email = localStorage.getItem("email");
const profileNameElement = document.getElementById('profile-name');
profileNameElement.textContent = email

//switching between time intervals
const timeElements = document.querySelectorAll('.time');
timeElements.forEach(function(timeElement) {
  timeElement.classList.remove('date-active');
});
timeElements.forEach(function(timeElement) {
  timeElement.addEventListener('click', function() {
    timeElements.forEach(function(timeElement) {
      timeElement.classList.remove('date-active');
    });
    timeElement.classList.add('date-active');
    console.log(timeElement.textContent)
  });
});
const generateGraph = (data) => {
  const table = anychart.data.table();
    table.addData(data)
    // map the data
    mapping = table.mapAs();
    mapping.addField("open", 1);
    mapping.addField("high", 2);
    mapping.addField("low", 3);
    mapping.addField("close", 4);
  
    // chart type
    var chart = anychart.stock();
    var mobileChart = anychart.stock();
  
    chart.background().fill("#262932");
    mobileChart.background().fill("#262932");
  
    // set the series
    var series = chart.plot(0).candlestick(mapping);
    var mobileSeries = mobileChart.plot(0).candlestick(mapping);
  
    // set the custom colors for Globex series
    series.risingStroke("#58BD7D");
    series.risingFill("#58BD7D");
    series.fallingStroke("#FF6838");
    series.fallingFill("#FF6838");
  
    mobileSeries.risingStroke("#58BD7D");
    mobileSeries.risingFill("#58BD7D");
    mobileSeries.fallingStroke("#FF6838");
    mobileSeries.fallingFill("#FF6838");
  
    series.name("");
  
    chart.container("container");
  
  
    mobileChart.container("container-mobile");
  
    chart.draw();
    mobileChart.draw();
  
  
  }
anychart.onDocumentReady(function () {
  // set the data
  generateGraph(data)

});
