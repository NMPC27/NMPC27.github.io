function desenhaGrafico() {
$(document).ready(function() {
  Highcharts.setOptions({
    lang: {
      drillUpText: '<< Voltar '
    }
  });

  Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Contribuições dos autores:'
    },
    subtitle: {
      text: 'Autores: Nuno Cunha nºmec: 98 124 e Leonardo Galdino nºmec: 96 664'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Percentagem'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 5,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> do total<br/>'
    },
    series: [{
      name: 'Autor',
      colorByPoint: true,
      data: [{
        name: 'Nuno Cunha nºmec: 98 124',
        y: 50, /* percentagem de contribuiçao */
      }, {
        name: 'Leonardo Galdino nºmec: 96 664',
        y: 50, /* percentagem de contribuiçao */
      }]
    }],
  });
});
}