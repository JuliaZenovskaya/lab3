
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
    
    var collections = [3178572, 502925, 583479, 311028];
    var countLoadedImages = 0;
    var images = [];
    
    for (var i = 0; i < 4; i++){
        var image = new Image();
        image.crossOrigin = "Anonymous";
        
        //var xForWidth = x;
        var randomCollection = collections[Math.floor(Math.random()*collections.length)];
        image.src = 'https://source.unsplash.com/collection/' + collections[i] + '/' + x +'x' + y;
        
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