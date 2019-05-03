var canvas, myQuote;

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
    
    createRequest();
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


function createRequest(){
    requestAddress = "http://api.forismatic.com/api/1.0/";
    requestMethod = "method=getQuote";
    requestFormat = "format=jsonp";
    requestLanguage = "lang=ru";
    requestJSONP = "jsonp=parseQuote";
    
    request = document.createElement("script");
    request.src = requestAddress + "?" + requestMethod + "&" + requestFormat + "&" + requestLanguage + "&" +requestJSONP;
    request.async = true;
    document.head.appendChild(request);
}


function parseQuote(response){
    myQuote = response.quoteText;
}


function drawText(){
    var context = canvas.getContext("2d");
 
    context.fillStyle = "rgba(0, 0, 0, 0.2)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "45px Gabriola";
    context.fillStyle = "white";
    
    var words = myQuote.split(" ");
    var string = words[0];
    var strings = [];
    
    for (var i=1; i < words.length; i++){
        var testString = string + " " + words[i];
        if (context.measureText(testString).width > 580){
            strings.push(string);
            string = words[i];
        }
        else{
            string = testString;
        }
    }
    strings.push(string);
    
    for (var i=0; i < strings.length; i++){
        var xForTextBeginning = (canvas.width - context.measureText(strings[i]).width)/2;
        var yForTextBeginning = ((canvas.height - 45*(strings.length-1))/2) + 45*i;
        context.fillText(strings[i], xForTextBeginning, yForTextBeginning);
    }
}


createPage();