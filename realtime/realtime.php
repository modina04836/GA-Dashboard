<head>
  <script>
  (function(w,d,s,g,js,fs){
    g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
    js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
    js.src='https://apis.google.com/js/platform.js';
    fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
  }(window,document,'script'));
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
  <script src="ga-dev-tools-master/build/javascript/embed-api/components/view-selector2.js"></script>
  <script src="ga-dev-tools-master/build/javascript/embed-api/components/date-range-selector.js"></script>
  <script src="ga-dev-tools-master/build/javascript/embed-api/components/active-users.js"></script>
  <!-- <script src="ga-dev-tools-master/build/javascript/embed-api/components/active-users2.js"></script>   -->
  <script type="text/javascript" src="realtimeScript.js"></script>
  <link rel="stylesheet" href="https://ga-dev-tools.appspot.com/public/css/chartjs-visualizations.css">
<link rel="stylesheet" type="text/css" href="realtimecss.css">
</head>

<body>
<div id="embed-api-auth-container"></div>
<div id="view-selector-container"></div>
<input type="hidden" id="view-name">

<div class="container">
<div id="active-users-container" style="float:right;font-size:20px;"></div><br><br><br>
<!-- <div id="active-users-container2" style="float:right;font-size:20px;border:1px solid #d9d9d9;padding:10px;border-radius:5%;"></div> -->


<div class="Chartjs">
  <h3>This Week vs Last Week (by sessions)</h3>
  <figure class="Chartjs-figure" id="chart-1-container"></figure>
  <ol class="Chartjs-legend" id="legend-1-container"></ol>
</div>
<div class="Chartjs">
  <h3>This Year vs Last Year (by users)</h3>
  <figure class="Chartjs-figure" id="chart-2-container"></figure>
  <ol class="Chartjs-legend" id="legend-2-container"></ol>
</div>
<div class="Chartjs">
  <h3>Category by Device (by pageview)</h3>
  <figure class="Chartjs-figure" id="chart-3-container"></figure>
  <ol class="Chartjs-legend" id="legend-3-container"></ol>
</div>
<div class="Chartjs">
  <h3>Top Countries (by sessions)</h3>
  <figure class="Chartjs-figure" id="chart-4-container"></figure>
  <ol class="Chartjs-legend" id="legend-4-container"></ol>
</div>
<div class="Chartjs">
  <h3>Top City (by sessions)</h3>
  <figure class="Chartjs-figure" id="chart-5-container"></figure>
  <ol class="Chartjs-legend" id="legend-5-container"></ol>
</div>
<div class="Chartjs">
  <h3>Minute(by sessions)</h3>
  <figure class="Chartjs-figure" id="chart-6-container"></figure>
  <ol class="Chartjs-legend" id="legend-6-container"></ol>
</div>

</body>


