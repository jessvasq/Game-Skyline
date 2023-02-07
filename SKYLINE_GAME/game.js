//VARIABLES

//________________________________________________________________________________________________________________________________________________________________________________

//BUTTONS
let userButton = document.querySelector("button.Username");
let startButton = document.querySelector("button.Start");
let instructionsButton = document.querySelector("button.Instructions");
let backgroundButton = document.querySelector("button.Background");
let levelButton = document.querySelector("button.Level");
let restartButton = document.querySelector("button.Restart");

//________________________________________________________________________________________________________________________________________________________________________________

//OTHERS
let user = document.getElementById("name")
let hero = document.querySelector(".hero")


//How To Play/Intructions. User can click for the instructions to show, and double click to hide them 
let howToPLay = "Try to collect as many coins for maximum points while trying to avoid the city buildings.Click on the spacebar to continue flying, the faster you click the higher you go. If you let go of the spacebar your hero will drop towards the groundThe game will end:Game-Over:  if you hit a building Win: if you have a total of 10 coins "


//________________________________________________________________________________________________________________________________________________________________________________
//DOM METHODS 

let howToButton = document.querySelector('button.Instructions')
let instruct = document.querySelector('div#text')

howToButton.addEventListener('click', e => {document.querySelector('div#text').innerHTML = howToPLay})  
howToButton.addEventListener('dblclick', e => {document.querySelector('div#text').innerHTML = "" })  

let backgroundOptions =  document.querySelector('.Background')
let boxBackg = document.querySelector('.box')
let currentBackg = document.querySelector('.box')

//___________________________________________________________________________________________________________________________________________________________________________

//BACKGROUND: Functions and event listeners to change background by clicking the background button 


function changeBackg(element) {
    element.style.backgroundImage = "url(https://static.wixstatic.com/media/4c3267_2eb5ee90a5aa455582466714cfd45854~mv2.jpg)"
}

function changeBackg2(element) {
    element.style.backgroundImage = "url(https://static.wixstatic.com/media/4c3267_33a92e2af3dd4c02b57d8a45adfd1cfb~mv2.jpg)"
}

backgroundOptions.addEventListener('dblclick', e => {    //element e & use arrow function 
    changeBackg(boxBackg)
})

backgroundOptions.addEventListener('click', e => {    //element e & use arrow function 
    changeBackg2(boxBackg)
})


//________________________________________________________________________________________________________________________________________________________________________________
//Function to request a username prior to running the game 

//GET USERNAME 


const username = () => {
    let userName = prompt('Please enter your superhero name')
    if(userName === null || userName === ""){
        alert("Please enter a valid name")
        prompt('Please enter your name')
    }
    let name = user.innerHTML = "Welcome " + userName + "!"    //**ADD superhero image
}

username()

//________________________________________________________________________________________________________________________________________________________________________________
//START FUNCTION --Keep in mind that two images will be moving once you land in the game. However, game won't start until user clicks "Start" button 

start = startButton.addEventListener('dblclick', startGame)

startButton.addEventListener('dblclick', startGame);

function startGame() {
     let ans = prompt("Are you ready to play? Type 'yes' to start")
     if (ans !== "yes") {
         prompt("Type 'yes' to start")
     }
  if(ans === "yes"){

//________________________________________________________________________________________________________________________________________________________________________________
//TIMER: Used SetInterval to keep track of time. If time hits 8, it will automically change the background 


let time = 0;
let timer = setInterval(function(){
    console.log("time")
    time++;

    let timePlay = document.querySelector('#Time').innerHTML =  "Time: " + time
    if(time === 8){
        changeBackg2(boxBackg)
    }
    
}, 3000);


//___________________________________________________________________________________________________________________________________________________________________________

//BUILDINGS
let build1 = document.querySelector(".buid1")
let build2 = document.querySelector(".buid2")
let build3 = document.querySelector(".buid3")
let build4 = document.querySelector(".buid4")
let build5 = document.querySelector(".buid5")
let build6 = document.querySelector(".buid6")
let build7 = document.querySelector(".buid7")
let build8 = document.querySelector(".buid8")
let build9 = document.querySelector(".buid9")
let build10 = document.querySelector(".buid10")


//________________________________________________________________________________________________________________________________________________________________________________
//VARIABLES & ARRAYS SET FOR EASY ACCESS 

//IMAGES

let buildingImgs = [   //create an array of images 
"https://static.wixstatic.com/media/4c3267_63836149e75e47dc8e1bd942c41211ad~mv2.png", //build1  
"https://static.wixstatic.com/media/4c3267_aed2ca0a426f4a4d87dee0f80a582a3d~mv2.png", //build2
"https://static.wixstatic.com/media/4c3267_63836149e75e47dc8e1bd942c41211ad~mv2.png", //build3
"https://static.wixstatic.com/media/4c3267_7f9457c5386d4c3fa8246edc08502153~mv2.png", //statue1 
"https://static.wixstatic.com/media/4c3267_f570fc50014c4a70a4209da47341eaa9~mv2.png",  
"https://static.wixstatic.com/media/4c3267_e4c7f702bc5e46739f255a455bea693c~mv2.png", // bridge
"https://static.wixstatic.com/media/4c3267_0d9d7d152ebf4a429dbab8b2cff18a8a~mv2.png",
"https://static.wixstatic.com/media/4c3267_d4dcd19afc3a44c291a20b4fd5c5c988~mv2.png",
"https://static.wixstatic.com/media/4c3267_52058fbd688e44578d5fe79aceca4c09~mv2.png",
"https://static.wixstatic.com/media/4c3267_f2a00f62460742bebbda5a47d313402b~mv2.png",
//**ADD/CHANGE IMAGES ONCE CODE WORKS
]

let heroImg = [
    "https://static.wixstatic.com/media/4c3267_39c61ed87b5e411da2228967437469a7~mv2.png"
]
let coinImg = [
    "https://media4.giphy.com/media/pyBb9Ec6Byt2GcNYDk/giphy.gif?cid=ecf05e47g1dvkt2oisc0xduo6h3n31byiqivfeaavjw22g7l&rid=giphy.gif&ct=g",
]


//______________________________________________________________________________________________________________________


//FLY FUNCTION  ***this works


const fly = () => {
    let list = hero.classList
    list.add('fly');
 
     setTimeout(function(){
         hero.classList.remove('fly');
     }, 1000);
 }
 
 document.addEventListener('keydown', e =>{
      if(e.code === "Space" || e.key === 32){
         const heroDistance = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
 
         const buildDistance = parseInt(window.getComputedStyle(build6).getPropertyValue('top'))
 
         console.log(heroDistance)
 
         console.log(buildDistance)
 
         console.log("space clicked")
         fly();
         
  }
 })


// //HERO

// let heroDim = hero.getBoundingClientRect()
// let heroHeight = heroDim.height
// console.log(heroHeight)
// let heroWidth = heroDim.width
// console.log(heroWidth)



// // BUILDING 6 DIMENSIONS
// //Get Dimensions: Height & Width 
// let buildDim6 = build6.getBoundingClientRect()
// let build6Height = buildDim6.height
// let build6Width = buildDim6.width
// console.log(buildDim6)



// //Function below checks if both objects (hero & building) have collided 
// let death = setInterval(function(){

//     const heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
//     console.log(heroTop)

//     const build6lftie= parseInt(window.getComputedStyle(build6).getPropertyValue('left'))
//     console.log(build6lftie)

    
//         console.log(heroWidth)
//         console.log(build6Width)
//         console.log(heroHeight)
//         console.log(build6Height)

//     if (heroTop >= 610 && heroWidth <= build6Width && heroHeight<=build6Height && build6lftie < heroWidth){   //I'm now using different dimensions to check if they've collided. These are more accurate 
//          build6.style.animation = "none";
//           console.log("Dead6")
//           clearInterval(death)//stops animation
//           clearInterval(timer) //stops timer 
//           clearInterval(imgtimer)   
//           clearInterval(imgtimer2)                  
//           clearInterval(coinPoints)//stops coins 
//           alert("Superman has died!!")
//         } 
//     }, 2000);


//CHANGE IMAGES -- Using images from BuildingImgs array and changing them automatically 


let imgs = 0;  //Assign variable starting at 0
let imgtimer = setInterval(function(){
    console.log("Skyscrapper approaching")
    imgs++;             

    if(imgs === 3) {                                     
        document.querySelector(".buid6").src = buildingImgs[1];  
        console.log("image changed succesfully")                   
    }
    if(imgs === 5) {
        document.querySelector(".buid6").src = buildingImgs[2];  
        console.log("image changed succesfully")  
     }

     if(imgs === 7) {                                   
        document.querySelector(".buid6").src = buildingImgs[3];  
        console.log("image changed succesfully") 
     }      

     if(imgs === 10) {                                   
        document.querySelector(".buid6").src = buildingImgs[4];  
        console.log("image changed succesfully") 
     }
     if(imgs === 15) {                                   
        document.querySelector(".buid6").src = buildingImgs[1];  
        console.log("image changed succesfully") 
     }
     if(imgs === 25) {                                   
        document.querySelector(".buid6").src = buildingImgs[6];  
        console.log("image changed succesfully") 
     }
     if(imgs === 30) {                                   
        document.querySelector(".buid6").src = buildingImgs[7];  
        console.log("image changed succesfully") 
     }
     if(imgs === 32) {                                   
        document.querySelector(".buid6").src = buildingImgs[8];  
        console.log("image changed succesfully") 
     }
    if(imgs === 35) {                                   
            document.querySelector(".buid6").src = buildingImgs[9];  
            console.log("image changed succesfully") 
        }
}, 1500);



//CHANGE IMAGES INTERCHANGEBLY -- Created two setIntervals to make the game difficult 
let imgs2 = 0;  //Assign variable starting at 0
let imgtimer2 = setInterval(function(){
    console.log("Skyscrapper2 approaching")
    imgs++;             

    if(imgs2 === 8) {                                     
        document.querySelector(".buid6").src = buildingImgs[9];  
        console.log("image2 changed succesfully")                   
    }
    if(imgs2 === 12) {
        document.querySelector(".buid6").src = buildingImgs[10];  
        console.log("image2 changed succesfully")  
     }

     if(imgs2 === 16) {                                   
        document.querySelector(".buid6").src = buildingImgs[6];  
        console.log("image2 changed succesfully") 
     }      

     if(imgs2 === 19) {                                   
        document.querySelector(".buid6").src = buildingImgs[1];  
        console.log("image2 changed succesfully") 
     }

//BELOW WILL CHANGE IMAGES FASTER, MAKING IT DIFFICULT TO WIN 

     if(imgs2 === 24) {                                   
        document.querySelector(".buid6").src = buildingImgs[8];  
        console.log("image2 changed succesfully") 
     }
     if(imgs2 === 27) {                                   
        document.querySelector(".buid6").src = buildingImgs[3];  
        console.log("image2 changed succesfully") 
     }
     if(imgs2 === 28) {                                   
        document.querySelector(".buid6").src = buildingImgs[5];  
        console.log("image2 changed succesfully") 
     }
     if(imgs2 === 31) {                                   
        document.querySelector(".buid6").src = buildingImgs[2];  
        console.log("image2 changed succesfully") 
     }
    if(imgs2 === 33) {                                   
            document.querySelector(".buid6").src = buildingImgs[4];  
            console.log("image2 changed succesfully") 
        }
}, 2000);


//___________________________________________________________________________________________________________________________________

//HERO

let heroDim = hero.getBoundingClientRect()
let heroHeight = heroDim.height
console.log(heroHeight)
let heroWidth = heroDim.width
console.log(heroWidth)



// BUILDING 6 DIMENSIONS
//Get Dimensions: Height & Width 
let buildDim6 = build6.getBoundingClientRect()
let build6Height = buildDim6.height
let build6Width = buildDim6.width
console.log(buildDim6)



//Function below checks if both objects (hero & building) have collided 
let death = setInterval(function(){

    const heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
    console.log(heroTop)

    const build6lftie= parseInt(window.getComputedStyle(build6).getPropertyValue('left'))
    console.log(build6lftie)

    
        console.log(heroWidth)
        console.log(build6Width)
        console.log(heroHeight)
        console.log(build6Height)

    if (heroTop >= 610 && heroWidth <= build6Width && heroHeight<=build6Height && build6lftie < heroWidth){   //I'm now using different dimensions to check if they've collided. These are more accurate 
         build6.style.animation = "none";
          console.log("Dead6")
          clearInterval(death)//stops animation
          clearInterval(timer) //stops timer 
          clearInterval(imgtimer)   
          clearInterval(imgtimer2)                  
          clearInterval(coinPoints)//stops coins 
          alert("Superman has died!!")
        } 
    }, 2000);




//______________________________________________________________________________________________________________________________________________________-

//COINS 
//COIN TRACKER

let coin =  document.querySelector(".coin")

//GET DIMENSIONS
let coinDim = coin.getBoundingClientRect()
let coinHeight = coinDim.height
let coinWidth = coinDim.width
console.log(coinDim)
console.log(coinWidth)


let coinStart = 0


//checks if both objects (hero & coin) have collided  
let coinPoints = setInterval(function(){
    
 const heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
    console.log(heroTop)

    const coinlftie= parseInt(window.getComputedStyle(coin).getPropertyValue('left'))
    console.log(coinlftie)

 if (heroTop >= 610 && heroWidth >= coinWidth && heroHeight >= coinHeight && coinlftie < -820  && coinlftie < -800 ){
    coinStart+= 1
    document.querySelector('#Coins').innerHTML =  "Coins: " + coinStart 
    }
    

     if(coinStart === 10) {
        changeBackg(boxBackg)
        alert("You're a winner!")
        clearInterval(coinPoints)
        coin.style.animation = "none";
       clearInterval(timer)
} }, 1000);

// //  restartGame ()
}

}

//RESTART GAME

reStart = restartButton.addEventListener('dblclick', restartGame);

function restartGame() {
    let start = prompt("Would you like to play again? Type 'yes' to start");
    if (start === "yes") {
        startGame()
    } else {
      alert ("Thanks for playing")
    }
}
