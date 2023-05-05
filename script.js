xPos = 300
yPos = 300
let charCounter = 0

function setup() {
  createCanvas(600, 600);
  noStroke()
  rectMode(CENTER)
  myImage = loadImage('background.png');
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    charCounter += 1
    console.log(charCounter)
  } else if (keyCode === DOWN_ARROW) {
    charCounter -= 1
    console.log(charCounter)
  }
}
/////////////////////draw
function draw() {
  background(0);
  image(myImage, 00, 00, 600, 600)


  //the object
  fill(255)





  if (charCounter <= 0) {
    //upperbody
    rect(xPos, yPos, 50, 50)
    rect(xPos, yPos + 20, 15, 20)
    rect(xPos, yPos + 50, 30, 40)

    //legs
    // rect(xPos-8, yPos+80, 14,40)
    // rect(xPos+8, yPos+80, 14,40)

    /* 
   //legswalking left
    rect(xPos-8, yPos+80, 14,40)
    rect(xPos+8, yPos+80, 14,20)
  //legswalking right
    rect(xPos-8, yPos+80, 14,40)
    rect(xPos+8, yPos+80, 14,20)
    */
  }

  if (charCounter >= 1) {
    // background(0)
    fill(0)
    rect(xPos, yPos, 50, 50)
    rect(xPos, yPos + 20, 15, 20)
    rect(xPos, yPos + 50, 30, 40)
  }




  //movement speed of the square
  let moveSpeed = 2


  //walk function

  //UP
  if (keyIsDown(87) && yPos > 231 || (keyIsDown(87) && (xPos > 231 && xPos < 373 && yPos < 300))) {
    yPos -= moveSpeed
  }
  //DOWN
  if (keyIsDown(83) && yPos < 580) {
    yPos += moveSpeed
  }
  //LEFT
  if (keyIsDown(65) && xPos > 20 && yPos > 231 || (keyIsDown(65) && (xPos > 233 && yPos < 301))) {
    xPos -= moveSpeed
  }
  //RIGHT
  if (keyIsDown(68) && xPos < 580 && yPos > 231 || (keyIsDown(68) && (xPos < 372 && yPos < 301))) {
    xPos += moveSpeed
  }

  //legs walking thing

  //walking forward backwards

  //IF A DIRECTIONAL KEY IS PRESSED...
  if (keyIsDown(87) || keyIsDown(83) || keyIsDown(65) || keyIsDown(68)) {


    //IF WALKING LEFT / LEFT + UP / LEFT + DOWN
    if (keyIsDown(68) || (keyIsDown(68) && keyIsDown(87)) || (keyIsDown(68) && keyIsDown(83))) {
      if (int(sin(frameCount * 0.4) * 3 + 2) == 0) {
        rect(xPos + 15, yPos + 80, 14, 40)
        rect(xPos - 15, yPos + 70, 40, 14)
      } else if (int(sin(frameCount * 0.4) * 3 + 2) == 1 || 2) {
        rect(xPos - 1, yPos + 80, 14, 40)
      } else if (int(sin(frameCount * 0.4) * 3 + 2) == 3 || 4) {
        rect(xPos + 15, yPos + 80, 14, 40)
        rect(xPos - 15, yPos + 70, 40, 14)
      } else {

      }
    }

    //IF WALKING RIGHT / RIGHT + UP / RIGHT + DOWN
    if (keyIsDown(65) || (keyIsDown(65) && keyIsDown(87)) || (keyIsDown(65) && keyIsDown(83))) {
      if (int(sin(frameCount * 0.4) * 3 + 2) == 0) {
        rect(xPos - 15, yPos + 80, 14, 40)
        rect(xPos + 15, yPos + 70, 40, 14)
      } else if (int(sin(frameCount * 0.4) * 3 + 2) == 1 || 2) {
        rect(xPos + 1, yPos + 80, 14, 40)
      } else if (int(sin(frameCount * 0.4) * 3 + 2) == 3 || 4) {
        rect(xPos - 15, yPos + 80, 14, 40)
        rect(xPos + 15, yPos + 70, 40, 14)
      }
    }  //WALKING UP / DOWN (I THINK)
    if (keyIsDown(87) && !keyIsDown(65) && !keyIsDown(68) || keyIsDown(83) && !keyIsDown(65) && !keyIsDown(68)) {
      if (int(sin(frameCount * 0.3) + 1) == 0) {
        rect(xPos - 8, yPos + 80, 14, 40)
        rect(xPos + 8, yPos + 78, 14, 20)
      } else if (int(sin(frameCount * 0.3) + 1) == 1) {
        rect(xPos - 8, yPos + 78, 14, 20)
        rect(xPos + 8, yPos + 80, 14, 40)
      }
    }
  }

  //IF A DIRECTIONAL KEY IS **NOT** PRESSED
  else if (!keyIsDown(87) && !keyIsDown(83) && !keyIsDown(65) && !keyIsDown(68) || keyIsDown(65) && keyIsDown(68)) {
    rect(xPos - 8, yPos + 80, 14, 40)
    rect(xPos + 8, yPos + 80, 14, 40)
  }


  //console.log('X Position: ' + xPos)
  //console.log('Y Position: ' + yPos)
}


