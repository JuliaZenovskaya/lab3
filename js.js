var canvas;

function createPage(){  
    canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    document.body.appendChild(canvas);
    
    var saveLink = document.createElement("a");
    saveLink.hidden = true;

    var button = document.createElement("button");
    button.textContent = "SAVE";
    button.style.left = 8 + "px";
    button.style.top = 410 + "px";
    button.style.position = "absolute";
    button.style.color = "green";
    button.onclick = function(){
        saveLink.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        saveLink.download = "MyCollage.png";
        saveLink.click();
    }
    document.body.appendChild(button);
    
    drawImages();
}


function drawImages() {
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 200;
    
    var collections = [3178572, 502925, 583479, 311028];
    var countLoadedImages = 0;
    var images = [];
    
    var i = 0;
    for (i = 0; i < 4; i++){
        var image = new Image();
        image.crossOrigin = "Anonymous";
        
        image.src = "https://source.unsplash.com/collection/" + collections[i] + "/300x200";
        
        image.onload = (function(image) {
            return function() {
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
                        context.drawImage(images[j], xForBeginning, yForBeginning);
                    }
                    drawText();
                }
            }
        })(image); 
    }
    
}


function drawText(){
    
}


createPage();