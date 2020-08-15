var inDiv = document.getElementById('ingresoChart');

//Define configuration for plotly layouts
var config = {responsive: true}

//Defines data of both pie charts
var data = [{
  values: [50, 15],
  labels: ['Presupuesto asignado', 'Aportaciones extraordinarias '],
  name: 'Ingresos',
  marker: {
    colors: ['#212F3D','#A9CCE3']
  },
  hoverinfo: 'label+percent+name',
  type: 'pie'
}];

var layout = {
  title: 'Ingresos',
  height: 500,
  showlegend: true
};

//generate plot
Plotly.newPlot(inDiv, data, layout, config);