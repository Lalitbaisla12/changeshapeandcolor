var color = ["blue","red","green","purple","cyan","lightblue","pink","maroon"];
var index = 0;
var isTriangle = false;
var cShape = document.getElementById("change-shape");
var cColor = document.getElementById("change-color");
cShape.addEventListener("click",changeshape);
cColor.addEventListener("click",changecolor);

function changecolor(){
    if(index===color.length){
        index=0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    index++;
}

function changeshape(){
if(!isTriangle){
    var i = document.getElementsByClassName("inner")[0];
    i.className = "triangle-bottom-left";
    isTriangle=true;
}else{
    var i = document.getElementsByClassName("triangle-bottom-left")[0];
    i.className = "inner";
    isTriangle=false; 
}
}