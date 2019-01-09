document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  console.log(canvas);
  var ctx = canvas.getContext("2d");

    var canvas = document.getElementById("myCanvas");
    
    var ctx = canvas.getContext("2d");
    
    
    var x = 0
    var y = 0
    for(x = 0; x < 8; x++) {
    
     for(y = 0; y < 8; y++) {
       if (y%2) {
        if(x%2 === 0){
        ctx.fillStyle = "#000000";
         ctx.fillRect(x * 100,y * 100,100,100);
       }
       } else {
        if(x%2 !== 0){
        ctx.fillStyle = "#000000";
         ctx.fillRect(x * 100,y * 100,100,100);
       }
       }
       
      
     }
    }
});


var imclueless = $("svg.one > *");

imclueless.on("click", function() {
  imclueless.removeClass("on");
  $(this).assClass("on");

});

setInterval(
  
)


  