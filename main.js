 canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 diwali = "diwali.jpg";

function new_image()
{
background_imgTag = new Image();
background_imgTag.onload = upload_background;
background_imgTag.src= diwali;  
 document.getElementById("myAudio").play();
}


function upload_background() {
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height);
    
}
