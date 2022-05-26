var x =0;
var y =0;
var drawCircle="";
var drawRectangle="";

var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

 function start() 
 { document.getElementById("status").innerHTML = "System is listening please speak"; recognition.start(); }
recognition.onResult=function(event)
{

    console.log(event);

    var content= event.result[0][0].transcript;

    document.getElementById("status").innerHTML="The speech has been recognized as :- "+content;

    if(content=="circle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing circle.";
drawCircle="set";
    }
    if(content=="rectangle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing Rectangle.";
drawRectangle="set";
    }
}

function setup()
{
    canvas = createCanvas(900,600);
}

function draw()
{
    if(drawCircle=="set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn.";
drawCircle=""; 
        
    }
    if(drawRectangle=="set")
    {
       
        reactangle(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn.";
drawRectangle=""; 
        
    }
}