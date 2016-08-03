window.onload = function()
{
gapi.analytics.ready(function() {

  gapi.analytics.auth.authorize({
    // clientid: '403771359085-kqk8d8i52reqrjeoi1h3vmpuuc6818c9.apps.googleusercontent.com',
    // scope: 'https://www.googleapis.com/auth/analytics.readonly',
    // immediate: true
  	serverAuth: {
  		'access_token': 'ya29.Ci8hA_IUctVSBHnrwzJXU2b--IjMDfNiOA5QldmXZkPap7A-9x6hIaLeBRZliC7W2w', 
      'token_type': 'Bearer', 
      'expires_in': 3600, 
      'refresh_token': '1/NQUOiIVaB3GO4tpyAYZKArpX0hWBUv_FhUPeNXJhrbY ',
      immediate: true
  	}
    // container: 'embed-api-auth-container',
    // clientid: '403771359085-kqk8d8i52reqrjeoi1h3vmpuuc6818c9.apps.googleusercontent.com'
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
      }, 3000);
    });
  });

  // var activeUsers2 = new gapi.analytics.ext.ActiveUsers2({
  //   container: 'active-users-container2',
  //   pollingInterval: 5
  // });
  // 4/rOGLCP7BCjn972GWa37mKc1pctGCH8fQKeW__HxKvZU authorization code googleAPI OAuth2.0 Playground
  // activeUsers.once('success', function() {
  //   var element = this.container.firstChild;
  //   var timeout;

  //   this.on('change', function(data) {
  //     var element = this.container.firstChild;
  //     var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
  //     element.className += (' ' + animationClass);

  //     clearTimeout(timeout);
  //     timeout = setTimeout(function() {
  //       element.className =
  //           element.className.replace(/ is-(increasing|decreasing)/g, '');
  //     }, 60000);
  //   });
  // });

  var viewSelector = new gapi.analytics.ext.ViewSelector2({
    container: 'view-selector-container',
  })
  .execute();

    viewSelector.on('viewChange', function(data) {
    var title = document.getElementById('view-name');
    title.innerHTML = data.property.name + ' (' + data.view.name + ')';

    activeUsers.set(data).execute();
    // activeUsers2.set(data).execute();

    renderWeekOverWeekChart(data.ids);
    renderYearOverYearChart(data.ids);
    renderMinuteChart(data.ids);
    renderDeviceChart(data.ids);
    renderTopCountriesChart(data.ids);
    renderTopCityChart(data.ids);
  });



  function renderWeekOverWeekChart(ids) {

    var now = moment(); // .subtract(3, 'day');

    var thisWeek = query({
      'ids': ids,
      'dimensions': 'ga:date,ga:nthDay',
      'metrics': 'ga:sessions',
      'start-date': moment(now).subtract(1, 'day').day(0).format('YYYY-MM-DD'),
      'end-date': moment(now).format('YYYY-MM-DD')
    });

    var lastWeek = query({
      'ids': ids,
      'dimensions': 'ga:date,ga:nthDay',
      'metrics': 'ga:sessions',
      'start-date': moment(now).subtract(1, 'day').day(0).subtract(1, 'week')
          .format('YYYY-MM-DD'),
      'end-date': moment(now).subtract(1, 'day').day(6).subtract(1, 'week')
          .format('YYYY-MM-DD')
    });

    Promise.all([thisWeek, lastWeek]).then(function(results) {

      var data1 = results[0].rows.map(function(row) { return +row[2]; });
      var data2 = results[1].rows.map(function(row) { return +row[2]; });
      var labels = results[1].rows.map(function(row) { return +row[0]; });

      labels = labels.map(function(label) {
        return moment(label, 'YYYYMMDD').format('ddd');
      });

      var data = {
        labels : labels,
        datasets : [
          {
            label: 'Last Week',
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : data2
          },
          {
            label: 'This Week',
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : data1
          }
        ]
      };

      new Chart(makeCanvas('chart-1-container')).Line(data);
      generateLegend('legend-1-container', data.datasets);
    });
  }
  function renderYearOverYearChart(ids) {

    var now = moment(); // .subtract(3, 'day');

    var thisYear = query({
      'ids': ids,
      'dimensions': 'ga:month,ga:nthMonth',
      'metrics': 'ga:users',
      'start-date': moment(now).date(1).month(0).format('YYYY-MM-DD'),
      'end-date': moment(now).format('YYYY-MM-DD')
    });

    var lastYear = query({
      'ids': ids,
      'dimensions': 'ga:month,ga:nthMonth',
      'metrics': 'ga:users',
      'start-date': moment(now).subtract(1, 'year').date(1).month(0)
          .format('YYYY-MM-DD'),
      'end-date': moment(now).date(1).month(0).subtract(1, 'day')
          .format('YYYY-MM-DD')
    });

    Promise.all([thisYear, lastYear]).then(function(results) {
      var data1 = results[0].rows.map(function(row) { return +row[2]; });
      var data2 = results[1].rows.map(function(row) { return +row[2]; });
      var labels = ['Jan','Feb','Mar','Apr','May','Jun',
                    'Jul','Aug','Sep','Oct','Nov','Dec'];

      for (var i = 0, len = labels.length; i < len; i++) {
        if (data1[i] === undefined) data1[i] = null;
        if (data2[i] === undefined) data2[i] = null;
      }

      var data = {
        labels : labels,
        datasets : [
          {
            label: 'Last Year',
            fillColor : "black",
            strokeColor : "yellow",
            data : data1
          },
          {
            label: 'This Year',
            fillColor : "blue",
            strokeColor : "grey",
            data : data2
          }
        ]
      };

      new Chart(makeCanvas('chart-2-container')).Bar(data);
      generateLegend('legend-2-container', data.datasets);
    })
    .catch(function(err) {
      console.error(err.stack);
    })
  }

  function renderDeviceChart(ids) {

    query({
      'ids': ids,
      'dimensions': 'ga:deviceCategory',
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


  function renderTopCountriesChart(ids) {
    query({
      'ids': ids,
      'dimensions': 'ga:country',
      'metrics': 'ga:sessions',
      'sort': '-ga:sessions',
      'max-results': 5
    })
    .then(function(response) {

      var data = [];
      var colors = ['#D4CCC5','#4D5360','#949FB1','#E2EAE9','#F7464A'];

      response.rows.forEach(function(row, i) {
        data.push({
          label: row[0],
          value: +row[1],
          color: colors[i]
        });
      });

      new Chart(makeCanvas('chart-4-container')).Pie(data),
      generateLegend('legend-4-container', data);
    });
  }

  function renderTopCityChart(ids) {
    query({
      'ids': ids,
      'dimensions': 'ga:city',
      'metrics': 'ga:sessions',
      'sort': '-ga:sessions',
      'max-results': 5
    })
    .then(function(response) {

      var data = [];
      var colors = ['#D4CCC5','#4D5360','#949FB1','#E2EAE9','#F7464A'];

      response.rows.forEach(function(row, i) {
        data.push({
          label: row[0],
          value: +row[1],
          color: colors[i]
        });
      });

      new Chart(makeCanvas('chart-5-container')).Pie(data),
      generateLegend('legend-5-container', data);
    });
  }

  function renderMinuteChart(ids) {
    query({
      'ids': ids,
      'dimensions': 'ga:minute',
      'metrics': 'ga:sessions',
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

      new Chart(makeCanvas('chart-6-container')).Doughnut(data),
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