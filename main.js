function preload()
{

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.size(300, 300);
    video.hide();

}
function draw()
{
    
    circle(30, 770, 50);
    circle(770, 30, 50);
    circle(30, 30, 50);
    circle(770, 770, 50);

}
