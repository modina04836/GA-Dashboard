	<link rel="stylesheet" type="text/css" href="site.css">
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
	<script data-require="jquery@1.10.1" data-semver="1.10.1" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

			<div id="active-users-container"></div>		          
			         
			<div class="inner1" id="box2">
				<div class="Chartjs">
				  <h3>This Week vs Last Week (by sessions)</h3>
				  <figure class="Chartjs-figure" id="chart-1-container"></figure>
				  <ol class="Chartjs-legend" id="legend-1-container"></ol>
				</div>
			</div>
			<div class="inner1" id="box3">
				<div class="Chartjs">
				  <h3>Minute(by sessions)</h3>
				  <figure class="Chartjs-figure" id="chart-6-container"></figure>
				  <ol class="Chartjs-legend" id="legend-6-container"></ol>
				</div>	
			</div>
			

						<div class="innerLeft">
						<div class="inner2">
							<div class="Chartjs">
							  <h3>This Year vs Last Year (by users)</h3>
							  <figure class="Chartjs-figure" id="chart-2-container"></figure>
							  <ol class="Chartjs-legend" id="legend-2-container"></ol>
							</div>
						</div>
						<div class="inner2">
							<div class="Chartjs">
							  <h3>Category by Device (by pageview)</h3>
							  <figure class="Chartjs-figure" id="chart-3-container"></figure>
							  <ol class="Chartjs-legend" id="legend-3-container"></ol>
							</div>
						</div>	
						<div class="inner2">
							
						</div>
						</div>
						
			<div class="innerRight">
			<div class="inner3">
				<div class="Chartjs">
				  <h3>Top City (by sessions)</h3>
				  <figure class="Chartjs-figure" id="chart-5-container"></figure>
				  <ol class="Chartjs-legend" id="legend-5-container"></ol>
				</div>
			</div>
			<div class="inner3">
			<div class="Chartjs">
							  <h3>Top Countries (by sessions)</h3>
							  <figure class="Chartjs-figure" id="chart-4-container"></figure>
							  <ol class="Chartjs-legend" id="legend-4-container"></ol>
							</div>
			</div>
			</div> 
			<div id="embed-api-auth-container"></div>
				<div id="view-selector-container"></div>
				<input type="hidden" id="view-name">

<script type="text/javascript" src="module2.js"></script>
<script type="text/javascript" src="chart/module1.js"></script>