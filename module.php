<!DOCTYPE html>
<html>
<head>
    <title></title>

<script>
var GoogleAnalytics = {
    initialize: function () {},
    somethingOrOther: function () {},
    pushOrSomething: function () {
        console.log("== Google Analytics Pushed =======", arguments);
    }
};

// Sample Revealing Module Pattern object
var Analytics = (function () {
    var variableOrWhatever = "hello"+" ";
    variableOrWhatever += "Pat";

    var _pushOrSomething = function () {
        GoogleAnalytics.initialize(variableOrWhatever);
        GoogleAnalytics.somethingOrOther();
        // Use function.apply to pass the called parameters along
        GoogleAnalytics.pushOrSomething.apply(this, arguments);
    };

    var pageView = function () {
        _pushOrSomething('pageView');
    };

    var action = function () {
        _pushOrSomething('action');
    };

    var lastview = function() {
        _pushOrSomething('lasview');
    };

    return {
        variableOrWhatever: variableOrWhatever,
        pageView: pageView,
        action: action,
        lastview: lastview
    };
})();


var Edward = {
    pogi: function() {

    },
    nevermind: function() {
        
    }
};

var x = document.getElementsByClassName("pageview");
var y = document.getElementsByClassName("chart1");
var z = document.getElementsByClassName("chart2");


Analytics.pageView(x);
Analytics.action(y);
Analytics.lastview(z);
console.log("== Variable or whatever =====", Analytics.variableOrWhatever);
//console.log("== Trying to run a private method =====");
//Analytics._pushOrSomething();
</script>

<script type="text/javascript" src="apilibrary.js"></script>
<script type="text/javascript" src="dashboard.js"></script>
<script src="try.js"></script>
</head>
<body>

<div class="pageview">
<div id="embed-api-auth-container"></div>
<div id="chart-container"></div>
<div id="view-selector-container"></div>
</div>
<hr>

<div class="chart1">
<div id="chart-1-container"></div>
<div id="view-selector-1-container"></div>
</div>
<hr>
<dvi class="chart2">
<div id="view-selector-2-container"></div>
<div id="chart-2-container"></div>
</dvi>

</div>
</body>
</html>