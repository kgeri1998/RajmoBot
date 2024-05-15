var robot = require("robotjs");

//Get the mouse position, retuns an object with x and y. 
var mouse=robot.getMousePos();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


async function run(){
    while (true){
        robot.moveMouse(getRandomInt(1000),mouse.y);
        await sleep(1000)
    }
}

run()