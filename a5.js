let ctx;
let ctx2;

function setup() {
    let canvas = document.getElementById("oolimpycCanvas");
    let canvas2 = document.getElementById("circleCanvas");
    ctx = canvas.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    drawCircles();
    drawColorWheel();
}

function drawCircles() {

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(80,128,50,0,2*Math.PI);
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(140,70,50,0,2*Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(80,128,50,270*(Math.PI/180),300*(Math.PI/180));
    ctx.stroke();
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(200,128,50,0,2*Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(140,70,50,0,40*(Math.PI/180));
    ctx.stroke();
    
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(260,70,50,0,2*Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(200,128,50,270*(Math.PI/180),300*(Math.PI/180));
    ctx.stroke();
    
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(320,128,50,0,2*Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(260,70,50,0,40*(Math.PI/180));
    ctx.stroke();

} 

function degreesToRadians(degrees) {
    let radians = degrees*Math.PI/180;
    return radians;
}

function radiansToDegrees(radians) {
    let degrees = radians*180/Math.PI;
    return degrees;
} 




function drawSlice(x,y,r,startAngle,endAngle,color,pieces){
    
    ctx2.save();
    ctx2.translate(400,400);
    if (pieces > 2) {
        ctx2.rotate(degreesToRadians(360/pieces/2));
    }
    
    ctx2.fillStyle = "hsl("+color+",100%,50%)";
    ctx2.beginPath();
    ctx2.moveTo(x,y);
    ctx2.arc(x,y,r,startAngle,endAngle);
    ctx2.fill();
    
    ctx2.restore();
}

function drawColorWheel() {
    let pieces = document.getElementById("colorCount").value;
    let color = 360;
    let startAngle = 0;
    let slice = 360/pieces;

    
    if (pieces <= 0) {
        ctx2.clearRect(0,0,800,800);
    } else {
        
        for (i = 0; i < pieces; i++) {
            if (pieces > 2) {
                drawSlice(0,0,300,degreesToRadians(startAngle - 90),degreesToRadians(color - 90),color,pieces);
                color -= slice;
            } else {
           
                drawSlice(0,0,300,degreesToRadians(startAngle),degreesToRadians(color),color,pieces);
                color -= slice;
            }
        }
    }
}
            
            
    
     
    



