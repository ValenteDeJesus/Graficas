var pieDiv = document.getElementById('pieChart');

//Define configuration for plotly layouts
var config = {responsive: true}

//Defines data of both pie charts
var data = [{
  values: [50, 15],
  labels: ['Presupuesto asignado', 'Aportaciones extraordinarias '],
  domain: {column: 0},
  name: 'Ingresos',
  hoverinfo: 'label+percent+name',
  type: 'pie'
},
{
  values: [27, 11],
  labels: ['Gastos municipales', 'Otros gastos' ],
  text: 'Egresos',
  textposition: 'inside',
  domain: {column: 1},
  name: 'Egresos',
  hoverinfo: 'label+percent+name',
  type: 'pie'
}];

//defines layouts and style of each chart
var layout = {
  title: 'Ingresos y Egresos',
  showlegend: true,
  grid: {rows: 1, columns: 2}
};

//generate plot
Plotly.newPlot(pieDiv, data, layout, config);