var sidhant;
var police1, police2, police3, police4, police5, police6, police7, police8, police9, leader;
var prisoner1, prisoner2, prisoner3, prisoner4, prisoner5, prisoner6, prisoner7, prisoner8, prisoner9, prisoner10;
var prisoner11, prisoner12, prisoner13, prisoner14, prisoner15, prisoner16, prisoner17, prisoner18;

function preload(){
 policeImage = loadImage("images/police.png");
 prisonerImage = loadImage("images/RandomPrisoner.png")
 sidhantImage = loadImage("images/Me.png");
 leaderImage = loadImage("images/Leader.png");
 CleanBedImage = loadImage("images/CleanBed.png");
 NormalBedImage = loadImage("images/NormalBed.png");
 DirtyBedImage = loadImage("images/DirtyBed.png");
}

function setup(){
createCanvas(displayWidth-50, displayHeight-50);
police1 = createSprite(50, 50, 10, 10)
police1.addImage(policeImage)
police1.scale = 0.1
police2 = createSprite(800, 500, 10, 10)
police2.addImage(policeImage)
police2.scale = 0.1
police3 = createSprite(750, 500, 10, 10)
police3.addImage(policeImage)
police3.scale = 0.1
police4 = createSprite(850, 500, 10, 10)
police4.addImage(policeImage)
police4.scale = 0.1
police5 = createSprite(700, 500, 10, 10)
police5.addImage(policeImage)
police5.scale = 0.1
police6 = createSprite(900, 500, 10, 10)
police6.addImage(policeImage)
police6.scale = 0.1
police7 = createSprite(650, 500, 10, 10)
police7.addImage(policeImage)
police7.scale = 0.1
police8 = createSprite(950, 500, 10, 10)
police8.addImage(policeImage)
police8.scale = 0.1
police9 = createSprite(600, 500, 10, 10)
police9.addImage(policeImage)
police9.scale = 0.1
leader = createSprite(800, 520, 10, 10)
leader.addImage(leaderImage)
leader.scale = 0.5

prisoner1 = createSprite(800, 600, 10, 10)
prisoner1.addImage(prisonerImage)
prisoner1.scale = 0.1
prisoner2 = createSprite(800, 600, 10, 10)
prisoner2.addImage(prisonerImage)
prisoner2.scale = 0.1
prisoner3 = createSprite(750, 600, 10, 10)
prisoner3.addImage(prisonerImage)
prisoner3.scale = 0.1
prisoner4 = createSprite(850, 600, 10, 10)
prisoner4.addImage(prisonerImage)
prisoner4.scale = 0.1
prisoner5 = createSprite(700, 600, 10, 10)
prisoner5.addImage(prisonerImage)
prisoner5.scale = 0.1
prisoner6 = createSprite(900, 600, 10, 10)
prisoner6.addImage(prisonerImage)
prisoner6.scale = 0.1
prisoner7 = createSprite(650, 600, 10, 10)
prisoner7.addImage(prisonerImage)
prisoner7.scale = 0.1
prisoner8 = createSprite(950, 600, 10, 10)
prisoner8.addImage(prisonerImage)
prisoner8.scale = 0.1
prisoner9 = createSprite(600, 600, 10, 10)
prisoner9.addImage(prisonerImage)
prisoner9.scale = 0.1
prisoner10 = createSprite(800, 600, 10, 10)
prisoner10.addImage(prisonerImage)
prisoner10.scale = 0.1
prisoner11 = createSprite(800, 620, 10, 10)
prisoner11.addImage(prisonerImage)
prisoner11.scale = 0.1
prisoner12 = createSprite(750, 620, 10, 10)
prisoner12.addImage(prisonerImage)
prisoner12.scale = 0.1
prisoner13 = createSprite(850, 620, 10, 10)
prisoner13.addImage(prisonerImage)
prisoner13.scale = 0.1
prisoner14 = createSprite(700, 620, 10, 10)
prisoner14.addImage(prisonerImage)
prisoner14.scale = 0.1
prisoner15 = createSprite(900, 620, 10, 10)
prisoner15.addImage(prisonerImage)
prisoner15.scale = 0.1
prisoner16 = createSprite(650, 620, 10, 10)
prisoner16.addImage(prisonerImage)
prisoner16.scale = 0.1
prisoner17 = createSprite(950, 620, 10, 10)
prisoner17.addImage(prisonerImage)
prisoner17.scale = 0.1
prisoner18 = createSprite(600, 620, 10, 10)
prisoner18.addImage(prisonerImage)
prisoner18.scale = 0.1
sidhant = createSprite(800, 580, 10, 10)
sidhant.addImage(sidhantImage)
sidhant.scale = 0.1

}

function draw(){
background("white");

if(keyDown(UP_ARROW)){
sidhant.y = sidhant.y - 5
}

if(keyDown(DOWN_ARROW)){
sidhant.y = sidhant.y + 5
}

if(keyDown(UP_ARROW)){
sidhant.y = sidhant.y - 5
}
        
if(keyDown(LEFT_ARROW)){
sidhant.x = sidhant.x - 5
}

if(keyDown(RIGHT_ARROW)){
sidhant.x = sidhant.x + 5
}

drawSprites();
}