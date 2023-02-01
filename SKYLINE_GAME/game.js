//VARIABLES


//BUTTONS
let userButton = document.querySelector("button.Username");
let startButton = document.querySelector("button.Start");
let instructionsButton = document.querySelector("button.Instructions");
let backgroundButton = document.querySelector("button.Background");
let levelButton = document.querySelector("button.Level");

//OTHERS
let user = document.getElementById("name")
let hero = document.querySelector("#hero")




//IMAGES

let buildingImgs = [   //create an array of images
"https://static.wixstatic.com/media/4c3267_dfc2e5523588476bb83816f9f5c9cc32~mv2.png", //build1
"https://static.wixstatic.com/media/4c3267_39c61ed87b5e411da2228967437469a7~mv2.png", "1" //build2   
                                                    //**ADD/CHANGE IMAGES ONCE CODE WORKS
]


//IMAGES 
let build1 = document.querySelector("#buid1")
let build2 = document.querySelector("#buid2")



//START FUNCTION 

//PROMPT NAME 

const username = () => {
    let userName = prompt('Please enter your superhero name')
    if(userName === null || userName === ""){
        alert("Please enter a valid name")
        prompt('Please enter your name')
    }
    let name = user.innerHTML = "Welcome " + userName + "!"    //**ADD superhero image
}






//RANDOM IMAGES 

const randArray = arr => {
    for(let i = arr.length -1; i>0; i--) {
        let random = Math.floor(Math.random() * (i+1));
        let a = arr[i];
        arr [i] = arr[random]
        arr[random] = a;
    }
    return arr; 
};

//console.log(randArray(buildingImgs))

//MOVE IMAGES 

// moveBuilding1 = setInterval(function(){
//     console.log("building moved")
//     build1.src = buildingImgs[0];
// }, 3000),

// moveBuildings = setInterval(function(){
//     console.log("building moved")
//     build2.src = buildingImgs[1];
// }, 5000),





// EVENT LISTENERS 

userButton.addEventListener('click', function(){
    username()
})


startButton.addEventListener('click', function(){
    console.log("hello")
})


instructionsButton.addEventListener('click', function(){
    console.log("hello")
})


backgroundButton.addEventListener('click', function(){
    console.log("hello")
})


levelButton.addEventListener('click', function(){
    console.log("hello")
})


// FLY 


class loseScenario {
    constructor(height, distance) {
        this.height = height;
        this.distance = distance;
    }
    
    lose() {
        if(this.distance <= this.height)
        alert("DEAD")
      }
    }


//BUILDINGS 

const building1 = parseInt(window.getComputedStyle(build1).getPropertyValue('height'))
console.log(building1)

const heroDistance = parseInt(window.getComputedStyle(hero).getPropertyValue('height'))
console.log(building1)


const death1 = new loseScenario(building1, heroDistance)  //create same function for all buildings. Hero Distance will stay the same, well it will change based on user's input
death1.lose()


// //MOVE 

// const moveBuilds = () => {
//     // let move = build1.classList
//     // move.add('move');
 
//      if(death1.lose()) {
//          build1.classList.remove('move');
//      }
//  }

// moveBuilds()



//FLY FUNCTION 


const fly = () => {
   let list = hero.classList
   list.add('fly');

    setTimeout(function(){
        hero.classList.remove('fly');
    }, 500);
}

document.addEventListener('keydown', e =>{
     if(e.code === "Space" || e.key === 32){
        console.log("space pressed")
        fly();
 }
})
 


//

//MOVE 

// const moveBuilds = () => {
//     let move = build1.classList
//     move.add('move');
 
//      if(death1.lose()) {
//          build1.classList.remove('move');
//      }
//  }

// moveBuilds()





