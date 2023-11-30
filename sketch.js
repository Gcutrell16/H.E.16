let myTree;
let myTree2;
let myTree3;
let myTree4;
let myTree5;
let myTree6;


function setup() {
  createCanvas(500, 300);
  myTree = new tree(width*0.4, height*0.5, 100);
  myTree2 = new tree(width*0.3, height/7, 75);
  myTree3 = new tree(width*0.8, height*0.1, 130);
  myTree4 = new tree(width*0.6, height/4, 40);
  myTree5 = new tree(width*0.1, height/3, 90);
  myTree6 = new tree(width*0.8, height*0.6, 50);
}

function draw() {
  background(93, 184, 212);
  myTree.display();
  myTree2.display();
  myTree3.display();
  myTree4.display();
  myTree5.display();
  myTree6.display();
}

//function keyReleased() {
  //myTree.move();
  //myTree2.move();
//}

class tree {
  constructor(xpos, ypos, size) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
  }

  display() {
    //branches and trunk
    noStroke();
    fill(69, 59, 50);
    //right branch
    rect(this.xpos+50, this.ypos+50, this.size*0.2);
        rect(this.xpos+50, this.ypos+50, this.size*0.2);
        rect(this.xpos+45, this.ypos+60, this.size*0.2);
        rect(this.xpos+40, this.ypos+70, this.size*0.2);
        rect(this.xpos+35, this.ypos+80, this.size*0.2);
        rect(this.xpos+20, this.ypos+85, this.size*0.2);
    //left branch
    rect(this.xpos-10, this.ypos+50, this.size*0.2);
      rect(this.xpos-5, this.ypos+60, this.size*0.2);
      rect(this.xpos+2, this.ypos+70, this.size*0.2);
      rect(this.xpos+8, this.ypos+80, this.size*0.2);
    //trunk
    rect(this.xpos+14, this.ypos+100, this.size*0.3);
      rect(this.xpos+16, this.ypos+130, this.size*0.3);
      rect(this.xpos+14, this.ypos+160, this.size*0.4);
    //dark green leaves
    fill(48, 92, 65);
    ellipse(this.xpos, this.ypos, this.size);
    ellipse(this.xpos+20, this.ypos-17, this.size*0.9);
    ellipse(this.xpos-27, this.ypos+7, this.size*0.9);
    ellipse(this.xpos-6, this.ypos+13, this.size*0.9);
    ellipse(this.xpos+40, this.ypos+7, this.size*0.9);
    ellipse(this.xpos+60, this.ypos+30, this.size*0.7);
    //light green leaves
    fill(80, 115, 70);
    ellipse(this.xpos+47, this.ypos-3, this.size*0.3);
    ellipse(this.xpos+83, this.ypos+25, this.size*0.4);
    ellipse(this.xpos+65, this.ypos-7, this.size*0.2);
    ellipse(this.xpos+64, this.ypos+10, this.size*0.5);
    ellipse(this.xpos+34, this.ypos-17, this.size*0.2);
    ellipse(this.xpos-7, this.ypos-7, this.size*0.4);
    ellipse(this.xpos-20, this.ypos+14, this.size*0.2);
    ellipse(this.xpos-30, this.ypos-7, this.size*0.4);
    ellipse(this.xpos-50, this.ypos+20, this.size*0.4);
   //yellow highlights
    fill(221, 224, 157);
    ellipse(this.xpos+47, this.ypos-5, this.size*0.1);
    ellipse(this.xpos+30, this.ypos-25, this.size*0.1);
    ellipse(this.xpos+50, this.ypos+20, this.size*0.1);
    ellipse(this.xpos+63, this.ypos+24, this.size*0.1);
    ellipse(this.xpos+90, this.ypos+24, this.size*0.1);
    ellipse(this.xpos+80, this.ypos+10, this.size*0.1);  
  }

 // move() {
   // this.xpos++;
  //}
}