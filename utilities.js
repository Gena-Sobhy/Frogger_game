function animate() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx2.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx3.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx4.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx3.clearRect(0, 0, canvas1.width, canvas1.height);

    handleRipples();
    ctx2.drawImage(background_lv12 ,0, 0, canvas1.width, canvas1.height);
    handleParticles();
    frogger.update();
    frogger.draw();

    handleObstacles();
    handleScoreBoard();
    ctx4.drawImage(grass ,0, 0, canvas1.width, canvas1.height);
    frame++;
        requestAnimationFrame(animate);
}
animate();

// event listeners
window.addEventListener("keydown" , function(e) {
    keys = [];
    keys[e.keyCode] = true;

    if(keys[37] || keys[38] ||keys[39] ||keys[40] ) {
        frogger.jump();
    }
})

// player idle
window.addEventListener("keyup" , function(e) {
    delete keys[e.keyCode];
    frogger.moving = false;
    frogger.frameX = 0;
})

// player's score
function scored() {
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas1.width/2 - frogger.width/2;
    frogger.y = canvas1.height - frogger.height -40;
}

function handleScoreBoard(){
    ctx4.fillStyle = "Black";
    ctx4.strokeStyle = "Black";
    ctx4.font = '15px Verdana, sans-serif';
    ctx4.strokeText("Score" ,265 ,15);
    ctx4.font = '60px Verdana, sans-serif';
    ctx4.fillText(score, 270, 65)
    ctx4.font = '15px Verdana, sans-serif';
    ctx4.strokeText("GAME SPEED: " + gameSpeed.toFixed(1) ,10 ,15);
    ctx4.strokeText("Collisions: " + collisionsCount ,10 ,40);
}

// collision detection between two rectangles
function collision(first, second) {
        return !(first.x > second.x + second.width ||  
            first.x + first.width < second.x  ||   
            first.y > second.y + second.height|| 
            first.y + first.height < second.y)
}

// reset game
function resetGame() {
    frogger.x = canvas1.width/2 - frogger.width/2;
    frogger.y = canvas1.height - frogger.height - 40;
    score = 0;
    collisionsCount++;
    gameSpeed = 1;
}