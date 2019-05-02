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
    var x = 300;
    var y = 200;
    
    var collections = [3178572, 502925, 583479, 311028];
    var countLoadedImages = 0;
    var images = [];
    
    for (var i = 0; i < 4; i++){
        var image = new Image();
        image.crossOrigin = "Anonymous";
        
        image.src = "https://source.unsplash.com/collection/" + collections[i] + "/300x200";
        
        image.onload = function() {
            images.push(image);
            countLoadedImages += 1;
            if (countLoadedImages == 4) {
                for (var j = 0; j < 4; j++) {
                    var xForBeginning = 0;
                    if (j % 2 == 1){
                        xForBeginning = x;
                    }
                    var yForBeginning = 0;
                    if (j > 1){
                        yForBeginning = y;
                    }
                    
                    if (j == 0){
                        context.drawImage(images[0], xForBeginning, yForBeginning);
                    }
                    if (j ==1){
                        context.drawImage(images[1], xForBeginning, yForBeginning);
                    }
                    if (j == 2){
                        context.drawImage(images[2], xForBeginning, yForBeginning);
                    }
                    if (j == 3){
                        context.drawImage(images[3], xForBeginning, yForBeginning);
                    }
                    //context.drawImage(images[j], xForBeginning, yForBeginning);
                }
            }
        }
    }
}

createPage();