var canvas= new fabric.Canvas("myCanvas")
var playerX=100
var playerY=100
var blockHeight=30
var blockWidth=30
var playerobject=""
var blockobject=""

function updatePlayer() {
    fabric.Image.fromURL("player.png",function (img) {
    playerobject=img
    playerobject.scaleToWidth(150)
    playerobject.scaleToHeight(150)
    playerobject.set({
        top:playerY,
        left:playerX
    }) ;
    canvas.add(playerobject)   
    })


}
function blockUpdate(block) {
    fabric.Image.fromURL(block,function (img) {
        blockobject=img
        blockobject.scaleToWidth(blockWidth)
        blockobject.scaleToHeight(blockHeight)
        blockobject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockobject)
    })
} 
window.addEventListener("keydown",kd)
function kd(e){
    keyNo=e.keyCode;
console.log(keyNo)
if (keyNo==70) {
    blockUpdate("ironman_face.png")
    console.log("F")
}
if (keyNo==76) {
    blockUpdate("spiderman_legs.png")
    console.log("L")
}
if (keyNo==72) {
    blockUpdate("left hand.png")
    console.log("H")
}

  if (keyNo==82) {
      blockUpdate("thor_right_hand.png")
      console.log("R")
  }
  if (keyNo==66){
    blockUpdate("hulk_body.png")
    console.log("B")
  }
 
   if (keyNo==37){
       left()
       console.log("Left")
 }
 if (keyNo==38){
     up()
     console.log("Up")
 }
 if (keyNo==39){
     right()
     console.log("Right")
 }
 if (keyNo==40){
     down()
     console.log("Down")
 }
if ( e.shiftKey==true && keyNo==80){
    blockWidth=blockWidth+10
    blockHeight=blockHeight+10
    document.getElementById("width").innerHTML=blockWidth
    document.getElementById("height").innerHTML=blockHeight
    console.log("P+Shift")
}
if (e.shiftKey==true && keyNo==77){
    blockWidth=blockWidth-10
    blockHeight=blockHeight-10
    document.getElementById("width").innerHTML=blockWidth
    document.getElementById("height").innerHTML=blockHeight
    console.log("M+Shift")
}
}
function down(){
    if (playerY<=500){
    playerY=playerY+blockHeight
    canvas.remove(playerobject)
    updatePlayer()
    
}
}
function up(){
    if (playerY>=0){
        playerY=playerY-blockHeight
        canvas.remove(playerobject)
        updatePlayer()
    }
}
function right(){
    if (playerX<=700){
    playerX=playerX+blockWidth
    canvas.remove(playerobject)
    updatePlayer()
    }
}
function left(){
    if (playerX>=0){
        playerX=playerX-blockWidth
        canvas.remove(playerobject)
        updatePlayer()
    }
}