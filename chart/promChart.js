var promDiv = document.getElementById('promotorChart');

//Define configuration for plotly layouts
var config = {responsive: true}

var data = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    gauge: { shape: "bullet" },
    delta: { reference: 300 },
    value: 220,
    domain: { x: [0, 1], y: [0, 1] },
    title: {
      text:
        "<span style='color: gray'>Promovidos <br> y <br> promotores</span>",
      font: { size: 9 }
    },
  }
];

var layout = { title: "Avance electoral", width: 1500 };
Plotly.newPlot(promDiv, data, layout,config);