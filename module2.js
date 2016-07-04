
gapi.analytics.ready(function() {

  /**
   * Authorize the user immediately if the user has already granted access.
   * If no access has been created, render an authorize button inside the
   * element with the ID "embed-api-auth-container".
   */
  gapi.analytics.auth.authorize({
    container: 'embed-api-auth-container',
    clientid: '403771359085-kqk8d8i52reqrjeoi1h3vmpuuc6818c9.apps.googleusercontent.com'
  });


  /**
   * Create a new ViewSelector instance to be rendered inside of an
   * element with the id "view-selector-container".
   */
  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector-container'
  });

  // Render the view selector to the page.
  viewSelector.execute();



  /**
   * Create a new DataChart instance with the given query parameters
   * and Google chart options. It will be rendered inside an element
   * with the id "chart-container".
   */
  var dataChartent = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '123835343',

      metrics: 'ga:users',
      dimensions: 'ga:userType',
      'start-date': 'yesterday',
      'end-date': 'today'
    },
    chart: {
      container: 'chart-ent-container',
      type: 'LINE',
      options: {
        width: '100%'
      }
    }
  });
  var dataChartent1 = new gapi.analytics.googleCharts.DataChart({
    query: {
       ids: '123835343',

      metrics: 'ga:sessions',
      dimensions: 'ga:browser',
      'start-date': 'yesterday',
      'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-ent1-container',
      type: 'PIE',
      options: {
        width: '100%',
        pieHole: 4/9
      }
    }
  });
  var dataChartent2 = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '123835343',

      metrics: 'ga:sessions',
      dimensions: 'ga:city',
      'start-date': 'yesterday',
      'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-ent2-container',
      type: 'BAR',
      options: {
        width: '100%',
      }
    }
  });

  var dataChartent3 = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '123835343',

      metrics: 'ga:sessions',
      dimensions: 'ga:mobileDeviceBranding',
      'start-date': 'yesterday',
      'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-ent3-container',
      type: 'PIE',
      options: {
        width: '100%',
        pieHole: 4/9
      }
    }
  });
  var dataChartent4 = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: '123835343',
      
      metrics: 'ga:sessions',
      dimensions: 'ga:country',
      'start-date': 'yesterday',
      'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-ent4-container',
      type: 'BAR',
      options: {
        width: '100%',
      }
    }
  });


  /**
   * Render the dataChart on the page whenever a new view is selected.
   */

    dataChartent.set({query: {ids:  'ga:123835343'}}).execute();
    dataChartent1.set({query: {ids: 'ga:123835343'}}).execute();
    dataChartent2.set({query: {ids: 'ga:123835343'}}).execute();
    dataChartent3.set({query: {ids: 'ga:123835343'}}).execute();
    dataChartent4.set({query: {ids: 'ga:123835343'}}).execute();
  });



