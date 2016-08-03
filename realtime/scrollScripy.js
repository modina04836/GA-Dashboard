var WebScroll = {
   sites: ['http://www.gmanetwork.com/portal', 'http://www.gmanetwork.com/entertainment', 'http://www.gmanetwork.com/news'], 
   currentFrame: 0, 
   loadFrame: function() {
       $('#content').html('<object id="obj" width="100%" height="100%" data="' + this.sites[ this.currentFrame ] + '"></object>');
   }, 
   scrollFrame: function() {
       var self = this, 
           $scr = $('#scr')[0];

       (function scroll() {
           setTimeout(function(){
               if($scr.scrollTop < ($scr.scrollHeight - $scr.offsetHeight) )
               {
                   $scr.scrollTop = $scr.scrollTop + 1;
                   scroll();
               } 
               else 
               {
                   $scr.scrollTop = 0;
                   self.loopFrames(); //executes loopFrames function when scroll hits the bottom
               }
           }, 15);
       })();
   },
   loopFrames: function() {
       var siteSize = this.sites.length; //length of the site array (3)

       // if (siteSize <= 0) 
       //     return;

       if (this.currentFrame < (siteSize - 1)) //current frame (starts from 0) less than [3-1 or 2] 
       {
           this.currentFrame++; //load another page in the site array
       } 
       else 
       {  
           this.currentFrame = 0; //if sitesize reached max length of array. loops back to 0 index
       }
       this.loadFrame(); //calls loadFrame function
       this.scrollFrame(); //calls scrollFrame function
   },
   init: function() {
       this.loadFrame(); //calls loadFrame function
       this.scrollFrame(); //calls scrollFrame function
   }
};

$(document).ready(function(){
   WebScroll.init(); //executes whole script within var WebScroll
});


