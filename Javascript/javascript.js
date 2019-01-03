document.addEventListener("DOMContentLoaded", function(){
    var c = document.getElementById("myCanvas");
    console.log(c);
    var ctx = c.getContext("2d");

    for ( var x=0; x < 4; x++) {
        ctx.beginPath()
        ctx.arc(x*150+37.5, 37.5, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
      
      }
      for (i=0; i < 4; i++) {
        ctx.beginPath()
        ctx.arc(i*150+ 112.5, 112.5, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
      
       }
      
      for (i=0; i < 8; i++) {
        ctx.beginPath()
        ctx.arc(562.5, 562.5, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
      
       }
      
      
      
      
      
       
      
      // ctx.beginPath();
       //ctx.arc(37.5, 37.5, 30, 0, 2 * Math.PI);
       //ctx.strokeStyle = "blue";
      // ctx.stroke();
      // ctx.fillStyle = "red";
      // ctx.fill();
      
      // ctx.beginPath();
      // ctx.arc(562.5, 562.5, 25, 0, 2 * Math.PI);
      // ctx.strokeStyle = "blue";
      // ctx.stroke();
      // ctx.fillStyle = "red";
      // ctx.fill();
        
      
       var canvas = document.getElementById("myCanvas");
      
      var ctx = canvas.getContext("2d");
      
      
      var x = 0
      var y = 0
      for(x = 0; x < 8; x++) {
      
       for(y = 0; y < 8; y++) {
         if (y%2) {
          if(x%2 === 0){
          ctx.fillStyle = "#000000";
           ctx.fillRect(x * 75,y * 75,75,75);
         }
         } else {
          if(x%2 !== 0){
          ctx.fillStyle = "#000000";
           ctx.fillRect(x * 75,y * 75,75,75);
         }
         }
         
        
       }
      }
  });

  



 