window.onload = function()
{
gapi.analytics.ready(function() {

  gapi.analytics.auth.authorize({
  	// serverAuth: {
  	// 	access_token: 'ya29.CjAyAz-oEUyihZhlc2o9DVq81Qt9266jbcCXciv9HFq1Xwgs_uJ9--eY5vX1r-tX-uI'
  	// 	// 1/XvyamFJSb3vPQoKU-MEeByyDSJgMk-NYjGNMkMpP6ls
  	// }
    container: 'embed-api-auth-container',
    clientid: '403771359085-kqk8d8i52reqrjeoi1h3vmpuuc6818c9.apps.googleusercontent.com'
  });

   var activeUsers3 = new gapi.analytics.ext.ActiveUsers3({
    container: 'active-users-container3',
    pollingInterval: 1800
  });

  activeUsers3.once('success', function() {
    var element = this.container.firstChild;
    var timeout;

    this.on('change', function(data) {
    var element = this.container.firstChild;
    var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
      element.className += (' ' + animationClass);
      $('#button1').trigger('click');

    clearTimeout(timeout);
      timeout = setTimeout(function() {
      element.className =
      element.className.replace(/ is-(increasing|decreasing)/g, '');
      }, 1000);
    });
  });

   var activeUsers2 = new gapi.analytics.ext.ActiveUsers2({
    container: 'active-users-container2',
    pollingInterval: 60
  });

  activeUsers2.once('success', function() {
    var element = this.container.firstChild;
    var timeout;

    this.on('change', function(data) {
    var element = this.container.firstChild;
    var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
      element.className += (' ' + animationClass);
      $('#button').trigger('click');

    clearTimeout(timeout);
      timeout = setTimeout(function() {
      element.className =
      element.className.replace(/ is-(increasing|decreasing)/g, '');
      }, 1000);
    });
  });

  var activeUsers = new gapi.analytics.ext.ActiveUsers({
    container: 'active-users-container',
    pollingInterval: 5
  });

  activeUsers.once('success', function() {
    var element = this.container.firstChild;
    var timeout;

    this.on('change', function(data) {
      var element = this.container.firstChild;
      var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
      element.className += (' ' + animationClass);

      clearTimeout(timeout);
      timeout = setTimeout(function() {
        element.className =
            element.className.replace(/ is-(increasing|decreasing)/g, '');
      }, 1000);
    });
  });

  var viewSelector = new gapi.analytics.ext.ViewSelector2({
  	  ids:'ga:124925312',
      container: 'view-selector-container',
  })
  viewSelector.execute();

    viewSelector.on('viewChange', function(data) {
    var title = document.getElementById('view-name');
    title.innerHTML = data.property.name + ' (' + data.view.name + ')';

    activeUsers.set(data).execute();
    activeUsers2.set(data).execute();
    activeUsers3.set(data).execute();

    // renderWeekOverWeekChart(data.ids);
    // renderYearOverYearChart(data.ids);
    renderBrowserChart(data.ids);
    renderDeviceChart(data.ids);
    // renderTopCountriesChart(data.ids);
    // renderCityChart(data.ids);
  });


$(function () {
        $('#container').highcharts({
          exporting: false,
          title: {
          text: 'Pageviews Last 60 Seconds and 30 Minutes',
          },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            name: 'Last 60 Seconds'
        },{
        	data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
        	name: 'Last 30 Minutes'
        }]

    });

    // the button action
    var i = 0;
    $('#button').click(function () {
        var chart = $('#container').highcharts();
        chart.series[0].addPoint(parseInt($(".ActiveUsers2-value").text()));
        i += 1;
    });
    var o = 0;
      $('#button1').click(function () {
        var chart = $('#container').highcharts();
        chart.series[1].addPoint(parseInt($(".ActiveUsers3-value").text()));
        o += 1;
});
});

  // function renderWeekOverWeekChart(ids) {

  //   var now = moment(); // .subtract(3, 'day');

  //   var thisWeek = query({
  //     'ids': ids,
  //     'dimensions': 'ga:date,ga:nthDay',
  //     'metrics': 'ga:sessions',
  //     'start-date': moment(now).subtract(1, 'day').day(0).format('YYYY-MM-DD'),
  //     'end-date': moment(now).format('YYYY-MM-DD')
  //   });

  //   var lastWeek = query({
  //     'ids': ids,
  //     'dimensions': 'ga:date,ga:nthDay',
  //     'metrics': 'ga:sessions',
  //     'start-date': moment(now).subtract(1, 'day').day(0).subtract(1, 'week')
  //         .format('YYYY-MM-DD'),
  //     'end-date': moment(now).subtract(1, 'day').day(6).subtract(1, 'week')
  //         .format('YYYY-MM-DD')
  //   });

  //   Promise.all([thisWeek, lastWeek]).then(function(results) {

  //     var data1 = results[0].rows.map(function(row) { return +row[2]; });
  //     var data2 = results[1].rows.map(function(row) { return +row[2]; });
  //     var labels = results[1].rows.map(function(row) { return +row[0]; });

  //     labels = labels.map(function(label) {
  //       return moment(label, 'YYYYMMDD').format('ddd');
  //     });

  //     var data = {
  //       labels : labels,
  //       datasets : [
  //         {
  //           label: 'Last Week',
  //           fillColor : "rgba(220,220,220,0.5)",
  //           strokeColor : "rgba(220,220,220,1)",
  //           pointColor : "rgba(220,220,220,1)",
  //           pointStrokeColor : "#fff",
  //           data : data2
  //         },
  //         {
  //           label: 'This Week',
  //           fillColor : "rgba(151,187,205,0.5)",
  //           strokeColor : "rgba(151,187,205,1)",
  //           pointColor : "rgba(151,187,205,1)",
  //           pointStrokeColor : "#fff",
  //           data : data1
  //         }
  //       ]
  //     };

  //     new Chart(makeCanvas('chart-1-container')).Line(data);
  //     generateLegend('legend-1-container', data.datasets);
  //   });
  // }
  // function renderYearOverYearChart(ids) {

  //   var now = moment(); // .subtract(3, 'day');

  //   var thisYear = query({
  //     'ids': ids,
  //     'dimensions': 'ga:month,ga:nthMonth',
  //     'metrics': 'ga:users',
  //     'start-date': moment(now).date(1).month(0).format('YYYY-MM-DD'),
  //     'end-date': moment(now).format('YYYY-MM-DD')
  //   });

  //   var lastYear = query({
  //     'ids': ids,
  //     'dimensions': 'ga:month,ga:nthMonth',
  //     'metrics': 'ga:users',
  //     'start-date': moment(now).subtract(1, 'year').date(1).month(0)
  //         .format('YYYY-MM-DD'),
  //     'end-date': moment(now).date(1).month(0).subtract(1, 'day')
  //         .format('YYYY-MM-DD')
  //   });

  //   Promise.all([thisYear, lastYear]).then(function(results) {
  //     var data1 = results[0].rows.map(function(row) { return +row[2]; });
  //     var data2 = results[1].rows.map(function(row) { return +row[2]; });
  //     var labels = ['Jan','Feb','Mar','Apr','May','Jun',
  //                   'Jul','Aug','Sep','Oct','Nov','Dec'];

  //     for (var i = 0, len = labels.length; i < len; i++) {
  //       if (data1[i] === undefined) data1[i] = null;
  //       if (data2[i] === undefined) data2[i] = null;
  //     }

  //     var data = {
  //       labels : labels,
  //       datasets : [
  //         {
  //           label: 'Last Year',
  //           fillColor : "black",
  //           strokeColor : "yellow",
  //           data : data1
  //         },
  //         {
  //           label: 'This Year',
  //           fillColor : "blue",
  //           strokeColor : "grey",
  //           data : data2
  //         }
  //       ]
  //     };

  //     new Chart(makeCanvas('chart-2-container')).Bar(data);
  //     generateLegend('legend-2-container', data.datasets);
  //   })
  //   .catch(function(err) {
  //     console.error(err.stack);
  //   })
  // }

  function renderDeviceChart(ids) {
    query({
      'ids': ids,
      'dimensions': 'ga:deviceCategory',
      'start-date':'yesterday',
      'metrics': 'ga:sessions',
      'sort': '-ga:sessions',
      'max-results': 5
    })
    .then(function(response) {

      var data = [];
      var colors = ['#949FB1','#4D5360','#D4CCC5','#E2EAE9','#F7464A'];

      response.rows.forEach(function(row, i) {
        data.push({ value: +row[1], color: colors[i], label: row[0] });
      });

      new Chart(makeCanvas('chart-3-container')).Doughnut(data),
      generateLegend('legend-3-container', data);
    });
  }


  // function renderTopCountriesChart(ids) {
  //   query({
  //     'ids': ids,
  //     'dimensions': 'ga:country',
  //     'metrics': 'ga:sessions',
  //     'sort': '-ga:sessions',
  //     'max-results': 5
  //   })
  //   .then(function(response) {

  //     var data = [];
  //     var colors = ['#D4CCC5','#4D5360','#949FB1','#E2EAE9','#F7464A'];

  //     response.rows.forEach(function(row, i) {
  //       data.push({
  //         label: row[0],
  //         value: +row[1],
  //         color: colors[i]
  //       });
  //     });

  //     new Chart(makeCanvas('chart-4-container')).Pie(data),
  //     generateLegend('legend-4-container', data);
  //   });
  // }

  var dataChartCountry = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '124925312',
      
      metrics: 'ga:sessions',
      dimensions: 'ga:country,ga:city',
      'start-date': 'yesterday',
      // 'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-Country',
      type: 'GEO',
      options: {
        width: '100%',
      }
    }

  });
   dataChartCountry.set({query: {ids: 'ga:124925312'}}).execute();

    var dataChartRev = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '124925312',
      
      metrics:'ga:sessions',
      dimensions: 'ga:country',
      'start-date': 'yesterday',
      // 'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-Rev',
      type: 'TABLE',
      options: {
        width: '100%',
      }
    }

  });
   dataChartRev.set({query: {ids: 'ga:124925312'}}).execute();

     var dataChartRev2 = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '124925312',
      
      metrics:'ga:sessions',
      dimensions: 'ga:city',
      'start-date': 'yesterday',
      // 'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-Rev2',
      type: 'TABLE',
      options: {
        width: '100%',
      }
    }

  });
   dataChartRev2.set({query: {ids: 'ga:124925312'}}).execute();

    var dataChartPages = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '124925312',
      
      metrics:'ga:pageviews,ga:uniquePageviews,ga:timeOnPage,ga:bounces,ga:entrances,ga:exits',
      dimensions: 'ga:landingPagePath',
      'start-date': 'yesterday',
      // 'end-date': 'today',
      'max-results': 10,
      sort: '-ga:pageviews'
    },
    chart: {
      container: 'chart-Pages',
      type: 'TABLE',
      options: {
        width: '80%',
      }
    }

  });
   dataChartPages.set({query: {ids: 'ga:124925312'}}).execute();

  // function renderCityChart(ids) {
  //   query({ 
  //     'ids': ids,
  //     'dimensions': 'ga:city',
  //     'metrics': 'ga:sessions',
  //     'sort': '-ga:sessions',
  //     'max-results': 5
  //   })
  //   .then(function(response) {

  //     var data = [];
  //     var colors = ['#D4CCC5','#4D5360','#949FB1','#E2EAE9','#F7464A'];

  //     response.rows.forEach(function(row, i) {
  //       data.push({
  //         label: row[0],
  //         value: +row[1],
  //         color: colors[i]
  //       });
  //     });

  //     new Chart(makeCanvas('chart-5-container')).Pie(data),
  //     generateLegend('legend-5-container', data);
  //   });
  // }


  function renderBrowserChart(ids) {
    query({
      'ids': ids,
      'dimensions':'ga:browser',
      'start-date':'yesterday',
	  'metrics':'ga:sessions',
      'sort': '-ga:sessions',
      'max-results': 6
    })
    .then(function(response) {

      var data = [];
      var colors = ['#D4CCC5','#4D5360','#949FB1','#E2EAE9','#F7464A','black'];

      response.rows.forEach(function(row, i) {
        data.push({
          label: row[0],
          value: +row[1],
          color: colors[i]
        });
      });

      new Chart(makeCanvas('chart-6-container')).PolarArea(data),
      generateLegend('legend-6-container', data);
    });
  }


  function query(params) {
    return new Promise(function(resolve, reject) {
      var data = new gapi.analytics.report.Data({query: params});
      data.once('success', function(response) { resolve(response); })
          .once('error', function(response) { reject(response); })
          .execute();
    });
  }



  function makeCanvas(id) {
    var container = document.getElementById(id);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    container.innerHTML = '';
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    container.appendChild(canvas);

    return ctx;
  }



  function generateLegend(id, items) {
    var legend = document.getElementById(id);
    legend.innerHTML = items.map(function(item) {
      var color = item.color || item.fillColor;
      var label = item.label;
      return '<li><i style="background:' + color + '"></i>' + label + '</li>';
    }).join('');
  }


  Chart.defaults.global.animationSteps = 60;
  Chart.defaults.global.animationEasing = 'easeInOutQuart';
  Chart.defaults.global.responsive = true;
  Chart.defaults.global.maintainAspectRatio = false;

})};