!function(t){function i(s){if(e[s])return e[s].exports;
	var n=e[s]={exports:{},
	id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,i),
	n.loaded=!0,n.exports
}
	var e={};
	return i.m=t,i.c=e,i.p="",
	i(0)}([function(t,i)
		{
			"use strict";
			gapi.analytics.ready(function(){
			gapi.analytics.createComponent("ActiveUsers2",{
			initialize:function(){
			this.activeUsers2=0,gapi.analytics.auth.once("signOut",
			this.handleSignOut_.bind(this))},
			execute:function(){
			this.polling_&&this.stop(),
			this.render_(),
			gapi.analytics.auth.isAuthorized()
			?this.pollActiveUsers2_():
			gapi.analytics.auth.once("signIn",this.pollActiveUsers2_.bind(this))},
			stop:function(){
			clearTimeout(this.timeout_),
			this.polling_=!1,this.emit("stop",
			{activeUsers2:this.activeUsers2})},
			render_:function(){var t=this.get();
			this.container="string"==typeof t.container?
			document.getElementById(t.container):t.container,
			this.container.innerHTML=t.template||this.template,
			this.container.querySelector("b").innerHTML=this.activeUsers2},
			pollActiveUsers2_:function(){var t=this.get(),
			i=1e3*(t.pollingInterval||5);
			if(isNaN(i)||5e3>i)throw new Error("Frequency must be 5 seconds or more.");
			this.polling_=!0,gapi.client.analytics.data.realtime.get
			({ids:t.ids,metrics:"rt:activeUsers"}).then(function(t){
			var e=t.result,s=e.totalResults?+e.rows[0][0]:0,n=this.activeUsers2;
			this.emit("success",{activeUsers2:this.activeUsers2}),
			s!=n&&(this.activeUsers2=s,this.onChange_(s-n)),
			1==this.polling_&&(this.timeout_=setTimeout(this.pollActiveUsers_.bind(this),
			i))}.bind(this))},onChange_:function(t){
			var i=this.container.querySelector("b");
			i&&(i.innerHTML=this.activeUsers2),this.emit("change",
			{activeUsers2:this.activeUsers2,delta:t}),
			t>0?this.emit("increase",{activeUsers2:this.activeUsers2,delta:t}):
			this.emit("decrease",{activeUsers2:this.activeUsers2,delta:t})},
			handleSignOut_:function(){this.stop(),
			gapi.analytics.auth.once("signIn",this.handleSignIn_.bind(this))},
			handleSignIn_:function(){this.pollActiveUsers2_(),
			gapi.analytics.auth.once("signOut",this.handleSignOut_.bind(this))},
	template:'<div class="ActiveUsers2">Last 60secs: <b class="ActiveUsers2-value"></b></div>'})})}]);
//# sourceMappingURL=active-users.js.map