
var canvas;

function createPage(){
    var myDiv = document.createElement("div");
    myDiv.width = document.documentElement.clientWidth;
    myDiv.height = document.documentElement.clientHeight; 
    document.body.appendChild(myDiv);
    
    canvas = document.createElement("canvas");
    canvas.width = myDiv.width;
    canvas.height = myDiv.height;
    myDiv.appendChild(canvas);
    
    drawImages();
}



function drawImages() {
    var context = canvas.createElement("2d");

    var x = Math.floor(Math.random() * (canvas.width/3)) + canvas.width/3;
    var y = Math.floor(Math.random() * (canvas.height/3)) + canvas.height/3;
    
    var countDrawnImages = 0;
    var image;
    for (var i = 0; i < 4; i++){
        image = new Image();
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
        image.src = 'https://source.unsplash.com/' + xForWidth + 'x' + yForHeight;
        
        image.onload = function() {
            context.drawImage(image, xForBeginning, yForBeginning);
            countDrawnImages += 1;         
            if (countDrawnImages == 4) {
                drawText();
            }
        }
    }
}

function drawText() {
    
}

createPage();

