//VARIABLES


//BUTTONS
let userButton = document.querySelector("button.Username");
let startButton = document.querySelector("button.Start");
let instructionsButton = document.querySelector("button.Instructions");
let backgroundButton = document.querySelector("button.Background");
let levelButton = document.querySelector("button.Level");

//OTHERS
let user = document.getElementById("name")



//START FUNCTION 

//PROMPT NAME 

const username = () => {
    let userName = prompt('Please enter your superhero name')
    if(userName === null || userName === ""){
        alert("Please enter a valid name")
        prompt('Please enter your name')
    }
    let name = user.innerHTML = "Welcome " + userName + "!"    
}

//IMAGES



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