
let img;
let img2;
function preload(){
  // put preload code here
img = loadImage('assets/car.png');
img2 = loadImage('assets/palm.png');
}
var realframeCount;
var realframeCount2;
var y;
var speed;

var y2;
var speed2;

var y3;
var speed3;

var y4;
var speed4;

var y5;
var speed5;

var y6;
var speed6;

var xx;
var yy;

var xx1;
var yy1;

var xxx;
var yyy;

function setup() {

  createCanvas(windowWidth,windowHeight)
  realframeCount=0;
  realframeCount2=0;

  y=(height/1.5);
  speed=-1.1;

  y2=(height/1.5);
  speed2=-2.2;

  y3=(height/1.5);
  speed3=-3.3;

  y4=(height/1.5);
  speed4=-4.4;

  y5=(height/1.5);
  speed5=-5;

  y6=(height/1.5);
  speed6=-6;
  // put setup code here
}

function draw() {

  realframeCount2=realframeCount2+1;

  realframeCount=realframeCount+1;
  if (frameCount==60){frameCount=0; realframeCount=realframeCount}
noFill()



if (realframeCount<=100){
  stroke(lerpColor(color('#9c199b'),color('#e04ddf'),realframeCount/100));
}
if (realframeCount>100){
  stroke(lerpColor(color('#e04ddf'),color('#9c199b'),(realframeCount-100)/100));
}
if(realframeCount==200){realframeCount=0}

  //stroke(lerpColor(color('red'),color('blue'),realframeCount/20));

  background('black')

  strokeWeight(1.5)
  line(width/2,height/2,7700,height);
  line(width/2,height/2,7400,height);
  line(width/2,height/2,7100,height);
  line(width/2,height/2,6800,height);
  line(width/2,height/2,6500,height);
  line(width/2,height/2,6200,height);
  line(width/2,height/2,5900,height);
  line(width/2,height/2,5600,height);
  line(width/2,height/2,5300,height);
  line(width/2,height/2,5000,height);
  line(width/2,height/2,4700,height);
  line(width/2,height/2,4400,height);
  line(width/2,height/2,4100,height);
  line(width/2,height/2,3900,height);
  line(width/2,height/2,3600,height);
  line(width/2,height/2,3300,height);
  line(width/2,height/2,3000,height);
  line(width/2,height/2,2700,height);
  line(width/2,height/2,2400,height);
  line(width/2,height/2,2100,height);
  line(width/2,height/2,1800,height);
  line(width/2,height/2,1500,height);
  line(width/2,height/2,1200,height);
  line(width/2,height/2,900,height);
  line(width/2,height/2,600,height);
  line(width/2,height/2,300,height);
  line(width/2,height/2,0,height);
  line(width/2,height/2,-300,height);
  line(width/2,height/2,-600,height);
  line(width/2,height/2,-900,height);
  line(width/2,height/2,-1200,height);
  line(width/2,height/2,-1500,height);
  line(width/2,height/2,-1700,height);
  line(width/2,height/2,-2000,height);
  line(width/2,height/2,-2300,height);
  line(width/2,height/2,-2600,height);
  line(width/2,height/2,-2900,height);
  line(width/2,height/2,-3200,height);
  line(width/2,height/2,-3500,height);
  line(width/2,height/2,-3800,height);
  line(width/2,height/2,-4100,height);



if(y>height){speed=0;y=(height/1.5);}
y=y+speed;
speed=speed+0.05;
line(0,y,width,y);

if(y2>height){speed2=0;y2=(height/1.5);}
y2=y2+speed2;
speed2=speed2+0.05;
line(0,y2,width,y2);

if(y3>height){speed3=0;y3=(height/1.5);}
y3=y3+speed3;
speed3=speed3+0.05;
line(0,y3,width,y3);

if(y4>height){speed4=0;y4=(height/1.5);}
y4=y4+speed4;
speed4=speed4+0.05;
line(0,y4,width,y4);








  //noStroke()
  fill("BLACK")
    rect(-1,-1,width,height/1.5)









    if (realframeCount<=100){
      stroke(lerpColor(color('#4e209a'),color('#8e008d'),realframeCount/100));
    }
    if (realframeCount>100){
      stroke(lerpColor(color('#8e008d'),color('#4e209a'),(realframeCount-100)/100));
    }

angleMode(DEGREES)
strokeWeight(0.2)
push()
scale(2*(width/800),2.8*(height/600))
translate(0,(height/600))
translate(0,-180)
rotate(-90)
//translate(0,0)
scale(-1.6,2)

line(100,0, 100,600)
line(200,0, 200,600)


  push()
  translate(100,(frameCount/3)-100);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)-80);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)-60);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)-40);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)-20);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3));
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+20);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+40);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+60);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+80);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+100);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+120);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+140);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+160);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  translate(100,(frameCount/3)+180);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()









  push()
  scale(1,-1)
  translate(100,(frameCount/3));
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-20);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-40);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-60);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-80);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-100);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-120);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-140);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-160);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-180);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-200);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-220);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-240);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-260);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-280);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  push()
  scale(1,-1)
  translate(100,(frameCount/3)-300);
  bezier(0,0,0,36.42,100,63.58,100,100)
  pop()

  pop()
strokeWeight(1)
fill(73, 00, 100, 100)
stroke('#7300bb')

beginShape();
vertex(0, height/1.5);
vertex(0, height/1.75);
vertex(width/10, height/2);
vertex(2*width/10, height/1.65);
vertex(3*width/10, height/1.6);
vertex(4*width/10, height/1.5);
vertex(5*width/10, height/1.6);
vertex(6*width/10, height/1.5);
vertex(7*width/10, height/1.8);
vertex(8*width/10, height/1.7);
vertex(9*width/10, height/1.9);
vertex(10*width/10, height/2);
vertex(10*width/10, height/1.5);
endShape(CLOSE);

fill(120, 00, 150, 100)

beginShape();
vertex(0, height/1.5);
vertex(0, height/1.7);
vertex(width/10, height/1.8);
vertex(2*width/10, height/1.7);
vertex(3*width/10, height/1.5);
vertex(4*width/10, height/1.6);
vertex(5*width/10, height/1.5);
vertex(6*width/10, height/1.6);
vertex(7*width/10, height/1.6);
vertex(8*width/10, height/1.9);
vertex(9*width/10, height/1.7);
vertex(10*width/10, height/1.9);
vertex(10*width/10, height/1.5);
endShape(CLOSE);

  if (realframeCount<=100){
    fill(lerpColor(color('#d60047'),color('#d1264f'),realframeCount/100));
  }
  if (realframeCount>100){
    fill(lerpColor(color('#d1264f'),color('#d60047'),(realframeCount-100)/100));
  }




push()
translate(width/2,(height/600))


strokeWeight(13)
stroke('black')
arc(0, (height/1.7)-8, 200, 200, 135, 405, CHORD);

if (realframeCount<=100){
  fill(lerpColor(color('#ff000f'),color('#d60047'),realframeCount/100));
}
if (realframeCount>100){
  fill(lerpColor(color('#d60047'),color('#ff000f'),(realframeCount-100)/100));
}

strokeWeight(10)
arc(0, (height/1.7)-8, 197, 192, 155, 385, CHORD);

if (realframeCount<=100){
  fill(lerpColor(color('#ff3d00'),color('#ff000f'),realframeCount/100));
}
if (realframeCount>100){
  fill(lerpColor(color('#ff000f'),color('#ff3d00'),(realframeCount-100)/100));
}

strokeWeight(7)
arc(0, (height/1.7)-8, 195, 195, 170, 370, CHORD);

if (realframeCount<=100){
  fill(lerpColor(color('#ff7300'),color('#ff3d00'),realframeCount/100));
}
if (realframeCount>100){
  fill(lerpColor(color('#ff3d00'),color('#ff7300'),(realframeCount-100)/100));
}

strokeWeight(6)
arc(0, (height/1.7)-3-8, 193, 193, 182, 358, CHORD);

pop()



if(realframeCount2%100==0){
  realframeCount2=0;

  xx=random(3*width/12,9*width/12);
  yy=random(height/1.7,height/1.7);
  while(xx>4*width/12 && xx<8*width/12){xx=random(3*width/12,9*width/12);}

  xxx=xx;
  yyy=yy;

  if(xxx>width/2 && yyy<height/2){
    xx1=xxx-width/2;
    yy1=(height/2)-yyy;
  }

  if(xxx>width/2 && yyy>height/2){
    xx1=xxx-width/2;
    yy1=yyy-height/2;
  }

  if(xxx<width/2 && yyy<height/2){
    xx1=(width/2)-xxx;
    yy1=(height/2)-yyy;
  }

  if(xxx<width/2 && yyy>height/2){
    xx1=(width/2)-xxx;
    yy1=yyy-height/2;
  }


}

if(xxx>width/2 && yyy<height/2){
  xx=xx+xx1/35
  yy=yy-yy1/35}

if(xxx>width/2 && yyy>height/2){
xx=xx+xx1/35
yy=yy+yy1/35}


if(xxx<width/2 && yyy<height/2){
  xx=xx-(xx1)/35
  yy=yy-yy1/35}

if(xxx<width/2 && yyy>height/2){
  xx=xx-(xx1)/35
  yy=yy+yy1/35}

fill(73, 00, 100, 200)
//ellipse(xx,yy,10+realframeCount2*2);
//image(img2, xx, yy-400);

image(img, (mouseX/3)+(width/3), height/1.2, 0.7*width/4,0.7*width/7);
imageMode(CENTER);

image(img2, xx, yy-100,10+realframeCount2*9,10+realframeCount2*18);


  // put drawing code here
}
