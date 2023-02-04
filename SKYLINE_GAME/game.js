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

//________________________________________________________________________________________________________________________________________________________________________________
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
//START FUNCTION 

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
}, 4000);


//________________________________________________________________________________________________________________________________________________________________________________
//VARIABLES & ARRAYS SET FOR EASY ACCESS 

//IMAGES
let buildingImgs = [ 
    "https://static.wixstatic.com/media/4c3267_63500caa5b134136afdacbbc2f83da53~mv2.png",
    "https://static.wixstatic.com/media/4c3267_a644740356db4e84a39443b40ba3878d~mv2.png",
    "https://static.wixstatic.com/media/4c3267_ac2e660f14594a50ad496602c6fa55bb~mv2.png",
    "https://static.wixstatic.com/media/4c3267_7691f131ad5f4563ab3be75b5b67d5bb~mv2.png",
    "https://static.wixstatic.com/media/4c3267_9c6e98ef74214186af5badfaa4131fb0~mv2.png",
    "https://static.wixstatic.com/media/4c3267_c2340f9824c0427baa5ad84327650a03~mv2.png",
    "https://static.wixstatic.com/media/4c3267_e72539f5eade4d48844aedd4f9ebeddb~mv2.png",
    "https://static.wixstatic.com/media/4c3267_26567888ca404ae19b78d31adb139ce0~mv2.png",
    "https://static.wixstatic.com/media/4c3267_ee5e7561eafb443fa469e7538de237f1~mv2.png",
    ]

let heroImg = [
    "https://static.wixstatic.com/media/4c3267_39c61ed87b5e411da2228967437469a7~mv2.png"
]
let coinImg = [
    "https://media4.giphy.com/media/pyBb9Ec6Byt2GcNYDk/giphy.gif?cid=ecf05e47g1dvkt2oisc0xduo6h3n31byiqivfeaavjw22g7l&rid=giphy.gif&ct=g"
]


//______________________________________________________________________________________________________________________________________________

//CHARACTER ONE 


///HERO'S DISTANCE (ground up) WON'T CHANGE UNLESS USER CLICKS ON SPACEBAR   
const heroDistance = parseInt(window.getComputedStyle(hero).getPropertyValue('margin-bottom'))

//HERO'S WIDTH
const heroWidth = parseInt(hero.width)
console.log(heroWidth)


//HERO'S RIGHT 

const heroRight = parseInt(window.getComputedStyle(hero).getPropertyValue('margin-right'))
console.log(heroRight)


let heroDim = hero.getBoundingClientRect()

let heroLeft = heroDim.left
console.log(heroLeft)
let heroRht = heroDim.right
console.log(heroRht)
let heroTop = heroDim.top
console.log(heroTop)
let heroBottom = heroDim.bottom
console.log(heroBottom)





//________________________________________________________________________________________________________________________________________________________________________________
//COIN TRACKER

let coin =  document.querySelector(".coin")

//GET DIMENSIONS
let coinDim = coin.getBoundingClientRect()
console.log(coinDim)

let coinLeft = coinDim.left
let coinRht = coinDim.right
let coinTop = coinDim.top
let coinBottom = coinDim.bottom
let coinHeights = coinDim.height
let coinX = coinDim.x
let coinWidth = coinDim.width
let coinY = coinDim.y


let heroX = heroDim.x
let heroY = heroDim.y
let heroHeight = heroDim.height


    moveCoin= setInterval(function(){
        console.log("coin is moving")
      coin.src = coinImg[0];
      coin.classList.add('move'); 
 }, 4000);


//  let coinStart = 0 

//  function coinTotals000() {
//  if(coinX > heroX +  heroWidth && 
//     coinX + coinWidth < heroX   
//     && coinY > heroY + heroHeight &&
//     coinY + coinHeights < heroY) {
//         console.log("extra coin");
//       coinStart ++;}

//       document.querySelector('#Coins').innerHTML =  "Coins: " + coinStart;
//     }
    


 let coinStart = 0 
    //checks if both objects collided  
   let coinPoints = setInterval(function(){
     coinStart++;
        if (heroTop < coinBottom && heroRht < coinLeft) {    //heroTop < coinBottom && heroRight < coinLeft)
         let coinValue = document.querySelector('#Coins').innerHTML =  "Coins: " + coinStart 
         console.log(coinValue)
         if(coinStart === 10) {
            //change background to night or set timer to change background???
            alert("You're a winner!")
            clearInterval(coinPoints)
           clearInterval(timer)
       }} }, 5000);




//______________________________________________________________________________________________________________________________________________
//OTHER CHARACTERS: BASICALLY MAIN FUNCTION USED ACROSS THE GAME 

//BUILDING 1
let build1 = document.querySelector(".buid1")

//.getBoundingCLientRect () to get the character's postiions/dimensions 

let buildDim = build1.getBoundingClientRect()

let buildLeft = buildDim.left
console.log(buildLeft)
let buildRht = buildDim.right
console.log(buildRht)
let buildTop = buildDim.top
console.log(buildTop)
let buildBottom = buildDim.bottom
console.log(buildBottom)
buildHeights = buildDim.height
console.log(buildHeights)


moveBuild1 = setInterval(function(){
        console.log("build1 is moving")
     build1.src = buildingImgs[1];
     build1.classList.add('move');   
       console.log(build1.getBoundingClientRect())
 }, 4000);
    
   
//checks if both objects collided 
   let death1 = setInterval(function(){
    // if (heroDim.left <= buildDim.right && heroDim.top <= buildDim.bottom && heroDim.right <= buildDim.left && heroDim.bottom <= buildDim.top){
        if (heroDistance <= buildRht && heroTop <= buildBottom && heroRight <= buildLeft){
         build1.style.animation = "none";
          clearInterval(moveBuild1)  
          clearInterval(timer)
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);



// BUILDING 2

let build2 = document.querySelector(".buid2")
//Get Dimensions
let buildDim2 = build2.getBoundingClientRect()

    let build2Left = buildDim2.left
    let build2Rht = buildDim2.right
    let build2Top = buildDim2.top
    let build2Bottom = buildDim2.bottom
    build2Heights = buildDim2.height


    moveBuild2 = setInterval(function(){
        console.log("build2 is moving")
       build2.src = buildingImgs[2];
       build2.classList.add('move'); 
 }, 4000);
    
//checks if both objects collided 
   let death2 = setInterval(function(){
    // if (heroDim.left <= buildDim.right && heroDim.top <= buildDim.bottom && heroDim.right <= buildDim.left && heroDim.bottom <= buildDim.top){
        if (heroDistance <= build2Rht && heroTop <= build2Bottom && heroRight <= build2Left){
         build2.style.animation = "none";
          clearInterval(moveBuild2) 
          clearInterval(timer) 
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);




//BUILDING 3
let build3 = document.querySelector(".buid3")
//Get Dimensions
let buildDim3 = build3.getBoundingClientRect()

let build3Left = buildDim3.left
let build3Rht = buildDim3.right
let build3Top = buildDim3.top
let build3Bottom = buildDim3.bottom
let build3Heights = buildDim3.height



    moveBuild3 = setInterval(function(){
        console.log("build1 is moving")
      build3.src = buildingImgs[3];
      build3.classList.add('move'); 
 }, 4000);
    
    //checks if both objects collided 
   let death3 = setInterval(function(){
    // if (heroDim.left <= buildDim.right && heroDim.top <= buildDim.bottom && heroDim.right <= buildDim.left && heroDim.bottom <= buildDim.top){
        if (heroDistance <= build3Rht && heroTop <= build3Bottom && heroRight <= build3Left){
         build1.style.animation = "none";
          clearInterval(moveBuild3) 
          clearInterval(timer) 
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);

   
// BUILDING 4

let build4 = document.querySelector(".buid4")
//Get Dimensions
let buildDim4 = build4.getBoundingClientRect()

    let build4Left = buildDim4.left
    let build4Rht = buildDim4.right
    let build4Top = buildDim4.top
    let build4Bottom = buildDim4.bottom
    build4Heights = buildDim4.height


    moveBuild4 = setInterval(function(){
        console.log("build4 is moving")
         build4.src = buildingImgs[1];
        build4.classList.add('move'); 
       
 }, 4000);
    
    //checks if both objects collided 
   let death4 = setInterval(function(){
    // if (heroDim.left <= buildDim.right && heroDim.top <= buildDim.bottom && heroDim.right <= buildDim.left && heroDim.bottom <= buildDim.top){
        if (heroDistance <= build4Rht && heroTop <= build4Bottom && heroRight <= build4Left){
         build4.style.animation = "none";
          clearInterval(moveBuild4)  
          clearInterval(timer)
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);



// BUILDING 5

// let build5 = document.querySelector(".buid5")
// //Get Dimensions
// let buildDim5 = build5.getBoundingClientRect()

//     let build5Left = buildDim5.left
//     let build5Rht = buildDim5.right
//     let build5Top = buildDim5.top
//     let build5Bottom = buildDim5.bottom
//     build5Heights = buildDim5.height


//     moveBuild5 = setInterval(function(){
//         console.log("build5 is moving")
//        build5.src = buildingImgs[5];
//        build5.classList.add('move'); 
//  }, 4000);
    
//     //checks if both objects collided 
//    let death5 = setInterval(function(){
//     // if (heroDim.left <= buildDim.right && heroDim.top <= buildDim.bottom && heroDim.right <= buildDim.left && heroDim.bottom <= buildDim.top){
//         if (heroDistance <= build5Rht && heroTop <= build5Bottom && heroRight <= build5Left){
//          build5.style.animation = "none";
//           clearInterval(moveBuild5)  
//           clearInterval(timer)
            // clearInterval(coinPoints)
            // clearInterval(moveCoin)
//           console.log("Dead")
//       } 
//     }, 5000);



// // BUILDING 6

// let build6 = document.querySelector(".buid6")
// //Get Dimensions
// let buildDim6 = build6.getBoundingClientRect()

//     let build6Left = buildDim6.left
//     let build6Rht = buildDim6.right
//     let build6Top = buildDim6.top
//     let build6Bottom = buildDim6.bottom
//     build6Heights = buildDim6.height


//     moveBuild6 = setInterval(function(){
//         console.log("build6 is moving")
//        build6.src = buildingImgs[8];
//        build6.classList.add('move'); 
//  }, 4000);
    
//     //checks if both objects collided 
//    let death6 = setInterval(function(){
//     // if (heroDim.left <= buildDim.right && heroDim.top <= buildDim.bottom && heroDim.right <= buildDim.left && heroDim.bottom <= buildDim.top){
//         if (heroDistance <= build6Rht && heroTop <= build6Bottom && heroRight <= build6Left){
//          build6.style.animation = "none";
//           clearInterval(moveBuild6)  
//           clearInterval(timer)
//           clearInterval(coinPoints)
//           clearInterval(moveCoin)
//           console.log("Dead")
//       } 
//     }, 5000);



// BUILDING 7

let build7 = document.querySelector(".buid7")
//Get Dimensions
let buildDim7 = build7.getBoundingClientRect()

    let build7Left = buildDim7.left
    let build7Rht = buildDim7.right
    let build7Top = buildDim7.top
    let build7Bottom = buildDim7.bottom
    build7Heights = buildDim7.height


    moveBuild7 = setInterval(function(){
        console.log("build7 is moving")
       build7.src = buildingImgs[7];
       build7.classList.add('move'); 
 }, 4000);
    
    //checks if both objects collided 
   let death7 = setInterval(function(){
        if (heroDistance <= build7Rht && heroTop <= build7Bottom && heroRight <= build7Left){
         build7.style.animation = "none";
         build1.classList.add('move'); 
          clearInterval(moveBuild7)  
          clearInterval(timer)
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);


// BUILDING 8

let build8 = document.querySelector(".buid8")
//Get Dimensions
let buildDim8 = build8.getBoundingClientRect()

    let build8Left = buildDim8.left
    let build8Rht = buildDim8.right
    let build8Top = buildDim8.top
    let build8Bottom = buildDim8.bottom
    build8Heights = buildDim8.height


    moveBuild8 = setInterval(function(){
        console.log("build8 is moving")
       build8.src = buildingImgs[6];
       build8.classList.add('move'); 
 }, 4000);
    
    //checks if both objects collided 
   let death8 = setInterval(function(){
        if (heroDistance <= build8Rht && heroTop <= build8Bottom && heroRight <= build8Left){
         build8.style.animation = "none";
          clearInterval(moveBuild8)  
          clearInterval(timer)
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);





// BUILDING 9

let build9 = document.querySelector(".buid9")
//Get Dimensions
let buildDim9 = build9.getBoundingClientRect()

    let build9Left = buildDim9.left
    let build9Rht = buildDim9.right
    let build9Top = buildDim9.top
    let build9Bottom = buildDim9.bottom
    build9Heights = buildDim9.height


    moveBuild9 = setInterval(function(){
        console.log("build9 is moving")
       build9.src = buildingImgs[9];
       build9.classList.add('move'); 
 }, 4000);
    
    //checks if both objects collided 
   let death9 = setInterval(function(){
        if (heroDistance <= build9Rht && heroTop <= build9Bottom && heroRight <= build9Left){
         build9.style.animation = "none";
          clearInterval(moveBuild9)  
          clearInterval(timer)
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);



// BUILDING 10

let build10 = document.querySelector(".buid10")
//Get Dimensions
let buildDim10 = build10.getBoundingClientRect()

    let build10Left = buildDim10.left
    let build10Rht = buildDim10.right
    let build10Top = buildDim10.top
    let build10Bottom = buildDim10.bottom
    build10Heights = buildDim10.height


    moveBuild10 = setInterval(function(){
        console.log("build10 is moving")
       build10.src = buildingImgs[3];
       build10.classList.add('move'); 
 }, 4000);
    
    //checks if both objects collided 
   let death10 = setInterval(function(){
        if (heroDistance <= build10Rht && heroTop <= build10Bottom && heroRight <= build10Left){
         build10.style.animation = "none";
          clearInterval(moveBuild10)  
          clearInterval(timer)
          clearInterval(coinPoints)
          clearInterval(moveCoin)
          console.log("Dead")
      } 
    }, 5000);


// coinPoints = setInterval(function(){
//     console.log("coin")
//    coin.src = coinImg[0];
// //    coin.classList.add('move'); 
//     }, 3000);


// //Coin Tracker
// let coinStart = 0; 
//     //if hero touches coin, do the below 
//     let coinTot = setInterval(function(){
//     if (heroDistance > coinRht && heroTop > coinBottom && heroRht > coinLeft){
//         let totalCoins = coinStart += 1
//         let coin = document.querySelector('#Coins').innerHTML =  "Coins: " + totalCoins 
//          console.log(coin)
//     if(coinStart === 10) {
//         //change background to night or set timer to change background???
//         clearInterval(coinPoints)
//         clearInterval(timer)
//         alert("You WON")
//        // document.querySelector(".GameOver").src = otherImgs[1];   ----> change image to winning cup or something 
//     }
//     }  }, 1000);



//FLY FUNCTION: 


const fly = () => {
   let list = hero.classList
   list.add('fly');

    setTimeout(function(){
        hero.classList.remove('fly');
    }, 500);
}

document.addEventListener('keydown', e =>{
     if(e.code === "Space" || e.key === 32){
        const heroDistance = parseInt(window.getComputedStyle(hero).getPropertyValue('bottom'))
        console.log(heroDistance)
        console.log("space clicked")
        fly();
 }
})
 
}

// //  restartGame ()
 }

//RESTART GAME


reStart = restartButton.addEventListener('dblclick', restartGame);

function restartGame() {
    alert("Superman has been hit by a building. Superman died!")
    let start = prompt("Would you like to play again? Type 'yes' to start");
    if (start === "yes") {
        startGame()
    } else {
      alert ("Thanks for playing")
    }
}
