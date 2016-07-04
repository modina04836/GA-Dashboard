var Module4 = {
init: function($elem, html) {
$elem.html(html);
}
};

awdawdawdwadawdwa
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

var viewSelector3 = new gapi.analytics.ViewSelector({
    container: 'view-selector-3-container'
  });

  // Render both view selectors to the page
  viewSelector3.execute();


  /**
   * Create the first DataChart for top countries over the past 30 days.
   * It will be rendered inside an element with the id "chart-1-container".
   */

  /**
   * Create the second DataChart for top countries over the past 30 days.
   * It will be rendered inside an element with the id "chart-2-container".
   */
  var dataChart3 = new gapi.analytics.googleCharts.DataChart({
    query: {
      metrics: 'ga:sessions',
      dimensions: 'ga:mobileDeviceBranding',
      'start-date': 'yesterday',
      'end-date': 'today',
      'max-results': 6,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'chart-3-container',
      type: 'PIE',
      options: {
        width: '100%',
        pieHole: 4/9
      }
    }
  });

  /**
   * Update the first dataChart when the first view selecter is changed.
   */
  /**
   * Update the second dataChart when the second view selecter is changed.
   */
  viewSelector3.on('change', function(ids) {
    dataChart3.set({query: {ids: ids}}).execute();
  });
});