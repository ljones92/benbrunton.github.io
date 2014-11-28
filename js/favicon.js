(function(){
    'use strict';
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
    //<link id="favicon" rel="icon" type="image/png" href="ical-icon-complete.png" />
    
    canvas.height = canvas.width = 32;
    
    var globalAlpha = 0;
    var fadeIn = true;
    
    function addLink(){
        var link = document.createElement('link');
        link.setAttribute('rel', 'icon');
        link.setAttribute('id', 'favicon');
        link.setAttribute('type', 'image/png');
        link.href = canvas.toDataURL('image/png');
        document.head.removeChild(document.getElementById('favicon'));
        document.head.appendChild(link);
    }
    
    function loop(){
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#222222';
        ctx.fillRect(0, 0, 32, 32);
        
        ctx.globalAlpha = globalAlpha;
        ctx.fillStyle = '#EEEEEE';
        ctx.font = '10px Arial';
        ctx.fillText('ben', 8, 20);
        addLink();
        
        if(fadeIn){
            
            if(globalAlpha < 1){
                globalAlpha += 0.002;
            }else{
                fadeIn = false;
            }
        }else{
            if(globalAlpha > 0){
                globalAlpha -= 0.002;
            }else{
                fadeIn = true;
            }
        }
        
        requestAnimationFrame(loop);
    }
    
    loop();
}());