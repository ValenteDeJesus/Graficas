var egDiv = document.getElementById('egresoChart');

//Define configuration for plotly layouts
var config1 = {responsive: true}

//Defines data of both pie charts
var data = [{
  values: [51, 16],
  labels: ['Gastos municipales', 'Otros gastos                         ' ],
  name: 'Egresos',
  marker: {
    colors: ['#CD6155 ','#F8C471']
  },
  hoverinfo: 'label+percent+name',
  type: 'pie'
}];

//defines layouts and style of each chart
var layout = {
  title: 'Egresos',
  height: 500,
  showlegend: true
};

//generate plot
Plotly.newPlot(egDiv, data, layout, config1);