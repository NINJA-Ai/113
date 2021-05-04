function preload() {

}
function setup()
{
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}


function draw() {
  image(video, 110, 110, 420, 250);

  fill(0, 100, 0);
  stroke(255, 0, 0);

  circle(80, 80, 80);
  circle(80, 400, 80);
  circle(560, 80, 80);
  circle(560, 400, 80);
  
  fill(0, 102, 153);
  stroke(0, 128, 0);
 
  rect(0, 0, 640, 20);
  rect(0, 0, 20, 480);
  rect(620, 0, 640, 480);
  rect(0, 460, 640, 480);
}
function take_snapshot(){    
    save('your_pic.png');
  }