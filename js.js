var canvas = document.createElement("canvas");
var context = document.createElement("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

function drawImages(canvas) {
    var collection = 3178572;

    var x = Math.floor(Math.random() * (canvas.width/3)) + canvas.width/3;
    var y = Math.floor(Math.random() * (canvas.height/3)) + canvas.height/3;
    
    var countDrawnImages = 0;
    var image;
    for (var i = 0; i < 4; i++){
        image = new Inage();
        image.crossOrigin = "Anonymous";
        
        var xForWidth = x;
        var xForBeginning = 0;
        if (i % 2 == 1){
            xForWidth = canvas.width - x;
            xForBeginning = x;
        }
        var yForHeight = y;
        var yForBeginning = 0;
        if (i > 1){
            yForHeight = canvas.height - y;
            yForBeginning = y;
        }
        image.src = 'https://source.unsplash.com/collection/' + collection + '/' + '300x200';
        image.onload = function() {
            context.drawImage(img, xForBeginning,yForBeginning);
            countDrawnImages += 1;         
            if (countDrawnImages == 4) {
                drawText(canvas);
            }
        }
    }
}

function drawText(canvas) {
    
}

document.body.appendChild(canvas);
drawImages(canvas);

