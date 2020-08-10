div = document.getElementById('pieChart');

//Defines data of both pie charts
var data = [{
  values: [50, 15],
  labels: ['Presupuesto asignado', 'Aportaciones extraordinarias '],
  domain: {column: 0},
  name: 'Ingresos',
  hoverinfo: 'label+percent+name',
  hole: .4,
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
  hole: .4,
  type: 'pie'
}];

//defines layouts and style of each chart
var layout = {
  title: 'Ingresos y Egresos',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Ingresos',
      x: 0.17,
      y: 0.5
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'Egresos',
      x: 0.83,
      y: 0.5
    }
  ],
  height: 500,
  width: 950,
  showlegend: true,
  grid: {rows: 1, columns: 2}
};

//generate plot
Plotly.newPlot(div, data, layout);