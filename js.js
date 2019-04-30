//var canvas = document.createElement("canvas");
//var context = document.createElement("2d");
//
//canvas.width = document.documentElement.clientWidth;
//canvas.height = document.documentElement.clientHeight;
//
//function drawImages(canvas) {
//    var collection = 3178572;
//
//    var x = Math.floor(Math.random() * (canvas.width/3)) + canvas.width/3;
//    var y = Math.floor(Math.random() * (canvas.height/3)) + canvas.height/3;
//    
//    var countDrawnImages = 0;
//    var image;
//    for (var i = 0; i < 4; i++){
//        image = new Inage();
//        image.crossOrigin = "Anonymous";
//        
//        var xForWidth = x;
//        var xForBeginning = 0;
//        if (i % 2 == 1){
//            xForWidth = canvas.width - x;
//            xForBeginning = x;
//        }
//        var yForHeight = y;
//        var yForBeginning = 0;
//        if (i > 1){
//            yForHeight = canvas.height - y;
//            yForBeginning = y;
//        }
//        image.src = 'https://source.unsplash.com/collection/' + collection + '/' + xForWidth + 'x' + yForHeight;
//        image.onload = function() {
//            context.drawImage(img, xForBeginning,yForBeginning);
//            countDrawnImages += 1;         
//            if (countDrawnImages == 4) {
//                drawText(canvas);
//            }
//        }
//    }
//}
//
//function drawText(canvas) {
//    
//}
//
//document.body.appendChild(canvas);
//drawImages(canvas);

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

firstpic = new Image();
secondpic = new Image();
thirdpic = new Image();
fouthpic = new Image();

function getRandomInt(min, max) {
    var n = Math.floor(Math.random() * (max - min + 1)) + min;
    return n
}

xsize = getRandomInt(220, 380);
xhelp = canvas.width - xsize;
ysize = getRandomInt(220, 380);
yhelp = canvas.height - ysize;

firstpic.crossOrigin = 'anonymous';
firstpic.src = 'https://source.unsplash.com/collection/1538150/' + xsize + 'x' + ysize;
firstpic.onload = function () {
    context.drawImage(firstpic, 0, 0);
    secondpic.crossOrigin = 'anonymous';
    secondpic.src = 'https://source.unsplash.com/collection/1538150/' + xsize + 'x' + yhelp;
    secondpic.onload = function () {
        context.drawImage(secondpic, 0, ysize);
        thirdpic.crossOrigin = 'anonymous';
        thirdpic.src = 'https://source.unsplash.com/collection/1538150/' + xhelp + 'x' + ysize;
        thirdpic.onload = function () {
            context.drawImage(thirdpic, xsize, 0);
            fouthpic.crossOrigin = 'anonymous';
            fouthpic.src = 'https://source.unsplash.com/collection/1538150/' + xhelp + 'x' + yhelp;
            fouthpic.onload = function () {
                context.drawImage(fouthpic, xsize, ysize);
                getQuote(context);

                document.body.appendChild(canvas);
            }

        }

    }

}


canvas.onclick = function () {
    var dataurl = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    link.href = dataurl;
    link.download = 'lab3.jpg';
    link.click();
    document.body.removeChild(link);

}

function setQuote(context, text) {

    context.font = 'Bold 22px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';

    var words = text.split(' ');
    var countword = words.length;
    var margintop = 270;
    var line = '';
    for (var m = 0; m < countword; m++) {
        line += words[m] + ' ';
        if (context.measureText(line).width > 450) {
            context.fillText(line, 300, margintop);
            line = '';
            margintop += 30;
        }
    }

    context.fillText(line, 300, margintop)

}

function getQuote(context) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=ru', true)

    xhr.onreadystatechange = function () {

        if (xhr.status === 200) {
            setQuote(context, JSON.parse(xhr.responseText).quoteText);
        }
    };
    xhr.send();
}
