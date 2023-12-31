const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
canvas1.width = 600;
canvas1.height = 600;

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");
canvas5.width = 600;
canvas5.height = 600;

// global variables
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;

const particlesArray = [];
let maxParticles = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];

// images
    // background
const background_lv12 = new Image();
background_lv12.src = "./assets/background_lvl2.png";
    // grass
const grass = new Image();
grass.src = "./assets/grass.png";
    //collisions
const collisions = new Image();
collisions.src = "./assets/collisions.png";
    //turtles
const turtle = new Image();
turtle.src = "./assets/turtles.png";
    //logs
const log = new Image();
log.src = "./assets/log.png";
    // cars
const car = new Image();
car.src = "./assets/cars.png";
let numberOfCars = 3;
    // frogger
const froggerSprite = new Image();
froggerSprite.src = "./assets/frog_spritesheet.png";
