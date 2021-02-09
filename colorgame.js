 var colors = generateRandomColors();

var squares = document.querySelectorAll(".square");
var colorD = document.getElementById("colorD");
var jumbo = document.getElementById("jumbo");
var pickedColor = selectColor();

for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
             changeColor(pickedColor);
             jumbo.style.backgroundColor = pickedColor;

        }
        else{
           this.style.backgroundColor ="#232323"
        }
    });
   
}

colorD.textContent = pickedColor;

function changeColor(color){
    for(var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}


function randomColor(){
    var one = Math.floor(Math.random()*256);
    var two = Math.floor(Math.random()*256);
    var three = Math.floor(Math.random()*256);

    return "rgb(" + one +", " + two + ", " + three + ")";
}



function selectColor(){
   var col = Math.floor(Math.random()*(colors.length));
    return colors[col];
}

function generateRandomColors(){
    var element =[];

    for(var i = 0; i<6; i++){
    
    
     element.push(randomColor());

    
    }
    return element;
}



