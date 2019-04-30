
var canvas;

function createPage(){

    
    canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    document.body.appendChild(canvas);
    
    drawImages();
}



function drawImages() {
    var context = canvas.getContext("2d");

    //var x = Math.floor(Math.random() * (canvas.width/3)) + canvas.width/3;
    //var y = Math.floor(Math.random() * (canvas.height/3)) + canvas.height/3;
    var x = 300;
    var y = 200;
    
    var countDrawnImages = 0;

    var countLoadedImages = 0;
    var images = new Array();
    for (var i = 0; i < 4; i++){
        var image = new Image();
        image.crossOrigin = "Anonymous";
        
        //var xForWidth = x;
        
        image.src = 'https://source.unsplash.com/' + x +'x' + y;
        
        image.onload = function() {
            images.push(image);
            countLoadedImages += 1;
            if (countLoadedImages == 4) {
                for (var j = 0; j < 4; j++) {
                    var xForBeginning = 0;
        if (j % 2 == 1){
            //xForWidth = canvas.width - x;
            xForBeginning = x;
        }
        //var yForHeight = y;
        var yForBeginning = 0;
        if (j > 1){
            //yForHeight = canvas.height - y;
            yForBeginning = y;
        }
                    context.drawImage(images[j], xForBeginning, yForBeginning);
                }
                
                
            }
            
            //countDrawnImages += 1;         
            //if (countDrawnImages == 4) {
            //    drawText();
            //}
        }
    }
}

createPage();