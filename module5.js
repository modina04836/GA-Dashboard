var Module5 = {
init: function($elem, html) {
$elem.html(html);
}
};


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

var viewSelector4 = new gapi.analytics.ViewSelector({
    container: 'view-selector-4-container'
  });

  // Render both view selectors to the page
  viewSelector4.execute();


  /**
   * Create the first DataChart for top countries over the past 30 days.
   * It will be rendered inside an element with the id "chart-1-container".
   */

  /**
   * Create the second DataChart for top countries over the past 30 days.
   * It will be rendered inside an element with the id "chart-2-container".
   */
  var dataChart4 = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:country',
      'start-date': 'yesterday',
      'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-4-container',
      type: 'BAR',
      options: {
        width: '100%',
      }
    }
  });

  /**
   * Update the first dataChart when the first view selecter is changed.
   */
  /**
   * Update the second dataChart when the second view selecter is changed.
   */
  viewSelector4.on('change', function(ids) {
    dataChart4.set({query: {ids: ids}}).execute();
  });
});